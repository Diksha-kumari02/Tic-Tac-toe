let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let btn=document.querySelector("#resetbutton");
let newgamebtn=document.querySelector("#newbutton");
let msg = document.querySelector("#msg");

let turnO=true;

const winPattern= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],

];

boxes.forEach(function(box) {
    box.addEventListener("click",function() {
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const resetbutton=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const showWinner=(winner)=>{
    msg.innerText=`congratulations ! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkdraw=()=>{
    let count=0;
    boxes.forEach((box) =>{
        if(box.innerText!=""){
            count++;
        }
    });
    return count==9;
};

const showdraw=()=>{
    msg.innerText=`Its a draw!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkwinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                return true;
              
            }
        }
    }
    if (checkdraw()){
        msg.innerText=`its a draw!`;
         msgContainer.classList.remove("hide");
          disableBoxes();
         return true;
    }
    return false;
    
};

newgamebtn.addEventListener("click",resetbutton);
btn.addEventListener("click",resetbutton);
