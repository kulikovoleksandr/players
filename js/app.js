import State from "./state.js";
const resultList = document.getElementById("result-list");
const searchBtn = document.getElementById("search-btn");

const state = State;


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

const startSort = (
  initialArray,
  parentParamKey,
  searchParamKey,
  direction = "asc",
  measure = ""
) => {
  resultList.textContent = "";
  const resultHeader = document.createElement("h6");
  resultList.append(resultHeader);
  let sortDirection = "";
  if (direction === "asc") {
    sortDirection = "low to high";
  } else sortDirection = "high to low";
  resultHeader.textContent = `Sorted ${sortDirection} by ${searchParamKey}`;

  const result = [];
  let sortingArray = [...initialArray];
  sortingArray.sort(nestedSort(parentParamKey, searchParamKey, direction));
  for (let i = 0; i < sortingArray.length; i++) {
    if (
      sortingArray[i].params[searchParamKey] ===
      sortingArray[0].params[searchParamKey]
    ) {
      result.push(sortingArray[i]);
      const newResultP = document.createElement("p");
      newResultP.textContent = `${sortingArray[i].name}. ${sortingArray[i].params[searchParamKey]} ${measure}`;
      resultList.append(newResultP);
    }
  }
};

searchBtn.onclick = () => {
  const arrayName = document.getElementById("array-name").value;
  const objectName = document.getElementById("object-name").value;
  const searchParam = document.getElementById("search-param").value;
  const searchDirection = document.getElementById("search-direction").value;
  const measure = document.getElementById("measure").value;

  startSort(eval(arrayName), objectName, searchParam, searchDirection, measure);
};
