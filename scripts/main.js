var myImage = document.querySelector('img');

myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/csgo-rip.png') {
    myImage.setAttribute('src', 'images/dota-live.png');
  } else {
    myImage.setAttribute('src', 'images/csgo-rip.png');
  }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Введите ваше имя.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Здравствуй, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Здравствуй, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}