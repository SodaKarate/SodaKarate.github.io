body = document.body;
body.style.backgroundColor = "rgb(153, 0, 255)";
body.style.margin = "0";
body.style.padding = "0";
body.style.width = "100vw";
body.style.height = "100vh";
body.style.overflow = "hidden";

maintile = document.createElement("div")
maintile.style.display = "flex";
maintile.style.flexDirection = "column";
maintile.style.alignItems = "center";
maintile.style.justifyContent = "center";
maintile.style.textAlign = "center";
maintile.style.padding = "20px";
maintile.style.boxSizing = "border-box";
maintile.style.width = "100%";
maintile.style.height = "100%";

mainszoveg = document.createElement("h1")
mainszoveg.innerHTML = "Nem";
mainszoveg.style.color = "white";
mainszoveg.style.fontSize = "10vw";
mainszoveg.style.margin = "20px 0";

mainkerdes = document.createElement("h2")
mainkerdes.innerHTML = "Visszavonták-e már a gyülekezési törvényt?"
mainkerdes.style.color = "white";
mainkerdes.style.fontSize = "5vw";
mainkerdes.style.margin = "10px 0";
mainkerdes.style.maxWidth = "100%";
mainkerdes.style.wordWrap = "break-word";

const dayCounter = document.createElement("div");
const startDate = new Date(2025, 2, 18);
const currentDate = new Date();
const diffTime = Math.abs(currentDate - startDate);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

dayCounter.innerHTML = `${diffDays} napja érvényben`;
dayCounter.style.color = "white";
dayCounter.style.fontSize = "3.5vw";
dayCounter.style.fontWeight = "bold";
dayCounter.style.margin = "20px 0 10px 0";
dayCounter.style.padding = "10px";
dayCounter.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
dayCounter.style.borderRadius = "8px";
dayCounter.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

const donationBtn = document.createElement("button");
donationBtn.innerHTML = "Vegyél nekem egy kávét!";
donationBtn.style.padding = "12px 24px";
donationBtn.style.backgroundColor = "white";
donationBtn.style.color = "rgb(153, 0, 255)";
donationBtn.style.border = "none";
donationBtn.style.borderRadius = "4px";
donationBtn.style.fontSize = "0.8rem";
donationBtn.style.fontWeight = "bold";
donationBtn.style.cursor = "pointer";
donationBtn.style.marginTop = "20px";
donationBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

const modal = document.createElement("div");
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
modal.style.display = "none";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";
modal.style.zIndex = "1000";

const qrImage = document.createElement("div");
qrImage.style.width = "min(80vw, 80vh)"; 
qrImage.style.height = "min(80vw, 80vh)";
qrImage.style.backgroundColor = "white";
qrImage.style.backgroundImage = "url('qr.jpg')";
qrImage.style.backgroundSize = "cover";
qrImage.style.backgroundPosition = "center";
qrImage.style.aspectRatio = "1/1";

donationBtn.addEventListener("click", function() {
    modal.style.display = "flex";
});

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

qrImage.addEventListener("click", function(event) {
    event.stopPropagation();
});

modal.appendChild(qrImage);
body.appendChild(modal);

maintile.appendChild(mainkerdes);
maintile.appendChild(mainszoveg);
maintile.appendChild(dayCounter);
maintile.appendChild(donationBtn);
body.appendChild(maintile);
