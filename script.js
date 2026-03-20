let popupTimer;

function toggleEmail(){
  const popup = document.getElementById("email-popup");

  popup.classList.toggle("show");

  clearTimeout(popupTimer);

  popupTimer = setTimeout(()=>{
    popup.classList.remove("show");
  },3000);
}

function copyEmail(){

  const email = document.getElementById("email-text").innerText;
  const popup = document.getElementById("email-popup");

  navigator.clipboard.writeText(email);

  const btn = document.querySelector(".copy-btn");

  btn.innerText = "copiado!";

  setTimeout(()=>{
    btn.innerText = "copiar";
  },1500);

  setTimeout(()=>{
    popup.classList.remove("show");
  },3000);
}

document.addEventListener("click", function(event){

  const popup = document.getElementById("email-popup");
  const button = document.querySelector(".email-btn");

  if(!popup.contains(event.target) && !button.contains(event.target)){
      popup.classList.remove("show");
  }

});
