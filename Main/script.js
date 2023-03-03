var mybutton = document.getElementById('on-top-button')
var hamburger = document.querySelector('.hamburger')
var navBar = document.querySelector('.header-2')
var phoneNumber = document.querySelector('.call-img')
var count = 0

mybutton.addEventListener('click', function(){
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
})

window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block'
    } 
    else {
        mybutton.style.display = 'none'
    }
}

hamburger.addEventListener('click', function(){
    count++

    if(count % 2 == 1) {
        navBar.classList.add('none')
    }
    else {
        navBar.classList.remove('none')
    }
})

phoneNumber.addEventListener('click', function(){
    window.open('tel:' + phoneNumber.innerHTML)
})