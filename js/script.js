
const dropDown = document.querySelectorAll(".dropdown"); //Dropdown
const arrowUpDown = document.querySelectorAll(".arrow"); //Dropdown Arrow image
const length = document.querySelectorAll(".dropdown").length;
const hamBurger = document.querySelector("#burger");
const navigation = document.querySelector(".navigation");
const mainContainer = document.querySelector("#main-container");
const navBar = document.querySelector("#navigation");

// Hamburger Menu

hamBurger.addEventListener("click", () => {
if(navigation.style.width ==="65vw"){
navigation.style.width = "0";
navigation.style.boxShadow = "0 0 0";
hamBurger.querySelector('.x').style.opacity="0";
hamBurger.querySelector('.lines').style.opacity="1";
 
}
else{
  hamBurger.querySelector('.x').style.opacity="1";
  navigation.style.boxShadow = "0 0 50vw 100vw rgba(0,0,0, .6)";
  navigation.style.width = "65vw";
  hamBurger.querySelector('.lines').style.opacity="0";
 
  
}

});


  for (let i = 0; i <= length; i++) {
    dropDown[i].addEventListener("click", () => {
      dropDown[i].classList.toggle("active");
    
    });
  }


