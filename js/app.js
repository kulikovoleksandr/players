import State from "./state.js";
const resultList = document.getElementById("result-list");
const btnSmall = document.getElementById("btn-small");
const btnTall = document.getElementById("btn-tall");
const btnThin = document.getElementById("btn-thin");
const btnFat = document.getElementById("btn-fat");

const state = State;

//sort function
let nestedSort = function (prop1, prop2 = null, direction = "asc") {
  return function (e1, e2) {
    const a = prop2 ? e1[prop1][prop2] : e1[prop1];
    const b = prop2 ? e2[prop1][prop2] : e2[prop1];
    const sortOrder = direction === "asc" ? 1 : -1;
    return a < b ? -sortOrder : a > b ? sortOrder : 0;
  };
};

//clone state array
let heightLowToHigh = [...state];
let heightHighToLow = [...state];
let weightLowToHigh = [...state];
let weightHighToLow = [...state];

//sort cloned states
heightLowToHigh.sort(nestedSort("params", "height", "asc"));
heightHighToLow.sort(nestedSort("params", "height", "desc"));
weightLowToHigh.sort(nestedSort("params", "weight", "asc"));
weightHighToLow.sort(nestedSort("params", "weight", "desc"));

//get maximum and minimum height
const lowest = heightLowToHigh[0].params.height;
const highest = heightHighToLow[0].params.height;
const smallest = weightLowToHigh[0].params.weight;
const biggest = weightHighToLow[0].params.weight;

const searchForParams = (array, paramKey, paramCriteria, newArray) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].params[paramKey] === paramCriteria) {
      newArray.push(array[i]);
    } else {
      break;
    }
  }
};

//get lowest players
const lowestPlayers = [];
searchForParams(heightLowToHigh, "height", lowest, lowestPlayers);

//get highest players
const highestPlayers = [];
searchForParams(heightHighToLow, "height", highest, highestPlayers);

//get smallest players
const smallestPlayers = [];
searchForParams(weightLowToHigh, "weight", smallest, smallestPlayers);

const biggestPlayers = [];
searchForParams(weightHighToLow, "weight", biggest, biggestPlayers);

const showBtnClickContent = (
  descTxt,
  sortArray,
  sortParam,
  sortParamTxt,
  measure
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

//показать мелких
btnSmall.onclick = () => {
  showBtnClickContent("Самый мелкий:", lowestPlayers, "height", "Рост:", "см");
};

//показать высоких
btnTall.onclick = () => {
  showBtnClickContent(
    "Самый высокий:",
    highestPlayers,
    "height",
    "Рост:",
    "см"
  );
};

//показать тощих
btnThin.onclick = () => {
  showBtnClickContent("Самый тощий:", smallestPlayers, "weight", "Вес:", "кг");
};

//показать толстых
btnFat.onclick = () => {
  showBtnClickContent("Самый толстый:", biggestPlayers, "weight", "Вес:", "кг");
};

// log
console.log(`lowest height - ${lowest}`);
console.log(`highest height - ${highest}`);
console.log(`lowest weight - ${smallest}`);
console.log(`highest weight - ${biggest}`);

console.log('\n"low to high height" players:');
console.log(heightLowToHigh);

console.log('\n"high to low height" players:');
console.log(heightHighToLow);

console.log('\n"low to high weight" players:');
console.log(weightLowToHigh);

console.log('\n"high to low weight" players:');
console.log(weightHighToLow);

console.log("\nlowest players:");
console.log(lowestPlayers);

console.log("\nhighest players:");
console.log(highestPlayers);

console.log("\nsmallest players:");
console.log(smallestPlayers);

console.log("\nbiggest players:");
console.log(biggestPlayers);
