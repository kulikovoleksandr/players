import State from "./state.js";

const state = State;

console.log(state);

//сортировка по росту
const sortedByHeight = _.sortBy(state, ["params.height"]);
console.log("Сортировка по росту:");
for (let i = 0; i < sortedByHeight.length; i++) {
  console.log(
    `${i + 1}. Name: ${sortedByHeight[i].name}. Height: ${
      sortedByHeight[i].params.height
    } см`
  );
}

//мелкий
for (let i = 0; i < sortedByHeight.length; i++) {
  if (sortedByHeight[0].params.height === sortedByHeight[i].params.height) {
    console.log(
      `Cамый мелкий: ${sortedByHeight[i].name}. Рост: ${sortedByHeight[i].params.height} см`
    );
  }
}

//высокий
for (let i = 0; i < sortedByHeight.length; i++) {
  if (sortedByHeight[49].params.height === sortedByHeight[i].params.height) {
    console.log(
      `Cамый высокий: ${sortedByHeight[i].name}. Рост: ${sortedByHeight[i].params.height} см`
    );
  }
}

//сортировка по весу
const sortedByWeight = _.sortBy(state, ["params.weight"]);
console.log("Сортировка по весу:");
for (let i = 0; i < sortedByWeight.length; i++) {
  console.log(
    `${i + 1}. Name: ${sortedByWeight[i].name}. Weight: ${
      sortedByWeight[i].params.weight
    } кг`
  );
}

//худой
for (let i = 0; i < sortedByWeight.length; i++) {
  if (sortedByWeight[0].params.weight === sortedByWeight[i].params.weight) {
    console.log(
      `Cамый тощий: ${sortedByWeight[i].name}. Рост: ${sortedByWeight[i].params.weight} кг`
    );
  }
}

//толстый
for (let i = 0; i < sortedByWeight.length; i++) {
  if (sortedByWeight[49].params.weight === sortedByWeight[i].params.weight) {
    console.log(
      `Cамый толстый: ${sortedByWeight[i].name}. Рост: ${sortedByWeight[i].params.weight} кг`
    );
  }
}
