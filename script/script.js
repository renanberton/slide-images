const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const imagens = ['imgs/img1.png', 'imgs/img2.png', 'imgs/img3.png', 'imgs/img4.png', 'imgs/img5.png'];
const imgs = document.getElementById('imgs');

let contador = 0;
leftArrow.addEventListener('click', (e) => {
    contador -= 1;
    if(contador <0) {
        contador = 5;
        contador -= 1;
    } 
    imgs.setAttribute('src', imagens[contador]);
    console.log(contador);
    e.preventDefault();
})

rightArrow.addEventListener('click', (e)=> {
    contador +=1;
    imgs.setAttribute('src', imagens[contador]);
    console.log(contador);
    if(contador >= imagens.length ) {
        contador = 0;
        imgs.setAttribute('src', imagens[contador]);
    }
    e.preventDefault();
})