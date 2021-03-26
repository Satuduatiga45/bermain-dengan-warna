const button = document.querySelector('button');
const p = document.querySelector('.rgb');

const kotakMerah = document.querySelector('div.merah');
const sMerah = document.querySelector('input[name="sMerah"]');

const kotakHijau = document.querySelector('div.hijau');
const sHijau = document.querySelector('input[name="sHijau"]');

const kotakBiru = document.querySelector('div.biru');
const sBiru = document.querySelector('input[name="sBiru"]');

button.addEventListener('click', function () {

  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
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
  p.innerHTML = `rgb(${r},${g},${b})`;
});

sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  kotakHijau.style.backgroundColor = `rgb(0,${g},0)`;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  p.innerHTML = `rgb(${r},${g},${b})`;
});

sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  kotakBiru.style.backgroundColor = `rgb(0,0,${b})`;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  p.innerHTML = `rgb(${r},${g},${b})`;
});