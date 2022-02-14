// 滾輪滑動效果 
window.onscroll = function() {
    let scrollY = window.pageYOffset;
    //nav瘦身
    if (scrollY > 20) {
        document.querySelector('header').classList.add("sticky");
    } else {
        document.querySelector('header').classList.remove("sticky");
    }

    //scroll-up-btn 消失/出現
    if (scrollY > 500){
      document.querySelector('.scroll-up-btn').classList.add('show');
    }else{
      document.querySelector('.scroll-up-btn').classList.remove('show');
    }
}
// 選單收合 
const menu = document.querySelector(".fa-bars");
const nav = document.querySelector('nav');
menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
})
// 選單點擊後移除
const navLink = document.querySelectorAll('.nav-link'); 
navLink.forEach(function(navlink){
    navlink.addEventListener('click',function(){
        menu.classList.remove('fa-times');
        nav.classList.remove('active');
    })
})
//載入畫面
function loader(){
    document.querySelector('.loader').classList.add('fade-out');
  }
  function fadeOut(){
    setInterval(loader, 3000);
  }
  window.onload = fadeOut();

// shop swiper 
var swiper = new Swiper(".shop", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 15,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 2,
       },
       1000: {
         slidesPerView: 3,
       },
    },
 });
 
 //end
