let toggleDarkMode = document.getElementById('toggle-dark-mode')
let body = document.getElementsByTagName('body')

toggleDarkMode?.addEventListener('click',() => {
    saveDarkMode();
})

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('dark-mode','true');
}

if (localStorage.getItem('dark-mode')) {
    body[0].classList.add('dark-mode');
}

function saveDarkMode() {
    body[0].classList.toggle('dark-mode');
    if (localStorage.getItem('dark-mode')) {
        localStorage.removeItem('dark-mode');
    } else {
        localStorage.setItem('dark-mode','true');
    }
}
