function validaFaleConosco() {
    var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    if (!expRegNome.test(nome)) {
        alert("Preencha o campo Nome Corretamente.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }
    var fone = document.frmfaleconosco.txtfone.value;
    var expRegFone = new RegExp("^[1-9]{2}[0-9]{4,5}[0-9]{4}$");
    if (!expRegFone.test(fone)) {
        alert("Preencha o campo Telefone Corretamente.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }else if (document.frmfaleconosco.txtemail.value == "") {
        alert("Preencha seu email");
        document.frmfaleconosco.txtemail.focus();
        return false;
    } else if (document.frmfaleconosco.motivo.value == "Esc") {
        alert("Escolha o motivo do seu contato!");
        document.frmfaleconosco.motivo.focus();
        return false;
        
    }else if (document.frmfaleconosco.selProduto && document.frmfaleconosco.selProduto.value == "") {
       console.log("Escolha uma opção");
        document.frmfaleconosco.selProduto.focus();
        return false;
    }
    
    else if (document.frmfaleconosco.comentario.value == "") {
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

$(document).ready(function () {
    $("header").load("/src/main/webapp/pages/site/general/cabecalho.html");
    $("nav").load("/src/main/webapp/pages/site/general/menu.html");
    $("footer").load("/src/main/webapp/pages/site/general/rodape.html");
});