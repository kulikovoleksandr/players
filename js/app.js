import State from "./state.js";
const resultList = document.getElementById("result-list");
const btnShowSmall = document.getElementById("btn-small");
const btnShowTall = document.getElementById("btn-tall");
const btnShowThin = document.getElementById("btn-thin");
const btnShowFat = document.getElementById("btn-fat");

const state = State;

let nestedSort =
  (parentParamKey, searchParamKey = null, direction = "asc") =>
  (e1, e2) => {
    const a = searchParamKey ? e1[parentParamKey][searchParamKey] : e1[parentParamKey],
      b = searchParamKey ? e2[parentParamKey][searchParamKey] : e2[parentParamKey],
      sortOrder = direction === "asc" ? 1 : -1;
    return a < b ? -sortOrder : a > b ? sortOrder : 0;
  };

const startSort = (initialArray, parentParamKey, searchParamKey, direction, descTxt, sortParamTxt, measure) => {
  resultList.textContent = "";
  const resultHeader = document.createElement("h6");
  resultList.append(resultHeader);
  resultHeader.textContent = descTxt;
  const result = []
  let sortingArray = [...initialArray];
  sortingArray.sort(nestedSort(parentParamKey, searchParamKey, direction));
  for (let i = 0; i < sortingArray.length; i++) {
    if (sortingArray[i].params[searchParamKey] === sortingArray[0].params[searchParamKey]) {
      result.push(sortingArray[i]);
      const newResultP = document.createElement("p");
      newResultP.textContent = `${sortingArray[i].name}. ${sortParamTxt} ${sortingArray[i].params[searchParamKey]} ${measure}`;
      resultList.append(newResultP);
    } 
  }
};

btnShowSmall.onclick = () => {
  startSort(state, "params", "height", "asc", "Самый мелкий:", "Рост:", "см");
};

btnShowTall.onclick = () => {
  startSort(state, "params", "height", "desc", "Самый высокий:", "Рост:", "см");
};

btnShowThin.onclick = () => {
  startSort(state, "params", "weight", "asc", "Самый тощий:", "Вес:", "кг");
};

btnShowFat.onclick = () => {
  startSort(state, "params", "weight", "desc", "Самый толстый:", "Вес:", "кг");
};



