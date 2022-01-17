import { firstArray, secondArray, thirdArray, allArrays } from "./state.js";
import cards from "./cards.js";

const resultList = document.getElementById("result-list");
const searchResultList = document.getElementById("search-result");
const searchBtn = document.getElementById("search-btn");
const arrayName = document.getElementById("array-name");

const addArrayProperty = () => {
  let params;
  for (let i = 0; i < allArrays.length; i++) {
    if (arrayName.value === allArrays[i].value) {
      params = Object.keys(allArrays[i].array[i].params);
    }
  }

  const searchParam = document.getElementById("search-param");
  searchParam.innerHTML = "";
  for (let i = 0; i < params.length; i++) {
    const newOption = document.createElement("option");
    searchParam.append(newOption);
    newOption.textContent = params[i];
    newOption.setAttribute("value", params[i]);
  }
};

arrayName.addEventListener("change", () => {
  addArrayProperty();
});

let arraySelector = () => {
  const selectedArray = document.getElementById("array-name");
  for (let i = 0; i < allArrays.length; i++) {
    const newOption = document.createElement("option");
    selectedArray.append(newOption);
    newOption.textContent = `${allArrays[i].name}`;
    newOption.setAttribute("value", allArrays[i].value);
  }
};

let nestedSort =
  (parentParamKey, searchParamKey = null, direction = "asc") =>
  (e1, e2) => {
    const a = searchParamKey
        ? e1[parentParamKey][searchParamKey]
        : e1[parentParamKey],
      b = searchParamKey
        ? e2[parentParamKey][searchParamKey]
        : e2[parentParamKey],
      sortOrder = direction === "asc" ? 1 : -1;
    return a < b ? -sortOrder : a > b ? sortOrder : 0;
  };

const sortedParamDirectionTxt = (searchParamKey, direction = "asc") => {
  resultList.textContent = "";
  const resultHeader = document.createElement("h6");
  resultList.append(resultHeader);
  let sortDirection = "";
  if (direction === "asc") {
    sortDirection = "low to high";
  } else sortDirection = "high to low";
  resultHeader.textContent = `Sorted ${sortDirection} by ${searchParamKey}`;
};

searchBtn.onclick = () => {
  const objectName = document.getElementById("object-name").value;
  const searchParam = document.getElementById("search-param").value;
  const searchDirection = document.getElementById("search-direction").value;
  sortedParamDirectionTxt(searchParam, searchDirection);

  cards(
    eval(arrayName.value).sort(
      nestedSort(objectName, searchParam, searchDirection)
    ),
    searchResultList
  );
};

window.onload = () => {
  arraySelector();
  addArrayProperty();
  searchBtn.click();
};
