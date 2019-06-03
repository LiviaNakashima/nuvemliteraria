if (sessionStorage.usuario_bandtec != undefined)
{
    ss.style.display = 'block';
    cad.style.display = 'none';
    ent.style.display = 'none';
}

else {
    
    cad.style.display = 'block';
    ent.style.display = 'block';
    ss.style.display = 'none';
}

function sair()
{
    sessionStorage.clear();
    window.location.href = 'Index.html';
}