//Botões de Abrir e Fechar o Menu Lateral;
function abrirMenu(){
    document.getElementById('header').style.width='300px'
    document.getElementById('btn_fechar').style.display='block'
    document.getElementById('btn_abrir').style.display='none'
    document.getElementById('home').style.right='360px'
    document.getElementById('btnTop').style.right='175px'
    document.getElementById('overlayFechar').style.display='block'
}
function fecharMenu(){
    document.getElementById('header').style.width='60px'
    document.getElementById('btn_fechar').style.display='none'
    document.getElementById('btn_abrir').style.display='block'
    document.getElementById('home').style.right='150px'
    document.getElementById('btnTop').style.right='14px'
    document.getElementById('overlayFechar').style.display='none'
}


//Botão de Subir para o Topo;
function btnTopo(){
    window.scrollTo(0,0)
}
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