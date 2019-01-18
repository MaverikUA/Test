import './coffee_shop.scss';


var list = document.getElementsByClassName ('combo__product_list-item');
for (var i = 0; i < list.length; i++) {
  list[i].style.position = 'relative';
  var span = document.createElement('span');
  // обычно лучше использовать CSS-классы,
  // но этот код - для удобства разработки, так что не будем трогать стили
  span.style.cssText = 'position:absolute;left:0;top:0';
  span.innerHTML = i + 1;
  list[i].appendChild(span);
}


/* конфигурация */
var width = 350; // ширина изображения
var count = 3; // количество изображений

var carusel = document.getElementById('carusel');
var listing = carusel.querySelector ('ul');
var listElems = carusel.querySelectorAll('li');
var nextBtn = document.getElementById('next')
var position = 0; // текущий сдвиг влево

function smallSliderRight() {
  position = Math.max(position - width * count, -width * (listElems.length - count));
  listing.style.marginLeft = position + 'px';

}

nextBtn.addEventListener('click', smallSliderRight )

carusel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position + width * count, 0)
  listing.style.marginLeft = position + 'px';
  
};

carusel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position - width * count, -width * (listElems.length - count));
  listing.style.marginLeft = position + 'px';
};

////////
var tovary = document.getElementsByClassName ('products__slide');
for (var i = 0; i < tovary.length; i++) {
  tovary[i].style.position = 'relative';
  var span2 = document.createElement('span');
  span2.style.cssText = 'position:absolute;left:0;top:0';
  span2.innerHTML = i + 1;
  tovary[i].appendChild(span2);
}
/*
var width2 = 1200;
var count2 = 1;

var newSlider = document.getElementById('slider');
var spisok = newSlider.querySelector ('ul');
var spisokchld = newSlider.querySelectorAll('li');

var position2 = 0;

newSlider.querySelector('.sliderleft').onclick = function() {
  position2 = Math.min(position2 + width2 * count2, 0)
  spisok.style.marginLeft = position2 + 'px';
}

newSlider.querySelector('.slider-right').onclick = function() {
  position2 = Math.max(position2 - width2 * count2, -width2 *(spisokchld.length - count2));
  spisok.style.marginLeft = position2 + 'px';
}


*/

var width2 = 1200;
var count2 = 1;
var newSlider = document.getElementById('slider');
var spisok = newSlider.querySelector ('ul');
var spisokchld = newSlider.querySelectorAll('li');
var sliderBtn = document.getElementById('slider-right');
var position2 = 0;

function sliderRight() {
  position2 = Math.max(position2 - width2 * count2, -width2 *(spisokchld.length - count2));
  spisok.style.marginLeft = position2 + 'px';
  console.log(position2)
}

sliderBtn.addEventListener('click', sliderRight )


/*

document.getElementById('slider-right').onclick = sliderRight;
var left = 0;

function sliderRight() {
  let polosa = document.getElementById('polosa');
  let prevButton = document.getElementById('sliderleft');
  left = left - 1200;
  if (left < -2400) {
    left = 0;
  } else if (left >= -1200) {
    prevButton.style.display = 'block';
  }
  console.log(left);
  polosa.style.left = left+'px';
}


document.getElementById('sliderleft').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
  let polosa = document.getElementById('polosa');
  
  left = left + 1200;
  if (left > 0) {
    left = 0;
    
  } 
  polosa.style.left = left+'px';
}
console.log(left);

*/

window.onload = function() {
  document.querySelector('.tabs-header').addEventListener('click', fTabs);

  function fTabs(event) {
    console.log(event)
    if (event.target.className == 'tab-h') {
      var dataTab = event.target.getAttribute('data-tab');
      var tabH = document.getElementsByClassName('tab-h');
      for (var i=0; i<tabH.length; i++) {
        tabH[i].classList.remove('active');
      }
      
      
      event.target.classList.add('active');
      var tabBody = document.getElementsByClassName('tab-b');
      for (var i = 0; i < tabBody.length; i++) {
         if (dataTab==i) {
           tabBody[i].style.display = 'flex';
         } else {
          tabBody[i].style.display = 'none';
         }
      }
    }
  }
}



/*
var cartCount = document.getElementsByClassName("buy");

function buyCounter() {
  var shopCount = 0;
  
  for (var i = 0; i < cartCount.length; i++) {
    shopCount = shopCount + 1;
    
  } 
  
  document.getElementById("cart_count").innerHTML = shopCount;
  
}

cartCount.onclick = buyCounter;
console.log(shopCount)
*/


var cartCount = document.getElementsByClassName("buy");
var shopCount = 0; 
 function updateShopCount() {
 shopCount = shopCount + 1;
  return shopCount;
 }
 
 function showShopCount() {
 document.getElementById("cart_count").innerHTML = shopCount;
 }
 
 function addToCartHandler() {
  updateShopCount()
  showShopCount()
  
 }
 

for (var i = 0; i < cartCount.length; i++) {
    cartCount[i].addEventListener('click', addToCartHandler)
}
console.log(shopCount);

console.log(cartCount)
//console.log(updateShopCount())
//console.log(addToCartHandler(updateShopCount))


/*var cartCount = document.getElementsByClassName("buy");
 
var shopCount = 0;

  for (var i = 0; i < cartCount.length; i++) {
    cartCount[i].onclick = function() {
     shopCount = shopCount + 1;
  document.getElementById("cart_count").innerHTML = shopCount;
  console.log(shopCount)
  };
}

*/