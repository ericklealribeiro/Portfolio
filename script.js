function abrirMenu(){
    document.getElementById('header').style.width='300px'
    document.getElementById('btn_fechar').style.display='block'
    document.getElementById('btn_abrir').style.display='none'
    document.getElementById('home').style.right='360px'
    document.getElementById('btnTop').style.right='175px'
}

function fecharMenu(){
    document.getElementById('header').style.width='60px'
    document.getElementById('btn_fechar').style.display='none'
    document.getElementById('btn_abrir').style.display='block'
    document.getElementById('home').style.right='150px'
    document.getElementById('btnTop').style.right='14px'
}

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


function btnTopo(){
    window.scrollTo(0,0)
}

document.addEventListener('scroll', ocultar)

function ocultar(){
    if (window.scrollY > 70){
        document.getElementById('btnTop').style.opacity='1'
        document.getElementById('btnTop').style.cursor='pointer'
    } else {
        document.getElementById('btnTop').style.opacity='0'
        document.getElementById('btnTop').style.cursor=''
    }
}

let count3 = 0;

setInterval(function(){
    btnRight();
}, 4500);

function btnRight(){
    let nextDivId = 'xp'+ (count3 + 1);
    console.log(nextDivId);
    if (count3 == 5){
        count3 = 1;
        document.getElementById('xp3').style.right='0%'
        document.getElementById('xp3').style.opacity='0'
        document.getElementById('xp1').style.right='50%'
        document.getElementById('xp1').style.opacity='0'
        document.getElementById('xp2').style.right='28.3%'
        document.getElementById('xp2').style.opacity='1'
    } else if (nextDivId == 'xp1'){
        count3++;
        document.getElementById('xp3').style.right='0%'
        document.getElementById('xp3').style.opacity='0'
        document.getElementById('xp1').style.right='50%'
        document.getElementById('xp1').style.opacity='0'
        document.getElementById('xp2').style.right='28.3%'
        document.getElementById('xp2').style.opacity='1'
    } else if (nextDivId == 'xp2'){
        count3++;
        document.getElementById('xp4').style.right='0%'
        document.getElementById('xp4').style.opacity='0'
        document.getElementById('xp2').style.right='50%'
        document.getElementById('xp2').style.opacity='0'
        document.getElementById('xp3').style.right='28.3%'
        document.getElementById('xp3').style.opacity='1'
    } else if (nextDivId == 'xp3'){
        count3++;
        document.getElementById('xp5').style.right='0%'
        document.getElementById('xp5').style.opacity='0'
        document.getElementById('xp3').style.right='50%'
        document.getElementById('xp3').style.opacity='0'
        document.getElementById('xp4').style.right='28.3%'
        document.getElementById('xp4').style.opacity='1'
    } else if (nextDivId == 'xp4'){
        count3++;
        document.getElementById('xp1').style.right='0%'
        document.getElementById('xp1').style.opacity='0'
        document.getElementById('xp4').style.right='50%'
        document.getElementById('xp4').style.opacity='0'
        document.getElementById('xp5').style.right='28.3%'
        document.getElementById('xp5').style.opacity='1'
    } else if (nextDivId == 'xp5'){
        count3 = 0;
        document.getElementById('xp2').style.right='0%'
        document.getElementById('xp2').style.opacity='0'
        document.getElementById('xp5').style.right='50%'
        document.getElementById('xp5').style.opacity='0'
        document.getElementById('xp1').style.right='28.3%'
        document.getElementById('xp1').style.opacity='1'
    }
    console.log(count3);
}

function btnLeft(){
    const nextDivLeft = 'xp'+ (count3 + 1);
    console.log(nextDivLeft);
    if (nextDivLeft == 'xp1'){
        count3 = 4;
        document.getElementById('xp1').style.right='0%'
        document.getElementById('xp1').style.opacity='0'
        document.getElementById('xp4').style.right='50%'
        document.getElementById('xp4').style.opacity='0'
        document.getElementById('xp5').style.right='28.3%'
        document.getElementById('xp5').style.opacity='1'
    } else if (nextDivLeft == 'xp7'){
        count3 = 0;
        document.getElementById('xp1').style.right='28.3%'
        document.getElementById('xp1').style.opacity='1'
        document.getElementById('xp5').style.right='50%'
        document.getElementById('xp5').style.opacity='0'
        document.getElementById('xp4').style.right='0%'
    } else if (nextDivLeft == 'xp6'){
        count3--;
        document.getElementById('xp1').style.right='0%'
        document.getElementById('xp1').style.opacity='0'
        document.getElementById('xp4').style.right='50%'
        document.getElementById('xp4').style.opacity='0'
        document.getElementById('xp5').style.right='28.3%'
        document.getElementById('xp5').style.opacity='1'
    } else if (nextDivLeft == 'xp2'){
        count3 = 5;
        document.getElementById('xp2').style.right='0%'
        document.getElementById('xp2').style.opacity='0'
        document.getElementById('xp5').style.right='50%'
        document.getElementById('xp5').style.opacity='0'
        document.getElementById('xp1').style.right='28.3%'
        document.getElementById('xp1').style.opacity='1'
    } else if (nextDivLeft == 'xp3'){
        count3--;
        document.getElementById('xp3').style.right='0%'
        document.getElementById('xp3').style.opacity='0'
        document.getElementById('xp1').style.right='50%'
        document.getElementById('xp1').style.opacity='0'
        document.getElementById('xp2').style.right='28.3%'
        document.getElementById('xp2').style.opacity='1'
    } else if (nextDivLeft == 'xp4'){
        count3--;
        document.getElementById('xp4').style.right='0%'
        document.getElementById('xp4').style.opacity='0'
        document.getElementById('xp2').style.right='50%'
        document.getElementById('xp2').style.opacity='0'
        document.getElementById('xp3').style.right='28.3%'
        document.getElementById('xp3').style.opacity='1'
    } else if (nextDivLeft == 'xp5'){
        count3--;
        document.getElementById('xp5').style.right='0%'
        document.getElementById('xp5').style.opacity='0'
        document.getElementById('xp3').style.right='50%'
        document.getElementById('xp3').style.opacity='0'
        document.getElementById('xp4').style.right='28.3%'
        document.getElementById('xp4').style.opacity='1'
    }
    console.log(count3);
}