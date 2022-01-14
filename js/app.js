import State from "./state.js";
const resultList = document.getElementById("result-list");
const btnShowSmall = document.getElementById("btn-small");
const btnShowTall = document.getElementById("btn-tall");
const btnShowThin = document.getElementById("btn-thin");
const btnShowFat = document.getElementById("btn-fat");

const state = State;

let nestedSort =
  (prop1, prop2 = null, direction = "asc") =>
  (e1, e2) => {
    const a = prop2 ? e1[prop1][prop2] : e1[prop1],
      b = prop2 ? e2[prop1][prop2] : e2[prop1],
      sortOrder = direction === "asc" ? 1 : -1;
    return a < b ? -sortOrder : a > b ? sortOrder : 0;
  };

const startSort = (initialArray, prop1, paramKey, direction, newArray) => {
  let sortingArray = [...initialArray];
  sortingArray.sort(nestedSort(prop1, paramKey, direction));
  for (let i = 0; i < sortingArray.length; i++) {
    if (sortingArray[i].params[paramKey] === sortingArray[0].params[paramKey]) {
      newArray.push(sortingArray[i]);
    } 
  }

};

const lowestPlayers = [];
const highestPlayers = [];
const smallestPlayers = [];
const biggestPlayers = [];

startSort(state, "params", "height", "asc", lowestPlayers);
startSort(state, "params", "height", "desc", highestPlayers);
startSort(state, "params", "weight", "asc", smallestPlayers);
startSort(state, "params", "weight", "desc", biggestPlayers);

const showBtnClickContent = (
  descTxt,
  sortParam,
  sortParamTxt,
  measure,
  sortArray
) => {
  resultList.textContent = "";
  const resultHeader = document.createElement("h6");
  resultList.append(resultHeader);
  resultHeader.textContent = descTxt;

  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[0].params[sortParam] === sortArray[i].params[sortParam]) {
      const newResultP = document.createElement("p");
      newResultP.textContent = `${sortArray[i].name}. ${sortParamTxt} ${sortArray[i].params[sortParam]} ${measure}`;
      resultList.append(newResultP);
    }
  }
};



btnShowSmall.onclick = () => {
  showBtnClickContent("Самый мелкий:", "height", "Рост:", "см", lowestPlayers);
};

btnShowTall.onclick = () => {
  showBtnClickContent("Самый высокий:", "height", "Рост:", "см", highestPlayers);
};

btnShowThin.onclick = () => {
  showBtnClickContent("Самый тощий:", "weight", "Вес:", "кг", smallestPlayers);
};

btnShowFat.onclick = () => {
  showBtnClickContent("Самый толстый:", "weight", "Вес:", "кг", biggestPlayers);
};



