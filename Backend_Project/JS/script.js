

var $galleeryContainer=$('.gallery').isotope({
    itemSelector: '.item',
  layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
    $('.button-group .button').removeClass('active1');
    $(this).addClass('active1');

    var value=$(this).attr('data-filter');
    $galleeryContainer.isotope({
        filter:value
    })
})


var swiper = new Swiper(".mySwiper2", {
    // slidesPerView: 3,
    // spaceBetween: 30,
    freeMode: true,
    loop:true,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    
    },
breakpoints: {
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  992: {
    slidesPerView: 4,
    spaceBetween: 20,
  },

    
    

  }});

