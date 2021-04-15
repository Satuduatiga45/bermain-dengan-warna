const button = document.querySelector('button#acak-warna');
const p = document.querySelector('.rgb');

const kotakMerah = document.querySelector('div.merah');
const sMerah = document.querySelector('input[name="sMerah"]');

const kotakHijau = document.querySelector('div.hijau');
const sHijau = document.querySelector('input[name="sHijau"]');

const kotakBiru = document.querySelector('div.biru');
const sBiru = document.querySelector('input[name="sBiru"]');

const warna = document.querySelector('.warna');

const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
const span1 = document.querySelector('.menu span:nth-child(1)');
const span2 = document.querySelector('.menu span:nth-child(2)');
const span3 = document.querySelector('.menu span:nth-child(3)');

sMerah.value = 255;
sHijau.value = 255;
sBiru.value = 255;

button.addEventListener('click', function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  warna.style.backgroundColor = `rgb(${r},${g},${b})`;
  button.style.backgroundColor = `rgb(${r},${g},${b})`;
  ul.style.backgroundColor = `rgb(${r},${g},${b})`;
  nav.style.backgroundColor = `rgb(${r},${g},${b})`;
  sMerah.value = r;
  sHijau.value = g;
  sBiru.value = b;
  p.innerHTML = `rgb(${r},${g},${b})`;
});


sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  kotakMerah.style.backgroundColor = `rgb(${r},0,0)`;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  warna.style.backgroundColor = `rgb(${r},${g},${b})`;
  button.style.backgroundColor = `rgb(${r},${g},${b})`;
  ul.style.backgroundColor = `rgb(${r},${g},${b})`;
  nav.style.backgroundColor = `rgb(${r},${g},${b})`;
  p.innerHTML = `rgb(${r},${g},${b})`;
});

sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  kotakHijau.style.backgroundColor = `rgb(0,${g},0)`;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  warna.style.backgroundColor = `rgb(${r},${g},${b})`;
  button.style.backgroundColor = `rgb(${r},${g},${b})`;
  ul.style.backgroundColor = `rgb(${r},${g},${b})`;
  nav.style.backgroundColor = `rgb(${r},${g},${b})`;
  p.innerHTML = `rgb(${r},${g},${b})`;
});

sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  kotakBiru.style.backgroundColor = `rgb(0,0,${b})`;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  warna.style.backgroundColor = `rgb(${r},${g},${b})`;
  button.style.backgroundColor = `rgb(${r},${g},${b})`;
  ul.style.backgroundColor = `rgb(${r},${g},${b})`;
  nav.style.backgroundColor = `rgb(${r},${g},${b})`;
  p.innerHTML = `rgb(${r},${g},${b})`;
});

// Navbar
let on = false;

menu.addEventListener('click', function () {

  if (on === false) {
    // span1
    span1.style.transformOrigin = "0 0";
    span1.style.transform = "rotate(45deg) translate(-1px,-1px)";
    // span2
    span2.style.display = 'none';
    span2.style.transform = "scale(0)";
    // span3
    span3.style.transformOrigin = "0 100%";
    span3.style.transform = "rotate(-45deg) translate(-1px,0)";

    ul.classList.toggle('slide');
    warna.style.zIndex = "-2";


    on = true;
  } else if (on === true) {
    // span1
    span1.style.transformOrigin = "0 0";
    span1.style.transform = "rotate(0)";
    // span2
    span2.style.display = 'block';
    span2.style.transform = "scale(1)";
    // span3
    span3.style.transformOrigin = "0 100%";
    span3.style.transform = "rotate(00)";

    ul.classList.toggle('slide');
    warna.style.zIndex = "0";


    on = false;
  }






});