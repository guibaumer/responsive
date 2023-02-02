function entrada() {
    let username = document.getElementById('inome');
    let senha = document.getElementById('isenha').value;
    const senhaCorreta = '15142268'; 
     if(senha === senhaCorreta) {
        // window.location.href = "https://www.spacex.com/";
        location.replace("pagina3.html")
     }
     else {
        window.alert('Senha errada.')
     }
}
