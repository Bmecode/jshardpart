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
const d = forEach(letters, addS);
console.log(d);

//5
const mapWith = (array, cb) => {
  const mappedArray = [];
  forEach(array, (e1) => mappedArray.push(cb(e1)));
  return mappedArray;
};
const e = mapWith(letters, addS);
console.log(e);

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
