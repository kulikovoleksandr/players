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

// консоль
console.log("Сортировка по росту:");
for (let i = 0; i < sortedByHeight.length; i++) {
  console.log(
    `${i + 1}. Name: ${sortedByHeight[i].name}. Height: ${
      sortedByHeight[i].params.height
    } см`
  );
}

for (let i = 0; i < sortedByHeight.length; i++) {
  if (sortedByHeight[0].params.height === sortedByHeight[i].params.height) {
    console.log(
      `Cамый мелкий: ${sortedByHeight[i].name}. Рост: ${sortedByHeight[i].params.height} см`
    );
  }
}

for (let i = 0; i < sortedByHeight.length; i++) {
  if (sortedByHeight[49].params.height === sortedByHeight[i].params.height) {
    console.log(
      `Cамый высокий: ${sortedByHeight[i].name}. Рост: ${sortedByHeight[i].params.height} см`
    );
  }
}

console.log("Сортировка по весу:");
for (let i = 0; i < sortedByWeight.length; i++) {
  console.log(
    `${i + 1}. Name: ${sortedByWeight[i].name}. Weight: ${
      sortedByWeight[i].params.weight
    } кг`
  );
}

for (let i = 0; i < sortedByWeight.length; i++) {
  if (sortedByWeight[0].params.weight === sortedByWeight[i].params.weight) {
    console.log(
      `Cамый тощий: ${sortedByWeight[i].name}. Рост: ${sortedByWeight[i].params.weight} кг`
    );
  }
}

for (let i = 0; i < sortedByWeight.length; i++) {
  if (sortedByWeight[49].params.weight === sortedByWeight[i].params.weight) {
    console.log(
      `Cамый толстый: ${sortedByWeight[i].name}. Рост: ${sortedByWeight[i].params.weight} кг`
    );
  }
}



  
  

