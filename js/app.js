import State from "./state.js";

const state = State;

console.log(state);

const sortedByHeight = _.sortBy(state, ['params.height']);
const sortedByWeight = _.sortBy(state, ['params.weight']);
// хз как показать совпадения

const small = sortedByHeight[0]
console.log(`Cамый мелкий: ${small.name}. Рост: ${small.params.height} см`)

const tall = sortedByHeight.slice(-1)
console.log(`Cамый высокий: ${tall[0].name}. Рост: ${tall[0].params.height} см`)

const thin = (sortedByWeight[0])
console.log(`Cамый худой: ${thin.name}. Вес: ${thin.params.weight} кг`)

const fat = (sortedByWeight.slice(-1))
console.log(`Cамый толстый: ${fat[0].name}. Вес: ${fat[0].params.weight} кг`)

