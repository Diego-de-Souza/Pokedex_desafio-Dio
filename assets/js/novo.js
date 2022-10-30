const likedHeart = document.getElementById('heart-enjoy');


let cont = 0;
likedHeart.addEventListener('click', (cont) =>{
    
    if(cont == 0){
        likedHeart.document.src= "../img/coracao_liked.png";
        cont=1;
    }else {
        likedHeart.src = "../img/coracao_vazio.png";
    }
})