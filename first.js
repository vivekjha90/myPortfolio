function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  let btn=document.querySelector("#btn");
let currMode="light";
btn.addEventListener("click",() =>{
 
  if(currMode==="light"){
    currMode="dark";
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector("body").style.color="white";
    document.querySelector("#detail").style.color="white";
    document.querySelector("#edu1").style.backgroundColor="white";
    document.querySelector("#edu1").style.color="black";
    document.querySelector("#edu2").style.backgroundColor="white";
    document.querySelector("#edu2").style.color="black";
    document.querySelector("#edu3").style.backgroundColor="white";
    document.querySelector("#edu3").style.color="black";
  }
  else{
    currMode="light";
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("#detail").style.color="black";
    document.querySelector("body").style.color="black";
    document.querySelector("#edu1").style.backgroundColor="black";
    document.querySelector("#edu1").style.color="white";
    document.querySelector("#edu2").style.backgroundColor="black";
    document.querySelector("#edu2").style.color="white";
    document.querySelector("#edu3").style.backgroundColor="black";
    document.querySelector("#edu3").style.color="white";
  }

})
