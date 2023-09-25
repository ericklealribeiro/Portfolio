//Botões de Abrir e Fechar o Menu Lateral;
function abrirMenu(){
    document.getElementById('header').style.left='0px'
    document.getElementById('btn_fechar').style.display='block'
    document.getElementById('btn_abrir').style.display='none'
    document.getElementById('overlayFechar').style.display='block'
    document.getElementById('homeH1').style.left='300px'
}
function fecharMenu(){
    document.getElementById('header').style.left='-210px'
    document.getElementById('btn_fechar').style.display='none'
    document.getElementById('btn_abrir').style.display='block'
    document.getElementById('overlayFechar').style.display='none'
    document.getElementById('homeH1').style.left='150px'
}


//Botão de Subir para o Topo;

function ocultar(){
    if (window.scrollY > 70){
        document.getElementById('btnTop').style.opacity='1'
        document.getElementById('btnTop').style.cursor='pointer'
    } else {
        document.getElementById('btnTop').style.opacity='0'
        document.getElementById('btnTop').style.cursor='default'
    }
}
document.addEventListener('scroll', ocultar)