function rps(userinput,systeminput)
{
    
    switch(userinput.toLowerCase())
    {
        case "rock":
            switch(systeminput.toLowerCase())
            {
                case "scissors":
                    console.log( "user-wins!!");
                    break;
                case "paper":
                    console.log( "system-wins!!");
                    break;
                case "rock":
                    console.log( "draw");
                    break;
            }
            break;
        case "paper":
            switch(systeminput.toLowerCase())
            {
                case "rock":
                    console.log( "user-wins!!");
                    break;
                case "scissors":
                    console.log( "system-wins!!");
                    break;
                case "paper":
                    console.log( "draw");
                    break;
            }
            break;
        case "scissors":
            switch(systeminput.toLowerCase())
            {
                case "paper":
                    console.log( "user-wins!!");
                    break;
                case "rock":
                    console.log( "system-wins!!");
                    break;
                case "scissors":
                    console.log( "draw");
                    break;
            }
            break;
        default:
            console.log("acche se dalo")

                
        
    }
}
function getcomputerchoice()
{
    let choice = ["rock","paper","scissors"];
    let number = Math.floor(Math.random()*3);
    return choice[number];
    
}

function game()
{
    for(let index = 0;index<5;index++)
    {
       let userchoice = window.prompt("enter ur choice");
       let systemchoice = getcomputerchoice();
       rps(userchoice,systemchoice);
    }


}
game();