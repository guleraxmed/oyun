 let ekran = document.getElementById("show");
 let status= document.getElementById("status");
 let input = document.getElementById("input");
 let can;
 let netice = document.getElementById("netice")
 let yoxla = document.getElementById("yoxla");
 let number = Math.floor(Math.random()*11);
 console.log(number);


 function Başla(){
    status.style.display = "inline-block";
    input.style.display = "inline-block";
    yoxla.style.display = "inline-block";
    status.innerHTML="1-10 arasından bir ədəd daxil edin ";
 }
 function Yoxla(){
        if( input.value==number){
            netice.style.display = "inline-block";
            netice.innerHTML="Qazandınız Təbriklər!";
         }
         else if(input.value > number){
            netice.style.display = "inline-block";
            netice.innerHTML="Siz böyük ədəd daxil etmisiniz,daha kiçik ədəd yoxlayın";
         }
         else{
            netice.style.display = "inline-block";
            netice.innerHTML="Siz kiçik ədəd daxil etmisiniz,daha böyük ədəd yoxlayın";
         }
    }
    
     
  


 