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



class Player {
  constructor(photo, age = false) {
    this.name = getRandomString(5);
    this.photo = photo;
    this.age = age;
    this.params = {
      height: getRandomNumber(160, 210),
      weight: getRandomNumber(70, 150),
    };
    this.getAge();
  }
  getAge() {
    if (this.age == true) {
      this.params.age = getRandomNumber(15, 50);
    }
  }
}



let firstArray = [];
let secondArray = [];
let thirdArray = [];



for (let i = 0; i < 50; i++) {
  firstArray.push(
    new Player("http://wow.blizzwiki.ru/images/2/2d/Illidan_Portrait.jpg")
  );
}

for (let i = 0; i < 20; i++) {
  secondArray.push(
    new Player(
      "https://res.cloudinary.com/heroespatches/image/upload/v1483416716/hero/jaina.jpg",
      true
    )
  );
}

for (let i = 0; i < 10; i++) {
  thirdArray.push(
    new Player(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3hUsDOQbiOByuMgPTXZNcOW8S2mbk8jaKA&usqp=CAU"
    )
  );
}

const pushToArray = (arrayName, arrayNameString, wowName) => {
  const newArray = {}
  newArray.value = arrayNameString 
   //TODO найти как перевести параметр в string с таким же именем (чтоб использовать только первый аргумент)
  
  newArray.name = wowName
  newArray.array = arrayName
  allArrays.push(newArray)
}

let allArrays = []

pushToArray(firstArray, "firstArray", "Illidan")
pushToArray(secondArray, "secondArray", "Jaina")
pushToArray(thirdArray, "thirdArray", "Arthas")


export { firstArray, secondArray, thirdArray, allArrays };

