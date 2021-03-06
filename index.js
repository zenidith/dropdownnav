const nav = document.getElementById('nav')
const openArrow = document.getElementById('open-arrow')
const closeArrow = document.getElementById('close-nav')
const container = document.getElementById('container')

openArrow.addEventListener('click', toggle)
closeArrow.addEventListener('click', toggle)

function toggle() {
   nav.classList.toggle('active')  
   container.classList.toggle('inactive')
}



container.addEventListener('click', close)

function close(event) {
  if (!event.target.classList.contains("material-icons-outlined")) {
      nav.classList.remove('active')
      container.classList.remove('inactive')

  }
}