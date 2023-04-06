let addDarkMode = document.getElementById('add-dark-mode')
let removeDarkMode = document.getElementById('remove-dark-mode')
let body = document.getElementsByTagName('body')

addDarkMode.addEventListener('click',() => {
    body[0].classList.toggle('dark-mode');
})

removeDarkMode.addEventListener('click',() => {
    body[0].classList.toggle('dark-mode');
})

