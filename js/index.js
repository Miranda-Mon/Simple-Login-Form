function showPassword(){
    const eye = document.getElementById("eye");
    const eyeSlash = document.getElementById("eye-slash");
    const fieldPassword = document.getElementById("field-password");
    if(eye.style.display == "block"){
        eye.style.display = "none";
        eyeSlash.style.display = "block";
        fieldPassword.type="password";
    }else{
        eye.style.display = "block";
        eyeSlash.style.display = "none";
        fieldPassword.type="text";
    }
};

document.getElementById("btn-login").addEventListener("click",function(e){
    e.preventDefault(); //previne o comportamente padrão, que seria recarregar novamente a página
    alert('Logado');
})