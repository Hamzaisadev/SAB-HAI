'use strict';

// MODAL VARIABLES


const modal = document.querySelector('[data-modal]');
const modalCloseButton = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// MODAL FUNCTION
const modalCloseFunc = function () {modal.classList.add('closed')}




modalCloseOverlay.addEventListener('click', modalCloseFunc )
modalCloseButton.addEventListener('click', modalCloseFunc )


// NOTIFICATION TOAST VARIABLE



const notificationToast = document.querySelector('[data-toast]')
const toastCloseBtn = document.querySelector('[data-toast-close]')

// NOTIFICATION TOAST EVENT LISTNER


toastCloseBtn.addEventListener('click', () => {notificationToast.classList.add('closed')})

const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]')
const mobileMenu = document.querySelectorAll('[data-mobile-menu]')
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]')
const overlay = document.querySelector('[data-overlay]')

for (let i = 0; i < mobileMenuOpenBtn.length; i++){

    const mobileMenuCloseFunc = function(){
        mobileMenu[i].classList.remove('active')
        overlay.classList.remove('active')
    }
    mobileMenuOpenBtn[i].addEventListener("click",function(){
        mobileMenu[i].classList.add('active')
        overlay.classList.add('active')


    })
    mobileMenuCloseBtn[i].addEventListener('click',mobileMenuCloseFunc)
    overlay.addEventListener('click',mobileMenuCloseFunc)
}
