const contactW = document.getElementById("contactW");
const contactL = document.getElementById("contactL");
const contactG = document.getElementById("contactG");

contactW.addEventListener('mouseover', hoverContentInW);
function hoverContentInW(){
    document.getElementById('zapIcon').style.left='-275px'
    document.getElementById('hiddenTextW').style.left='40px'
    document.getElementById('hiddenW').style.left='0px'
}
contactW.addEventListener('mouseout', hoverContentOutW);
function hoverContentOutW(){
    document.getElementById('zapIcon').style.left='0px';
    document.getElementById('hiddenTextW').style.left='260px'
    document.getElementById('hiddenW').style.left='-522px'
}


contactL.addEventListener('mouseover', hoverContentInL);
function hoverContentInL(){
    document.getElementById('linkedIcon').style.left='-290px'
    document.getElementById('hiddenTextL').style.left='40px'
    document.getElementById('hiddenL').style.left='0px'
}
contactL.addEventListener('mouseout', hoverContentOutL);
function hoverContentOutL(){
    document.getElementById('linkedIcon').style.left='0px';
    document.getElementById('hiddenTextL').style.left='275px'
    document.getElementById('hiddenL').style.left='-575px'
}


contactG.addEventListener('mouseover', hoverContentInG);
function hoverContentInG(){
    document.getElementById('gitIcon').style.left='-275px'
    document.getElementById('hiddenTextG').style.left='40px'
    document.getElementById('hiddenG').style.left='0px'
}
contactG.addEventListener('mouseout', hoverContentOutG);
function hoverContentOutG(){
    document.getElementById('gitIcon').style.left='0px';
    document.getElementById('hiddenTextG').style.left='260px'
    document.getElementById('hiddenG').style.left='-550px'
}