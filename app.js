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
    if(choiceId==="rock" && compchoice==="rock"){
        console.log("Game Draw");
        msg.innerText="Game Draw";
         msg.style.backgroundColor="black";
    }
     else if(choiceId==="paper" && compchoice==="paper"){
        console.log("game draw");
        msg.innerText="Game Draw";
          msg.style.backgroundColor="black";
    }
     else if(choiceId==="paper" && compchoice==="rock"){
        console.log("user win");
        msg.innerText="User win";
         msg.style.backgroundColor="green";
         userScore++;
          userscore.innerText=userScore;
    }
     else if(choiceId==="rock" && compchoice==="scissor"){
        console.log("user win");
        msg.innerText="User win";
          msg.style.backgroundColor="green";
          userScore++;
           userscore.innerText=userScore;
    }
     else if(choiceId==="scissor" && compchoice==="paper"){
        console.log("user win");
        msg.innerText="User win";
         msg.style.backgroundColor="green";
         userScore++;
          userscore.innerText=userScore;
    }
     else if(choiceId==="paper" && compchoice==="scissor"){
        console.log("computer win");
       msg.innerText="Computer Win";
         msg.style.backgroundColor="red";
         copmScore++;
          computerscore.innerText=copmScore;
    }
     else if(choiceId==="rock" && compchoice==="paper"){
        console.log("computer win");
        msg.innerText="Computer Win";
          msg.style.backgroundColor="red";
          copmScore++;
           computerscore.innerText=copmScore;
    } 
    else if (choiceId==="scissor" && compchoice==="scissor"){
        console.log("game draw");
        msg.innerText="Game Draw";
            msg.style.backgroundColor="black";
    }
         else if(choiceId==="scissor" && compchoice==="rock"){
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
