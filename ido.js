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
evszoveg.innerText = currentDate.getFullYear();
honapszoveg.innerText = currentDate.getMonth()+1;
napszoveg.innerText = currentDate.getDate();
oraszoveg.innerText = currentDate.getHours();
percszoveg.innerText = currentDate.getMinutes();
masodpercszoveg.innerText =  currentDate.getSeconds();
milliszoveg.innerText = currentDate.getMilliseconds();

if(oraszoveg.innerText==11 && percszoveg.innerText==11){    
    oraszoveg.style.color = "red";
    percszoveg.style.color = "red";
}
else{''
    oraszoveg.style.color = "white";
    percszoveg.style.color = "white";
}

}
most();

setInterval(most, 1000/60);


for(let i = 0; i < szovegek.length; i++){
    body.appendChild(szovegek[i]);
}