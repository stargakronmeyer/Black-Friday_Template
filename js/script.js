const form = document.getElementById("formulario");
console.log(form)
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert('Obrigada por se cadastrar na nossa newsletter!')
    let nome=document.getElementById('nome').value;
    let email=document.getElementById('email').value;
    let data={nome,email};
    let convertData=JSON.stringify(data);
    localStorage.setItem('lead',convertData);

    let content=document.getElementById('content');
    let carregando='<h3><b> Carregando...</b></h3>'
    content.innerHTML=carregando;
    let pronto='<h3><b>Pronto!</b></h3>'
    
    setTimeout(()=>{
        content.innerHTML=pronto
    },1000)
})
