function outer() {
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
deneme2();
//Closurelarda ki backpackler sayesinde bağımsız kendi değerlerini saklayan farklı fonksiyonlar oluşturabiliyoruz. arkaplanda bu işlevler kendi execution contextinde counterları 0 olarak tanımlandığı için farklı değerleri tutabiliyor.