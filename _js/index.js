var quebrada = false;  
    function mudaLampada(tipo) {
    if (tipo == 1) {
    arquivo = "_imagens/Lampada-acesa.jpg";
    } 
    if (tipo == 2) {
    arquivo ="_imagens/lampada-apagada.jpg";
    }
    if (tipo == 3) {
    arquivo = "_imagens/lampada-quebrada.jpg";
    } 
    if (!quebrada) {
    document.getElementById("Luz").src = arquivo;
    if (tipo ==3) {
        quebrada = true;
        }
    }
};