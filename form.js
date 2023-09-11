const form = document.getElementById("form");

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    const email = document.getElementById("emailBox").value
    const assunto = document.getElementById("assuntoBox").value
    const texto = document.getElementById("messageBox").value.replaceAll('\n', '%0a')
    console.log(texto)
    const text = `
E-mail de contato: ${email}.%0a
%0a
*${assunto}*%0a
${texto}%0a
`
    window.open(`https://wa.me/5511980567119?text=${text}%0a`, "_blank").focus();
});