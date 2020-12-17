


const turnHeader = document.querySelector(".player-turn");
const input =  document.querySelectorAll(".input");
const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");
const line = document.querySelector(".line");
const app = document.querySelector(".wrapper-hashgame");
let lastInput;
let turn = "Player 1";
let count = 0;





const disabledGame = () => {
    input.forEach((item) => {
    item.setAttribute("disabled", true);
 });

app.style.opacity = ".5";

}

const startGame = () => {
    input.forEach((item) => {
    item.removeAttribute("disabled");
});

app.style.opacity = "1";
turnHeader.innerHTML = turn;
btnReset.removeAttribute("disabled");
btnStart.setAttribute("disabled", true);
btnStart.style.opacity = ".5";


}

const resetGame = () => {

input.forEach( (item) => {
    item.value = "";
    item.removeAttribute("disabled");
});

app.style.opacity = "1";
turnHeader.innerHTML = "Player 1";
count = 0;
turn = "Player 1";
lastInput = null;

line.style.top = "0";
line.style.left = "0";
line.style.display = "none";
line.style.transform = "rotate(0)";
line.style.height = "0";
line.style.width = "0";

}

const checkWinOrHash = () => {

    if(  input[4].value === input[3].value && 
         input[4].value === input[5].value && 
         input[5].value !== "") { // Horizontal Middle //Checked
        
        drawLine("middleX");

        input[4].value == "X" ? turnHeader.innerHTML = "Player 1 Won!" :  turnHeader.innerHTML = "Player 2 Won!";     
        disabledGame();
         
    } else if
        (input[1].value === input[0].value && 
         input[1].value === input[2].value && 
         input[1].value !== "") { // Horizontal Top //Checked
        
        drawLine("top");

        input[1].value == "X" ? turnHeader.innerHTML = "Player 1 Won!" :  turnHeader.innerHTML = "Player 2 Won!";
        disabledGame();

    } else if
         (input[7].value === input[6].value && 
         input[7].value === input[8].value && 
         input[7].value !== "") { // Horizontal Bottom  //Checked
        
        drawLine("bottom");

        input[7].value == "X" ? turnHeader.innerHTML = "Player 1 Won!" :  turnHeader.innerHTML = "Player 2 Won!";
        disabledGame();

    } else if
         (input[4].value === input[1].value && 
         input[4].value === input[7].value && 
         input[4].value !== "") { // Vertical Middle  //Checked
        
        drawLine("middleY");

        input[4].value == "X" ? turnHeader.innerHTML = "Player 1 Won!" :  turnHeader.innerHTML = "Player 2 Won!";
        disabledGame();

    } else if
         (input[3].value === input[0].value && 
         input[3].value === input[6].value && 
         input[3].value !== "") { // Vertical Left //Checked
        
        drawLine("left");

        input[3].value == "X" ? turnHeader.innerHTML = "Player 1 Won!" :  turnHeader.innerHTML = "Player 2 Won!";
        disabledGame();

    } else if 
         (input[2].value === input[5].value && 
         input[2].value === input[8].value && 
         input[2].value !== "") { // Vertical Right //Checked
        
        drawLine("right");
        
        input[2].value == "X"  ? turnHeader.innerHTML = "Player 1 Won!" :  turnHeader.innerHTML = "Player 2 Won!";
        disabledGame();

    } else if
         (input[4].value === input[0].value && 
         input[4].value === input[8].value && 
         input[4].value !== "") {  // Diagonal Top-Right To Down-Left //Checked
        
        drawLine("diagLeftRight");
        
        input[4].value == "X" ? turnHeader.innerHTML = "Player 1 Won!" :  turnHeader.innerHTML = "Player 2 Won!";
        disabledGame();

    } else if
         (input[4].value === input[2].value && 
         input[4].value === input[6].value && 
         input[4].value !== ""){ // Diagonal Top-Left To Down-Right //Checked
        
        drawLine("diagRightLeft");
        
        input[4].value == "X" ? turnHeader.innerHTML = "Player 1 Won!" :  turnHeader.innerHTML = "Player 2 Won!";
        disabledGame();

    }

}

const drawLine = ( stringPosition ) =>{
    switch(stringPosition){
        case "top":{
            line.style.height = "15px";
            line.style.width = "100%";
            line.style.display = "block";
            line.style.top = "14.5%";
            break;
        }
        case "middleX":
            line.style.height = "15px";
            line.style.width = "100%";
            line.style.display = "block";
            line.style.top = "48%";
            break;
        
        case "bottom":
            line.style.height = "15px";
            line.style.width = "100%";
            line.style.display = "block";
            line.style.top = "81.5%";
            break;
        
        case "left":
            line.style.display = "block";
            line.style.height = "100%";
            line.style.width = "15px";
            line.style.left = "14.5%";
            break;
        
        case "middleY":
            line.style.display = "block";
            line.style.height = "100%";
            line.style.width = "15px";
            line.style.left = "48%";
            break;
        
        case "right":
            line.style.display = "block";
            line.style.height = "100%";
            line.style.width = "15px";
            line.style.left = "81.5%";
            break;
        
        case "diagRightLeft":
            line.style.height = "15px";
            line.style.width = "100%";
            line.style.display = "block";
            line.style.top = "49%";
            line.style.transform = "rotate(-33deg)";
            break;
        
        case "diagLeftRight":
            line.style.height = "15px";
            line.style.width = "100%";
            line.style.display = "block";
            line.style.top = "49%";
            line.style.transform = "rotate(33deg)";
            break;
    }
}


const checkValidInput = (event) => {

    console.log(event.value);

    if( event.value !== "X" && 
        event.value !== "O"){

        event.value = "";        
        return alert("Invalid input. Must be O or X (uppercased) "); ; 
    }

    if(count === 0){
        if( event.value !== "X" ){
        alert(" First play must be X (Player 1) ");
        event.value = ""; 
        return checkValidInput();
        }
    }

    if(event.value === lastInput){
        alert("Its " + turn + " turn.");
        event.value = "";
        return checkValidInput();
    }

    if (event.value === "X"){
        turn = "Player 2";
        turnHeader.innerHTML = turn;
    }else{
        turn = "Player 1";
        turnHeader.innerHTML = turn;  
    }

    lastInput = event.value;
    
    checkWinOrHash();

    event.setAttribute("disabled", true);

    count++;

    if(count == 9){
        turnHeader.innerHTML = "Draw!";
    }
    
    return true;
}

disabledGame();
