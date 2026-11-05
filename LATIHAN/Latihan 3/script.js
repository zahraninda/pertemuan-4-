let btnBackground = document.createElement("button");
btnBackground.textContent = "Ubah Latar Belakang";
let bgColors = ["#f8fafc", "#fee2e2", "#d1fae5", "#fef3c7", "#f3e8ff"];
let bgIndex = 0;
btnBackground.onclick = function() {
    bgIndex = (bgIndex + 1) % bgColors.length;
    document.body.style.backgroundColor = bgColors[bgIndex];
};

let btnTextColor = document.createElement("button");
btnTextColor.textContent = "Ubah Warna Teks";
let textColors = ["#334155", "#dc2626", "#16a34a", "#2563eb", "#9333ea"];
let textIndex = 0;
btnTextColor.onclick = function() {
    textIndex = (textIndex + 1) % textColors.length;
    let judul = document.querySelector("h1");
    judul.style.color = textColors[textIndex];
};


let btnIncreaseFont = document.createElement("button");
btnIncreaseFont.textContent = "Perbesar Font";
btnIncreaseFont.onclick = function() {
    let judul = document.querySelector("h1");
    let currentSize = parseInt(window.getComputedStyle(judul).fontSize);
    if (currentSize < 48) {
        judul.style.fontSize = (currentSize + 4) + "px";
    } else {
        judul.style.fontSize = "32px"; 
    }
};

let outputDiv = document.getElementById("output3");
outputDiv.appendChild(btnBackground);
outputDiv.appendChild(btnTextColor);
outputDiv.appendChild(btnIncreaseFont);