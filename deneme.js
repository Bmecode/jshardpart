//MAP KULLANIMI Bir dizeyi dönmek veya toplu işlem yapmak için kullanabiliriz.
const array1 = [1, 2, 3, 4, 5, 6];
const deneme = array1.map((x) => x * 5);
console.log(deneme);
//MAP AÇILIMI
const map1 = (array, cb) => {
  const mapArray = [];
  for (let i = 0; i < array.length; i++) {
    mapArray.push(cb(array[i]));
  }
  return mapArray;
};
const deneme1 = map1(array1, (x) => x);
console.log(deneme1);
//  <---------------------------------------------------------------------------------------->
//FOREACH AÇILIMI geri değer döndürmez herzaman undefined döner
const forEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
};
//bu tanımlamaya bakarak foreachin mapin yaptığı işlevin aynısını yaptığını sadece değer döndürmediğini görebiliriz.
//foreachle map ikisinin aynı anda kullanımı
const mapforEach = (array, cb) => {
  const mapArray = [];
  forEach(array, (x) => mapArray.push(cb(x))); //buradaki işlemde foreache istediği cbi veriyoruz ve her elemanı xle işleme sokmak için mapforEachten gelen cbi kullanıyoruz.
  return mapArray;
};
const deneme2 = mapforEach(array1, (x) => x * 2);
console.log(deneme2);
//  <---------------------------------------------------------------------------------------->
//REDUCE
let init = 1000;
const deneme3 = array1.reduce((acc, cur) => {acc + cur}, init); //reduce fonksiyonu ilk başta bir biriktirici değişken 2. aşamada mevcut değer ve son aşamada başlangıç değeri istiyor isteğe bağlı boş bırakılabilir.
console.log(deneme3);

/* //6 reduce fonksiyonu kullanımı
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
 */
