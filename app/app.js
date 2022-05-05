
let toggleMode = document.querySelector('#btn_mode')


toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('light')
})

// for(i=0; i<scrollDown.length; i++){
//     toggleMode[i].addEventListener("click", function(){
//         this.classList.toggle("light");
//     })
// }
console.log(toggleMode);