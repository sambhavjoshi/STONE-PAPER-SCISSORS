const compImg = document.querySelector(".computer img");
const userImg = document.querySelector(".user img");
let compPoints = document.querySelector(".compPoints");
let userPoints = document.querySelector(".userPoints");
const options = document.querySelectorAll(".options button");
options.forEach((option) => {
    option.addEventListener("click",()=>{
        compImg.classList.add("shakeComputer");
        userImg.classList.add("shakePlayer");
        
        
        let cPoints = Number(compPoints.innerHTML);
         let uPoints = Number(userPoints.innerHTML);
        
        
         setTimeout(()=>{
         compImg.classList.remove("shakeComputer");
         userImg.classList.remove("shakePlayer");

         userImg.src = "./" + option.innerText + "Player.png";
         let n = Math.floor(Math.random()*3);
         let cChoice = options[n].innerText;
         compImg.src = "./" + cChoice + "Computer.png";
         let uChoice = option.innerHTML;


         if(uChoice == "stone"){
            if(cChoice == "paper") cPoints++;
            else if(cChoice == "scissors") uPoints++;
         }
         else if(uChoice == "paper"){
            if(cChoice == "scissors") cPoints++;
            else if(cChoice == "stone") uPoints++;
         }
         else{
            if(cChoice == "stone") cPoints++;
            else if(cChoice == "paper") uPoints++;
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
         },1000);
        },900);
        
    });
});
