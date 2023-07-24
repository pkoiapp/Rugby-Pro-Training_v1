// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//login
function login(){

    var user = document.getElementById("user").value;
    var passw = document.getElementById("psw").value;
  
    //alert( "prout: " + user + " - " + passw);
    if (user == 'demo' && passw == 'Coach!2023'){
        window.location.href = 'index.html'
        //alert( "prout: " + user + " - " + passw)
    }
  
  }

  //logout
function logout(){
    if (window.confirm("Souhaitez-vous vous déconnecter?")){
      window.location.href = 'rpt_signup.html'
    };
  }
  
  //affichage informations (accordéon)
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}