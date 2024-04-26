document.body.style.backgroundColor = "black";
document.body.style.margin = "0";
const body = document.querySelector("body");

let evszoveg = document.createElement("h1");
let honapszoveg = document.createElement("h1");
let napszoveg = document.createElement("h1");
let oraszoveg = document.createElement("h1");
let percszoveg = document.createElement("h1");
let masodpercszoveg = document.createElement("h1");
let milliszoveg = document.createElement("h1");

let magassag = 0;

szovegek = [evszoveg, honapszoveg, napszoveg, oraszoveg, percszoveg, masodpercszoveg, milliszoveg]
for(let i = 0; i < szovegek.length; i++){
    szovegek[i].style.width = "100%";
    szovegek[i].style.position = "absolute";
    szovegek[i].style.top = `${magassag}px`;
    szovegek[i].style.color = "white";
    szovegek[i].style.fontSize = "120px";
    szovegek[i].style.fontFamily = "Arial";
    szovegek[i].style.textAlign = "center";
    magassag+=100;
}

function most(){
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
const currentSecond = currentDate.getSeconds();
const currentMillisecond = currentDate.getMilliseconds();

evszoveg.innerText = currentYear;
honapszoveg.innerText = currentMonth;
napszoveg.innerText = currentDay;
oraszoveg.innerText = currentHour;
percszoveg.innerText = currentMinute;
masodpercszoveg.innerText = currentSecond;
milliszoveg.innerText = currentMillisecond;
}

most();

setInterval(most, 1000/60);

for(let i = 0; i < szovegek.length; i++){
    body.appendChild(szovegek[i]);
}