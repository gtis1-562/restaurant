import './style.css'
import logo from './food-logo.png'


document.querySelector('#app').innerHTML = `
<div id="header">

<a  target="_blank">
      <img src="${logo}" class="logo" alt="Vite logo" />
    </a>
</div>


<div class="swiper">
<div class="swiper-wrapper">

     <div class="swiper-slide">
     <img class="food" src="https://apheiro.github.io/restaurant_page/93420905b048d48e4c74.png">
    
        <h2>Hot - Dog</h2>
        <hr>
        <div class="card">
   <p class="food-info">Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text
     ever since the 1500s, when an unknown printer took a galley of type and scrambled 
     it to make a type specimen book.
   </p>
      </div>
      </div>

      <div class="swiper-slide">
      <img class="food" src="https://apheiro.github.io/restaurant_page/ae3c0fb9558fca9ffeea.png">
     
         <h2>Hamburger</h2>
         <hr>
         <div class="card">
    <p class="food-info">Lorem Ipsum is simply dummy text of the printing and
     typesetting industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type and scrambled 
      it to make a type specimen book.
    </p>
       </div>
       </div>

       <div class="swiper-slide">
       <img class="food" src="https://apheiro.github.io/restaurant_page/f231df94bf646111906f.png">
      
          <h2>French Fries</h2>
          <hr>
          <div class="card">
     <p class="food-info">Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's standard dummy text
       ever since the 1500s, when an unknown printer took a galley of type and scrambled 
       it to make a type specimen book.
     </p>
        </div>
        </div>

        <div class="swiper-slide">
    <img class="food" src="https://apheiro.github.io/restaurant_page/41419795e2a2ad3f83b6.png">
   
       <h2>Pizza</h2>
       <hr>
       <div class="card">
  <p class="food-info">Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type and scrambled 
    it to make a type specimen book.
  </p>
     </div>
     </div>

<!-- end -->
      </div>                    <!-- swipper-swrapper -->

   <div class="swiper-pagination"></div>

  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <div class="swiper-scrollbar"></div>

 </div>



`

let mySwipper = new Swiper('.swiper', {
  effect: 'cube',
    grabCursor:true,
    cubeEffect: {
      shadow:true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
