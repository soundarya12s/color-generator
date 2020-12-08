const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');

const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');
const color4 = document.querySelector('.color4');
const color5 = document.querySelector('.color5');
const color6 = document.querySelector('.color6');

const colora = document.querySelector('.colora');
const colorb = document.querySelector('.colorb');
const colorc = document.querySelector('.colorc');
const colord = document.querySelector('.colord');
const colore = document.querySelector('.colore');
const colorf = document.querySelector('.colorf');

btn.addEventListener('click', function(){
   color1.style.background = generate();
   colora.textContent = generate();

   color2.style.background = generate();
   colorb.textContent = generate();

   color3.style.background = generate();
   colorc.textContent = generate();

   color4.style.background = generate();
   colord.textContent = generate();

   color5.style.background = generate();
   colore.textContent = generate();

   color6.style.background = generate();
   colorf.textContent = generate();
})

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}

function generate() {
    let hexColor= "#";
    for(let j=0; j<6; j++){
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}