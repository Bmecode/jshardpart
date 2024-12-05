//1 tek parametreli sayısal değer döndüren fonksiyon
function addTwo(parameters) {
  return parameters + 2;
}
const a = addTwo(10);
console.log(a);
//2 tek parametreli sözel değer döndüren fonksiyon
const addS = (num) => num + "S";
const b = addS("asdasd");
console.log(b);

//3  map fonksiyon tanımlanması
const map = (array, cb) => {
  const mapArray = [];
  //Yöntem 1
  /*   for (let i = 0; i < array.length; i++) {
    mapArray.push(cb(array[i]));
  } */
  //Yöntem 2
  for (let i of array) {
    mapArray.push(cb(i));
  }
  return mapArray;
};
const c = map([1, 2, 3, 4, 5], addS);
console.log(c);

const letters = ["a", "b", "c", "d", "e"];
//4 foreach tanımlaması
const forEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
};
//5 foreachle map kullanımı
const mapWith = (array, cb) => {
  const mappedArray = [];
  forEach(array, (e1) => mappedArray.push(cb(e1)));
  return mappedArray;
};
const e = mapWith(letters, addS);
console.log(e);
//6 reduce fonksiyonu kullanımı
const reduce = (array, callback, initialValue) => {
  let acc = initialValue;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc;
};
const arrayDeneme1 = [1, 2, 3, 4, 5];
const add = (a, b) => a + b;
const f = reduce(arrayDeneme1, add, 10);
console.log(f);
//7
const intersection = (arrays) => {
  return arrays.reduce((acc, curr) => {
    return curr.filter((el) => acc.includes(el));
  });
};

/* function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}
const deneme = outer();
deneme();
deneme();
deneme();
const deneme2 = outer();
deneme2();
deneme2();
deneme2(); */
//Closurelarda ki backpackler sayesinde bağımsız kendi değerlerini saklayan farklı fonksiyonlar oluşturabiliyoruz. arkaplanda bu işlevler kendi execution contextinde counterları 0 olarak tanımlandığı için farklı değerleri tutabiliyor.

//map foreach try 
/* const mapTry = (array, cb) => {
  mapData = [];
  for (let i = 0; i < array.length; i++) {
    mapData.push(cb(array[i]));
  }
  return mapData;
};
const array5 = [1, 2, 3, 4, 5, 11];
const denemeFunc = (x) => x + 2;
const result = mapTry(array5, denemeFunc);
console.log(result);
const result2 = array5.map((x) => x * 5);
const result3 = array5.forEach((x) => console.log(x * 10));
console.log(result2);
 */