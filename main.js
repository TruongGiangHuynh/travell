
  // const btn = document.querySelector(".slider-bottom-search-item-btn")
  // const heading=document.querySelector(".slider-bottom-search-item ")
  // const isexplanClass="active";
  // btn.addEventListener("click",function() {
  //     heading.classList.add(isexplanClass);
  // })
const menutoggle=document.querySelector(".header-navbar-icon-menu");
const headermenu=document.querySelector(".modal");
const isexplanClass="active";
menutoggle.addEventListener("click",function() {
    headermenu.classList.add(isexplanClass);
})
headermenu.addEventListener("click",function() {
  headermenu.classList.remove(isexplanClass);
})

$(document).ready(function(){
  $('.slider-list').slick({
      autoplay:true,
          arrows: true,
          prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
          responsive: [
              {
                breakpoint: 767,
                settings: {
                  arrows:false
                }
              }
   
            ]
  });
});
