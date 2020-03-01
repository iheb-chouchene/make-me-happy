
function verif_formulaire()
{
  
 if(document.getElementById("fn").value == "")  {
   alert("Veuillez entrer votre firstname!");
   document.formulaire.FirstName.focus();
   return false;
  }
  if(document.getElementById("ln").value == "")  {
    alert("Veuillez entrer votre lastname!");
    document.formulaire.lastName.focus();
    return false;
   }
   if(document.getElementById("ml").value == "") {
    alert("Veuillez mettre l'@!");
    document.formulaire.courriel.focus();
    return false;
   }
  if(document.getElementById("ml").indexOf('@') == -1) {
    alert("Veuillez mettre l'@!");
    document.formulaire.courriel.focus();
    return false;
   }
 if(document.getElementById("pas").value == "") {
   alert("Veuillez entrer votre mot de passe!");
   document.formulaire.password.focus();
   return false;
  }
 
 if(document.getElementById("pas").value == "") {
   alert("L'age doit être un nombre!");
   document.formulaire.age.focus();
   return false;
  }
  var chkZ = 1;
 for(i=0;i<document.formulaire.age.value.length;++i)
   if(document.formulaire.age.value.charAt(i) < "1"
   || document.formulaire.age.value.charAt(i) > "99")
     	 chkZ = -1;
 if(chkZ == -1) {
   alert("votre age n'est pas correcte veuillez mettre un nombre !!!");
       document.formulaire.age.focus();
   return false;
  }
 
  if(document.getElementById("mob").value == "") {
    alert("Veuillez entrer votre mot de passe!");
    document.formulaire.password.focus();
    return false;
   }
  
  if(document.getElementById("mob").value == "") {
    alert("L'age doit être un nombre!");
    document.formulaire.age.focus();
    return false;
   }
   var chkZ = 1;
  for(i=0;i<document.formulaire.age.value.length;++i)
    if(document.value.charAt(i) < "1"
    || document.value.charAt(i) > "99")
         chkZ = -1;
  if(chkZ == -1) {
    alert("votre age n'est pas correcte veuillez mettre un nombre !!!");
        document.focus();
    return false;
   }
  
}

