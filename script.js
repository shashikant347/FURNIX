const menu = document.querySelector('#menu');
const list = document.querySelector('#list')
const bars = document.querySelector('.fa-bars')


menu.addEventListener("click",(e)=>{
    // e.preventDefault();
    list.classList.toggle('navlist-active')
    bars.classList.toggle('fa-xmark')
})