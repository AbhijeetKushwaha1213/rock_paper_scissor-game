let userScore=0;
let copmScore=0; 
const userscore = document.querySelector("#user_score");
const computerscore =document.querySelector("#computer_score");
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector(".result")


const getcompchoice=()=>{
    const option=["rock","paper","scissor"];
    const ranidx=Math.floor(Math.random()*3);
    return option[ranidx];
}
const playgame=(choiceId)=>{
    console.log("user choice",choiceId)
    const compchoice=getcompchoice();
    console.log("computer choice",compchoice);
    if(choiceId===compchoice){
        console.log("Game Draw");
        msg.innerText="Game Draw";
         msg.style.backgroundColor="black";
    }
     else if(choiceId==="paper" && compchoice==="rock" || choiceId==="rock" && compchoice==="scissor" || choiceId==="scissor" && compchoice==="paper"){
        console.log("user win");
        msg.innerText="User win";
         msg.style.backgroundColor="green";
         userScore++;
          userscore.innerText=userScore;
    }
     else if(choiceId==="paper" && compchoice==="scissor" || choiceId==="rock" && compchoice==="paper"|| choiceId==="scissor" && compchoice==="rock"){
        console.log("computer win");
       msg.innerText="Computer Win";
         msg.style.backgroundColor="red";
         copmScore++;
          computerscore.innerText=copmScore;
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId=choice.getAttribute("id")
        playgame(choiceId);
    });
});
