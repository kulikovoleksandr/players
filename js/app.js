import State from "./state.js";
const resultList = document.getElementById("result-list");
const btnSmall = document.getElementById("btn-small");
const btnTall = document.getElementById("btn-tall");
const btnThin = document.getElementById("btn-thin");
const btnFat = document.getElementById("btn-fat");

const state = State;

//сортировка по росту
const sortedByHeight = _.sortBy(state, ["params.height"]); // мелкий > высокий
const sortedByHeightReversed = _.reverse(_.sortBy(state, ["params.height"])); // высокий > мелкий

//показать мелких
btnSmall.onclick = () => {
  resultList.textContent = "";
  const resultHeader = document.createElement("h6");
  resultList.append(resultHeader);
  resultHeader.textContent = "Cамый мелкий:";
  for (let i = 0; i < sortedByHeight.length; i++) {
    if (sortedByHeight[0].params.height === sortedByHeight[i].params.height) {
      const newResultP = document.createElement("p");
      newResultP.textContent = `${sortedByHeight[i].name}. Рост: ${sortedByHeight[i].params.height} см`;
      resultList.append(newResultP);
    }
  }
};

//показать высоких
btnTall.onclick = () => {
  resultList.textContent = "";
  const resultHeader = document.createElement("h6");
  resultList.append(resultHeader);
  resultHeader.textContent = "Cамый высокий:";
  for (let i = 0; i < sortedByHeight.length; i++) {
    if (
      sortedByHeightReversed[0].params.height ===
      sortedByHeightReversed[i].params.height
    ) {
      const newResultP = document.createElement("p");
      newResultP.textContent = `${sortedByHeightReversed[i].name}. Рост: ${sortedByHeightReversed[i].params.height} см`;
      resultList.append(newResultP);
    }
  }
};

//сортировка по весу
const sortedByWeight = _.sortBy(state, ["params.weight"]); // худой > толстый
const sortedByWeightReversed = _.reverse(_.sortBy(state, ["params.weight"])); // толстый > худой

//показать тощих
btnThin.onclick = () => {
  resultList.textContent = "";
  const resultHeader = document.createElement("h6");
  resultList.append(resultHeader);
  resultHeader.textContent = "Cамый тощий:";
  for (let i = 0; i < sortedByWeight.length; i++) {
    if (sortedByWeight[0].params.weight === sortedByWeight[i].params.weight) {
      const newResultP = document.createElement("p");
      newResultP.textContent = `${sortedByWeight[i].name}. Вес: ${sortedByWeight[i].params.weight} кг`;
      resultList.append(newResultP);
    }
  }
};


//показать толстых
btnFat.onclick = () => {
  resultList.textContent = "";
  const resultHeader = document.createElement("h6");
  resultList.append(resultHeader);
  resultHeader.textContent = "Cамый толстый:";
  for (let i = 0; i < sortedByWeightReversed.length; i++) {
    if (sortedByWeightReversed[0].params.weight === sortedByWeightReversed[i].params.weight) {
      const newResultP = document.createElement("p");
      newResultP.textContent = `${sortedByWeightReversed[i].name}. Вес: ${sortedByWeightReversed[i].params.weight} кг`;
      resultList.append(newResultP);
    }
  }
};
