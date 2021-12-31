const allTopLinks = document.querySelectorAll('.nav-link-top')


allTopLinks.forEach(link=>{
  link.addEventListener('focus', function (){
    this.parentElement.classList.add('focus')
  })

  if(link.nextElementSibling){
    const submenu = link.nextElementSibling
    const subMenuLinks = submenu.querySelectorAll('a')
    const lastLinkIndex = subMenuLinks.length -1
    const lastLink = subMenuLinks[lastLinkIndex]

    lastLink.addEventListener('blur', function(){
      link.parentElement.classList.remove('focus')
    })
  }
})


function oculta() {
  if((document.documentElement.scrollTop || self.pageYOffset) > 650) {
   document.querySelector("#logo-nav").classList.add("logo-translate"); 
   document.querySelector('.nav-bar-container').classList.add('navOnScroll')
   document.querySelector('.drop-down-submenu').classList.add('drop-down-submenu-scroll')
  }
  else if((document.documentElement.scrollTop || self.pageYOffset) < 650) {
    document.querySelector("#logo-nav").classList.remove("logo-translate");
    document.querySelector('.nav-bar-container').classList.remove('navOnScroll')
    document.querySelector('.drop-down-submenu').classList.remove('drop-down-submenu-scroll')
  }

}

onscroll = oculta;




$(".gallery-carrousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".gallery-nav",
});
$(".gallery-nav").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: ".gallery-carrousel",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  arrows:false,
});

$(".gallery-responsive").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 597,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
