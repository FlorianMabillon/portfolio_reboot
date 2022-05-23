
let toggleMode = document.querySelector('#btn_mode')


toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('light')
})

console.log(toggleMode);