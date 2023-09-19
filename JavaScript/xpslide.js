let count3 = 0;
setInterval(function(){
    btnRight();
}, 5000);

function btnRight(){
    let nextDivId = 'xp'+ (count3 + 1);
    if (count3 == 5){
        count3 = 1;
        document.getElementById('xp3').style.right='45%'
        document.getElementById('xp3').style.opacity='0'
        document.getElementById('xp1').style.right='55%'
        document.getElementById('xp1').style.opacity='0'
        document.getElementById('xp2').style.right='50%'
        document.getElementById('xp2').style.opacity='1'
    } else if (nextDivId == 'xp1'){
        count3++;
        document.getElementById('xp3').style.right='45%'
        document.getElementById('xp3').style.opacity='0'
        document.getElementById('xp1').style.right='55%'
        document.getElementById('xp1').style.opacity='0'
        document.getElementById('xp2').style.right='50%'
        document.getElementById('xp2').style.opacity='1'
    } else if (nextDivId == 'xp2'){
        count3++;
        document.getElementById('xp4').style.right='45%'
        document.getElementById('xp4').style.opacity='0'
        document.getElementById('xp2').style.right='55%'
        document.getElementById('xp2').style.opacity='0'
        document.getElementById('xp3').style.right='50%'
        document.getElementById('xp3').style.opacity='1'
    } else if (nextDivId == 'xp3'){
        count3++;
        document.getElementById('xp5').style.right='45%'
        document.getElementById('xp5').style.opacity='0'
        document.getElementById('xp3').style.right='55%'
        document.getElementById('xp3').style.opacity='0'
        document.getElementById('xp4').style.right='50%'
        document.getElementById('xp4').style.opacity='1'
    } else if (nextDivId == 'xp4'){
        count3++;
        document.getElementById('xp1').style.right='45%'
        document.getElementById('xp1').style.opacity='0'
        document.getElementById('xp4').style.right='55%'
        document.getElementById('xp4').style.opacity='0'
        document.getElementById('xp5').style.right='50%'
        document.getElementById('xp5').style.opacity='1'
    } else if (nextDivId == 'xp5'){
        count3 = 0;
        document.getElementById('xp2').style.right='45%'
        document.getElementById('xp2').style.opacity='0'
        document.getElementById('xp5').style.right='55%'
        document.getElementById('xp5').style.opacity='0'
        document.getElementById('xp1').style.right='50%'
        document.getElementById('xp1').style.opacity='1'
    }
}

function btnLeft(){
    const nextDivLeft = 'xp'+ (count3 + 1);
    if (nextDivLeft == 'xp1'){
        count3 = 4;
        document.getElementById('xp1').style.right='45%'
        document.getElementById('xp1').style.opacity='0'
        document.getElementById('xp4').style.right='55%'
        document.getElementById('xp4').style.opacity='0'
        document.getElementById('xp5').style.right='50%'
        document.getElementById('xp5').style.opacity='1'
    } else if (nextDivLeft == 'xp7'){
        count3 = 0;
        document.getElementById('xp1').style.right='50%'
        document.getElementById('xp1').style.opacity='1'
        document.getElementById('xp5').style.right='55%'
        document.getElementById('xp5').style.opacity='0'
        document.getElementById('xp4').style.right='45%'
    } else if (nextDivLeft == 'xp6'){
        count3--;
        document.getElementById('xp1').style.right='45%'
        document.getElementById('xp1').style.opacity='0'
        document.getElementById('xp4').style.right='55%'
        document.getElementById('xp4').style.opacity='0'
        document.getElementById('xp5').style.right='50%'
        document.getElementById('xp5').style.opacity='1'
    } else if (nextDivLeft == 'xp2'){
        count3 = 5;
        document.getElementById('xp2').style.right='45%'
        document.getElementById('xp2').style.opacity='0'
        document.getElementById('xp5').style.right='55%'
        document.getElementById('xp5').style.opacity='0'
        document.getElementById('xp1').style.right='50%'
        document.getElementById('xp1').style.opacity='1'
    } else if (nextDivLeft == 'xp3'){
        count3--;
        document.getElementById('xp3').style.right='45%'
        document.getElementById('xp3').style.opacity='0'
        document.getElementById('xp1').style.right='55%'
        document.getElementById('xp1').style.opacity='0'
        document.getElementById('xp2').style.right='50%'
        document.getElementById('xp2').style.opacity='1'
    } else if (nextDivLeft == 'xp4'){
        count3--;
        document.getElementById('xp4').style.right='45%'
        document.getElementById('xp4').style.opacity='0'
        document.getElementById('xp2').style.right='55%'
        document.getElementById('xp2').style.opacity='0'
        document.getElementById('xp3').style.right='50%'
        document.getElementById('xp3').style.opacity='1'
    } else if (nextDivLeft == 'xp5'){
        count3--;
        document.getElementById('xp5').style.right='45%'
        document.getElementById('xp5').style.opacity='0'
        document.getElementById('xp3').style.right='55%'
        document.getElementById('xp3').style.opacity='0'
        document.getElementById('xp4').style.right='50%'
        document.getElementById('xp4').style.opacity='1'
    }
}