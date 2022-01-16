import { firstArray, secondArray, thirdArray } from "./state.js";
import cards from "./cards.js";

let paramListFirst = Object.keys(firstArray[1].params);
let paramListSecond = Object.keys(secondArray[1].params);
let paramListThird = Object.keys(thirdArray[1].params); 

/* for (let i = 0; i < paramListFirst.length; i++) {
  console.log(JSON.stringify(paramListFirst[i]))
} */

const addArrayProperty = () => {
  const searchParam = document.getElementById("search-param")
  
  
  for (let i = 0; i < paramListFirst.length; i++) {
    const newOption = document.createElement("option");
    searchParam.append(newOption);
    let newProperty = JSON.stringify(paramListFirst[i])
    console.log(newProperty)
    newOption.textContent = newProperty;
    newOption.setAttribute("value", newProperty);
  }
}

addArrayProperty()

const resultList = document.getElementById("result-list");
const searchResultList = document.getElementById("search-result");
const searchBtn = document.getElementById("search-btn");


const allArrays = [
  { value: "firstArray", name: "Illidan", firstArray },
  { value: "secondArray", name: "Jaina", secondArray },
  { value: "thirdArray", name: "Arthas", thirdArray },
];

let arraySelector = () => {
  const selectedArray = document.getElementById("array-name");
  for (let i = 0; i < allArrays.length; i++) {
    const newOption = document.createElement("option");
    selectedArray.append(newOption);
    newOption.textContent = `${allArrays[i].name}`;
    newOption.setAttribute("value", allArrays[i].value);
  }
};

arraySelector();






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

  // const result = [];
  // let sortingArray = [...initialArray];
  // sortingArray.sort(nestedSort(parentParamKey, searchParamKey, direction));
  // for (let i = 0; i < sortingArray.length; i++) {
  //   if (
  //     sortingArray[i][parentParamKey][searchParamKey] ===
  //     sortingArray[0][parentParamKey][searchParamKey]
  //   ) {
  //     result.push(sortingArray[i]);
  //     // const newResultP = document.createElement("p");
  //     // newResultP.textContent = `${sortingArray[i].name}. ${sortingArray[i][parentParamKey][searchParamKey]} ${measure}`;
  //     // resultList.append(newResultP);
  //   }
  // }
};

searchBtn.onclick = () => {
  const arrayName = document.getElementById("array-name").value;
  const objectName = document.getElementById("object-name").value;
  const searchParam = document.getElementById("search-param").value;
  const searchDirection = document.getElementById("search-direction").value;
  // const measure = document.getElementById("measure").value;
  startSort(eval(arrayName), objectName, searchParam, searchDirection, measure);

  cards(
    eval(arrayName).sort(nestedSort(objectName, searchParam, searchDirection)),
    searchResultList
  );
};

window.onload = () => {
  searchBtn.click();
};
