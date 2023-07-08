// function rps(userinput,systeminput)
// {
    
//     switch(userinput.toLowerCase())
//     {
//         case "rock":
//             switch(systeminput.toLowerCase())
//             {
//                 case "scissors":
//                     console.log( "user-wins!!");
//                     break;
//                 case "paper":
//                     console.log( "system-wins!!");
//                     break;
//                 case "rock":
//                     console.log( "draw");
//                     break;
//             }
//             break;
//         case "paper":
//             switch(systeminput.toLowerCase())
//             {
//                 case "rock":
//                     console.log( "user-wins!!");
//                     break;
//                 case "scissors":
//                     console.log( "system-wins!!");
//                     break;
//                 case "paper":
//                     console.log( "draw");
//                     break;
//             }
//             break;
//         case "scissors":
//             switch(systeminput.toLowerCase())
//             {
//                 case "paper":
//                     console.log( "user-wins!!");
//                     break;
//                 case "rock":
//                     console.log( "system-wins!!");
//                     break;
//                 case "scissors":
//                     console.log( "draw");
//                     break;
//             }
//             break;
//         default:
//             console.log("acche se dalo")

                
        
//     }
// }
// function getcomputerchoice()
// {
//     let choice = ["rock","paper","scissors"];
//     let number = Math.floor(Math.random()*3);
//     return choice[number];
    
// }

// function game()
// {
//     for(let index = 0;index<5;index++)
//     {
//        let userchoice = window.prompt("enter ur choice");
//        let systemchoice = getcomputerchoice();
//        rps(userchoice,systemchoice);
//     }


// }
// game();
// const arr = Array.from(document.querySelectorAll('.button'));
// const elem = document.querySelector('.usn');
// let sum = 0;
// for(let i=0;i<arr.length;i++)
// {
//     let box = arr[i];
//     box.addEventListener('mousedown',game);
    




// }
// for(let i=0;i<arr.length;i++)
// {
//     let box = arr[i];
//     box.addEventListener('transitionend',gamechange)
    
    




// }
// for(let i=0;i<arr.length;i++)
// {
//     let box = arr[i];
//     box.addEventListener('transitionend',playgame(box.id));
    
    




// }

// function game(e)
// {
//     e.target.classList.add('transform');
// }
// function gamechange(e)
// {
//     if(e.propertyName!=='transform') return;
//     e.target.classList.remove('transform');

// }
// function getcomputerchoice()
// {
//     let choice = ["rock","paper","scissor"];
//     let number = Math.floor(Math.random()*3);
//     return choice[number];
    
// }

// function playgame(userinput)
// {
//     const systeminput = 'scissor';
//         switch(userinput)
//     {
//         case "rock":
//             switch(systeminput)
//             {
//                 case "scissor":
//                     sum = sum + 1;
//                     elem.textContent = sum;
//                     break;
//                 case "paper":
//                     console.log( "system-wins!!");
//                     break;
//                 case "rock":
//                     console.log( "draw");
//                     break;
//             }
//             break;
//         case "paper":
//             switch(systeminput)
//             {
//                 case "rock":
//                     console.log( "user-wins!!");
//                     break;
//                 case "scissor":
//                     console.log( "system-wins!!");
//                     break;
//                 case "paper":
//                     console.log( "draw");
//                     break;
//             }
//             break;
//         case "scissors":
//             switch(systeminput)
//             {
//                 case "paper":
//                     console.log( "user-wins!!");
//                     break;
//                 case "rock":
//                     console.log( "system-wins!!");
//                     break;
//                 case "scissor":
//                     console.log( "draw");
//                     break;
//             }
//             break;
//         default:
//             console.log("acche se dalo")

                
        
//     }
// }
const arr = Array.from(document.querySelectorAll('.button'));
const define = ['rock', 'paper', 'scissor'];
const elem = document.querySelector('.usn');
const winner = document.querySelector('.score');
const firstel = document.querySelector('.scores')
const score = Array.from(document.querySelectorAll('.count'));
const reloadbut = document.getElementById('reload-but');
let sumsys = 0;
let sumuser = 0;
let sumdraw = 0;

function change(e) {
  if (!define.includes(e.target.id)) return;
  e.target.classList.add('transform');
}

function gameChange(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('transform');
}



window.addEventListener('click', change);

arr.forEach(function(box) {
    box.addEventListener('transitionend', gameChange);


    });

arr.forEach(function(box){
    box.addEventListener('mouseup',play);
})
reloadbut.addEventListener('click',function(){
    location.reload();
});
function play(e)
{
    playgame(e.target.id);
}

function getcomputerchoice()
{
    let choice = ["rock","paper","scissor"];
    let number = Math.floor(Math.random()*3);
    return choice[number];
    
}
function reload(e)
{
    location.reload();
}
function playgame(userinput)
{

    let systeminput = getcomputerchoice();
    console.log(userinput);
    console.log(systeminput);
        switch(userinput)
    {
        case "rock":
            switch(systeminput)
            {
                case "scissor":
                    sumuser++;
                    score[0].textContent = sumuser;
                    break;
                case "paper":
                    sumsys++;
                    score[1].textContent = sumsys;

                    break;
                case "rock":
                    sumdraw++;
                    score[2].textContent = sumdraw;
                    break;
            }
            break;
        case "paper":
            switch(systeminput)
            {
                case "rock":
                    sumuser++;
                    score[0].textContent = sumuser;
                    break;
                    break;
                case "scissor":
                    sumsys++;
                    score[1].textContent = sumsys;                    
                    break;
                case "paper":
                    sumdraw++;
                    score[2].textContent = sumdraw;
                    break;                    
            }
            break;
        case "scissor":
            switch(systeminput)
            {
                case "paper":
                    sumuser++;
                    score[0].textContent = sumuser;
                    break;                   
                case "rock":
                    sumsys++;
                    score[1].textContent = sumsys;
                    break;
                case "scissor":
                    sumdraw++;
                    score[2].textContent = sumdraw;
                    break;
            }
            break;


                
        
    }

    if(sumuser==5)
    {
        const elem = document.createElement('div');
        elem.textContent = 'CONGRATS!! YOU WIN';
        winner.insertBefore(elem,firstel);

        

    }
    else if(sumsys==5)
    {
        const elem = document.createElement('div');
        elem.textContent = 'OOPS! SYSTEM WON';
        winner.insertBefore(elem,firstel);
    }
}







