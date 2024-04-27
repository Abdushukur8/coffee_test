// BURGER start

const navbar = document.querySelector('.navbar')
const burger = document.querySelector('.header__burger')

function openBurger() {
    navbar.classList.toggle('bur_open')
}
burger.addEventListener('click', openBurger)
// BURGER end


const searchHeader = document.querySelector('.header_search')
const searIcon = document.querySelector('.icon_search')
searIcon.addEventListener('click', function () {
    searchHeader.classList.toggle('header_search_active')
})


const images = document.querySelectorAll('.slider-img')

const slideControls = document.querySelectorAll('.slideBtn')

let imageIndex = 0
function show(index) {
    images[imageIndex].classList.remove('active')
    images[index].classList.add('active')
    imageIndex = index

}

slideControls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prevBtn')) {
            let index = imageIndex - 1
            if (index < 0) {
                index = images.length - 1
            }
            show(index)
        } else if (event.target.classList.contains('nextBtn')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})
show(imageIndex)


const swiperQuotes = new Swiper('.quotes_slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    pagination:{
        el: '.quotes_pagination',
        clickable: true,
    },

    watchOverflow: true,
    slidesPerView: 1,
    autoHeight: true,
    
  });


const swiperCardForYou = new Swiper('.card_for_you', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.card_for_you_btn_next',
      prevEl: '.card_for_you_btn_prev',
    },
    autoHeight: true,
    watchOverflow: true,
    slidesPerView: 4,
    breakpoints: {
        1024:{
            slidesPerView:4,
        },
        620:{
            slidesPerView:2,
        },
        0:{
            slidesPerView:1,
        },
    },
  });


const maskLoad = document.querySelector('.mask')

window.addEventListener('load', () =>{
    maskLoad.classList.add('hideLoad')
    setTimeout(() =>{
        maskLoad.remove()
    },500)
})