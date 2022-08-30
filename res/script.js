function changeBg(){
  let header = document.querySelector('.header')
  let scrollValue = window.scrollY;
  
  if (scrollValue > 100) {
    header.classList.add('scroll')
  }
  else{
    header.classList.remove('scroll')
  }
}
window.addEventListener('scroll',changeBg);

function menuToggle(){
  let menu = document.querySelector('.navbar')
  menu.classList.toggle('slide')
}