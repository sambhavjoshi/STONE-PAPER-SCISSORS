const compImg = document.querySelector(".computer img");
const userImg = document.querySelector(".user img");
let compPoints = document.querySelector(".compPoints");
let userPoints = document.querySelector(".userPoints");
const options = document.querySelectorAll(".options button");
options.forEach((option) => {
    option.addEventListener("click",()=>{
        compImg.classList.add("shakeComputer");
        userImg.classList.add("shakePlayer");

        setTimeout(()=>{
         compImg.classList.remove("shakeComputer");
         userImg.classList.remove("shakePlayer");

         userImg.src = "./" + option.innerHTML + "Player.png";
         let n = Math.floor(Math.random()*3);
         let cChoice = options[n].innerHTML;
         compImg.src = "./" + cChoice + "Computer.png";
         let uChoice = option.innerHTML;

         let cPoints = Number(compPoints.innerHTML);
         let uPoints = Number(userPoints.innerHTML);

         if(uChoice == "STONE"){
            if(cChoice == "PAPER") cPoints++;
            else if(cChoice == "SCISSORS") uPoints++;
         }
         else if(uChoice == "PAPER"){
            if(cChoice == "SCISSORS") cPoints++;
            else if(cChoice == "STONE") uPoints++;
         }
         else{
            if(cChoice == "STONE") cPoints++;
            else if(cChoice == "PAPER") uPoints++;
         }


         compPoints.innerHTML = cPoints;
         userPoints.innerHTML = uPoints;
         
         setTimeout(()=>{
             userImg.src = "./stonePlayer.png";
             compImg.src = "./stoneComputer.png";

         if(uPoints === 3) {
            alert("YOU WIN !!");
            cPoints = 0;
            uPoints = 0;
         }
         else if(cPoints === 3){
            alert("YOU SUCH A LOSER");
            cPoints = 0;
            uPoints = 0;
         }
         compPoints.innerHTML = cPoints;
         userPoints.innerHTML = uPoints;
         },1000)
        },900);
    });
});