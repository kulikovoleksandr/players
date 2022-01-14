import State from "./state.js";
const resultList = document.getElementById("result-list");
const btnSmall = document.getElementById("btn-small");
const btnTall = document.getElementById("btn-tall");
const btnThin = document.getElementById("btn-thin");
const btnFat = document.getElementById("btn-fat");

const state = State;

console.dir(state);

//get maximum height
let maxHeight = 0;
for(let i = 0; i < state.length; i++){
  if(state[i].params.height > maxHeight){
    maxHeight = state[i].params.height;
  } else {
    maxHeight = maxHeight;
  }
}
console.log(maxHeight);


//сортировка по росту
const sortedByHeight = _.sortBy(state, ["params.height"]); // мелкий > высокий
const sortedByHeightReversed = _.reverse(_.sortBy(state, ["params.height"])); // высокий > мелкий

//сортировка по весу
const sortedByWeight = _.sortBy(state, ["params.weight"]); // худой > толстый
const sortedByWeightReversed = _.reverse(_.sortBy(state, ["params.weight"])); // толстый > худой

const showBtnClickContent = (descTxt, sortArray, sortParam, sortParamTxt, measure) => {
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
}

//показать мелких
btnSmall.onclick = () => {
  showBtnClickContent("Cамый мелкий:", sortedByHeight, "height", "Рост:", "см")
}

//показать высоких
btnTall.onclick = () => {
  showBtnClickContent("Cамый высокий:", sortedByHeightReversed, "height", "Рост:", "см")
};

//показать тощих
btnThin.onclick = () => {
  showBtnClickContent("Cамый тощий:", sortedByWeight, "weight", "Вес:", "кг")
};


//показать толстых
btnFat.onclick = () => {
  showBtnClickContent("Cамый тощий:", sortedByWeightReversed, "weight", "Вес:", "кг")
};





  
  