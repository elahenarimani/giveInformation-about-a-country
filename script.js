"use strict"
fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(res => console.log(giveInformationAboutACountry(res,"SAU")));
function giveInformationAboutACountry(data, countryName){
  let result =  data.find(item =>item.cca3);
  return result; 
}