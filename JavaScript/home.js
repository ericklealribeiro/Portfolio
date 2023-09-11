//Slide Carrossel de Imagens de fundo;
let count = 1;
setInterval(function(){
    nextImg();
}, 4500)
function nextImg(){
    count++;
    if (count > 4){
        count = 1;
        document.getElementById('img1').style.opacity='1'
        document.getElementById('img2').style.opacity='0'
        document.getElementById('img3').style.opacity='0'
        document.getElementById('img4').style.opacity='0'
    }
    document.getElementById('img'+count).style.opacity='1'
}


//Carrosel Vertical de texto;
let count2 = 0;
setInterval(function(){
    nextTxt();
}, 6750)
function nextTxt(){
    count2++;
    document.getElementById('dev').style.opacity='0'
    document.getElementById('dev').style.top='-45px'
    document.getElementById('welcome').style.opacity='1'
    document.getElementById('welcome').style.top='-205px'
    if(count2 > 1){
        count2 = 0;
        document.getElementById('dev').style.opacity='1'
        document.getElementById('dev').style.top='20px'
        document.getElementById('welcome').style.opacity='0'
        document.getElementById('welcome').style.top='0px'
    }
}