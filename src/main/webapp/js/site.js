function validaFaleConosco() {
    if (document.frmfaleconosco.txtnome.value == "") {
        alert("Preencha o Campo Nome.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    } else if (document.frmfaleconosco.txtfone.value == "") {
        alert("Preencha o Campo Telefone.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    } else if (document.frmfaleconosco.txtemail.value == "") {
        alert("Preencha seu email");
        document.frmfaleconosco.txtemail.focus();
        return false;
    } else if (document.frmfaleconosco.selmotivo.value == "") {
        alert("Escolha o motivo do seu contato!");
        document.frmfaleconosco.selmotivo.focus();
        return false;
    } else if (document.frmfaleconosco.motivo.value == "PR") {
            alert("Escolha uma opção")
        document.frmfaleconosco.selProduto.focus();
        
        return false;
    } else if (document.frmfaleconosco.comentario.value == "") {
        alert("Deixe seu comentário");
        document.frmfaleconosco.comentario.focus();
        return false;
    }

    return true;
}

function verificaMotivo(motivo) {
    var elemento = document.getElementById("opcaoProduto");
    if (motivo == "PR") {
        var select = document.createElement("select");
        select.setAttribute("name", "selProduto");
        var option = document.createElement("option");
        option.setAttribute("value", "");
        var texto = document.createTextNode("Escolha");
        option.appendChild(texto);
        select.appendChild(option);
        var option = document.createElement("option");
        option.setAttribute("value", "GE");
        var texto = document.createTextNode("Freezer");
        option.appendChild(texto);
        select.appendChild(option);
        elemento.appendChild(select);
    } else {
        if (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
        }
    }
}