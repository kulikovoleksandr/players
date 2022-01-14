import State from "./state.js";
const resultList = document.getElementById("result-list");
const btnSmall = document.getElementById("btn-small");
const btnTall = document.getElementById("btn-tall");
const btnThin = document.getElementById("btn-thin");
const btnFat = document.getElementById("btn-fat");

const state = State;

//sort function
let nestedSort = (prop1, prop2 = null, direction = "asc") => (e1, e2) => {
  const a = prop2 ? e1[prop1][prop2] : e1[prop1],
      b = prop2 ? e2[prop1][prop2] : e2[prop1],
      sortOrder = direction === "asc" ? 1 : -1
  return (a < b) ? -sortOrder : (a > b) ? sortOrder : 0;
}

//clone state array
let heightLowToHigh = [...state];
let heightHighToLow = [...state];

//sort cloned states
heightLowToHigh.sort(nestedSort("params", "height", "asc"));
heightHighToLow.sort(nestedSort("params", "height", "desc"));

//get maximum and minimum height
const lowest = heightLowToHigh[0].params.height;
const highest = heightHighToLow[0].params.height;

//get lowest players
const lowestPlayers = [];
for(let i = 0; i < heightLowToHigh.length; i++){
  if(heightLowToHigh[i].params.height === lowest){
    lowestPlayers.push(heightLowToHigh[i]);
  } else {
    break;
  }
}

//get highest players
const highestPlayers = [];
for(let i = 0; i < heightHighToLow.length; i++){
  if(heightHighToLow[i].params.height === highest){
    highestPlayers.push(heightHighToLow[i]);
  } else {
    break;
  }
}

console.log(`lowest height - ${lowest}`);
console.log(`highest height - ${highest}`);

console.log('\n"low to high" players:');
console.dir(heightLowToHigh);

console.log('\n"hight to low" players:');
console.dir(heightHighToLow);

console.log('\nlowest players:');
console.dir(lowestPlayers);

console.log('\nhighest players:');
console.dir(highestPlayers);


//сортировка по росту
const sortedByHeight = _.sortBy(state, ["params.height"]); // мелкий > высокий
const sortedByHeightReversed = _.reverse(_.sortBy(state, ["params.height"])); // высокий > мелкий

//сортировка по весу
const sortedByWeight = _.sortBy(state, ["params.weight"]); // худой > толстый
const sortedByWeightReversed = _.reverse(_.sortBy(state, ["params.weight"])); // толстый > худой

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
  showBtnClickContent("Cамый мелкий:", sortedByHeight, "height", "Рост:", "см");
};

//показать высоких
btnTall.onclick = () => {
  showBtnClickContent(
    "Cамый высокий:",
    sortedByHeightReversed,
    "height",
    "Рост:",
    "см"
  );
};

//показать тощих
btnThin.onclick = () => {
  showBtnClickContent("Cамый тощий:", sortedByWeight, "weight", "Вес:", "кг");
};

//показать толстых
btnFat.onclick = () => {
  showBtnClickContent(
    "Cамый тощий:",
    sortedByWeightReversed,
    "weight",
    "Вес:",
    "кг"
  );
};
