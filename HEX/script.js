const button = document.getElementById('acak-warna');
const hex = document.getElementById('hex');
const warna = document.getElementsByClassName('warna')[0];

const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
const span1 = document.querySelector('.menu span:nth-child(1)');
const span2 = document.querySelector('.menu span:nth-child(2)');
const span3 = document.querySelector('.menu span:nth-child(3)');

button.addEventListener('click', function () {
  let c1 = Math.floor(Math.random() * 16);
  let c2 = Math.floor(Math.random() * 16);
  let c3 = Math.floor(Math.random() * 16);
  let c4 = Math.floor(Math.random() * 16);
  let c5 = Math.floor(Math.random() * 16);
  let c6 = Math.floor(Math.random() * 16);

  switch (c1) {
    case 10:
      c1 = 'a';
      break;
    case 11:
      c1 = 'b';
      break;
    case 12:
      c1 = 'c';
      break;
    case 13:
      c1 = 'd';
      break;
    case 14:
      c1 = 'e';
      break;
    case 15:
      c1 = 'f';
      break;
  }
  switch (c2) {
    case 10:
      c2 = 'a';
      break;
    case 11:
      c2 = 'b';
      break;
    case 12:
      c2 = 'c';
      break;
    case 13:
      c2 = 'd';
      break;
    case 14:
      c2 = 'e';
      break;
    case 15:
      c2 = 'f';
      break;
  }
  switch (c3) {
    case 10:
      c3 = 'a';
      break;
    case 11:
      c3 = 'b';
      break;
    case 12:
      c3 = 'c';
      break;
    case 13:
      c3 = 'd';
      break;
    case 14:
      c3 = 'e';
      break;
    case 15:
      c3 = 'f';
      break;
  }
  switch (c4) {
    case 10:
      c4 = 'a';
      break;
    case 11:
      c4 = 'b';
      break;
    case 12:
      c4 = 'c';
      break;
    case 13:
      c4 = 'd';
      break;
    case 14:
      c4 = 'e';
      break;
    case 15:
      c4 = 'f';
      break;
  }
  switch (c5) {
    case 10:
      c5 = 'a';
      break;
    case 11:
      c5 = 'b';
      break;
    case 12:
      c5 = 'c';
      break;
    case 13:
      c5 = 'd';
      break;
    case 14:
      c5 = 'e';
      break;
    case 15:
      c5 = 'f';
      break;
  }
  switch (c6) {
    case 10:
      c6 = 'a';
      break;
    case 11:
      c6 = 'b';
      break;
    case 12:
      c6 = 'c';
      break;
    case 13:
      c6 = 'd';
      break;
    case 14:
      c6 = 'e';
      break;
    case 15:
      c6 = 'f';
      break;
  }

  const color = `#${c1}${c2}${c3}${c4}${c5}${c6}`;

  document.body.style.backgroundColor = color;
  button.style.backgroundColor = color;
  warna.style.backgroundColor = color;
  ul.style.backgroundColor = color;
  nav.style.backgroundColor = color;
  hex.innerHTML = color;
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