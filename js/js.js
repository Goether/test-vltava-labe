window.addEventListener("load", spusteni);


function spusteni() {

vyplneni()


document.getElementById("input").addEventListener("keyup", filtr);

var polozka = document.getElementsByClassName("polozka");



for (var i = 0; i < polozka.length; i++) {

    polozka[i].addEventListener('click', vyplneniNaClick);
    
}


function vyplneniNaClick(){
    
    var hodnota=this.innerText;
    
    document.getElementById("input").value=hodnota;
    
    for (var i = 0; i < polozka.length; i++) {
    
    polozka[i].style.display="none";
    
    }

}


function filtr() {
  
   var hodnota=document.getElementById("input").value.toLowerCase();
   
   var polozka=document.getElementsByClassName("polozka");
     
   for (i=0; i<= polozka.length-1; i++) {
            
      var textPolozky=polozka[i].innerText.toLowerCase();   
      
      if( textPolozky.indexOf(hodnota) >= 0){
          
          polozka[i].style.display="block";
               
          if (hodnota.length==0)   {
           
             polozka[i].style.display="none";
           
          }
               
          var hodnotaTucne = textPolozky.replace(hodnota, "<span>" + hodnota + "</span>");
               
          polozka[i].innerHTML = hodnotaTucne;
 
      }
               
      else {
           polozka[i].style.display="none";
      }
                  
   }

}


function vyplneni() {

  var db = [
  "Alžírsko",
  "Albatros",
  "Alkohol",
  "Alice",
  "Aljaška",
  "Al-kaida",
  "Aliance",
  "Alokace",
  "Aláh",
  "Abeceda",
  "Automobil",
  "Astat",
  "ARZEN",
  "Autobus",
  "Cesty",
  "Barvy",
  "Domýšlivost",
  "Escape",
  "ABCDEFGH",
  "IJKLMNOPQ",
  "RSTUVWXYZ",
  ];
         
    for (i=0; i<= db.length-1; i++) {
        var radek= document.createElement("p");
      
        radek.className="polozka";
      
        var text=document.createTextNode(db[i]);
      
        radek.appendChild(text);
      
        var element=document.getElementById("vysledek");
      
        element.appendChild(radek); 
    }
         
}

}

