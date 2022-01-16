function getRandomString(length) {
  let randomChars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function getRandomNumber(min, max) {
  let result;
  result = Math.random() * (max - min) + min;
  return Math.floor(result);
}

//get random unsplash image
async function renderItem() {
  fetch(`https://source.unsplash.com/1600x900/?beach`).then((response) => {
    console.log(response.url);
  });
}
// for (let i = 0; i < 3; i++) {
//   console.log(renderItem());
// }

class Player {
  constructor() {
    this.name = getRandomString(5);
    this.photo = 'http://wow.blizzwiki.ru/images/2/2d/Illidan_Portrait.jpg';
    this.params = {
      height: getRandomNumber(160, 210),
      weight: getRandomNumber(70, 150),
    };
  }
}

let firstArray = [];
let secondArray = [];
let thirdArray = [];


for (let i = 0; i < 50; i++) {
  firstArray.push(new Player());
}

for(let i = 0; i < 20; i++){
  secondArray.push(new Player())
}

for(let i = 0; i < 10; i++){
  thirdArray.push(new Player())
}

export { firstArray, secondArray, thirdArray };

