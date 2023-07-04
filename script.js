function rps(userinput,systeminput)
{
    
    switch(userinput.toLowerCase())
    {
        case "rock":
            switch(systeminput.toLowerCase())
            {
                case "scissors":
                    return "user-wins!!";
                    break;
                case "paper":
                    return "system-wins";
                    break;
                case "rock":
                    return "draw";
                    break;
            }
            break;
        case "paper":
            switch(systeminput.toLowerCase())
            {
                case "rock":
                    return "user-wins!!";
                    break;
                case "scissors":
                    return "system-wins";
                    break;
                case "paper":
                    return "draw";
                    break;
            }
            break;
        case "scissors":
            switch(systeminput.toLowerCase())
            {
                case "paper":
                    return "user-wins!!";
                    break;
                case "rock":

                    return "system-wins";
                    break;
                case "scissors":
                    return "draw";
                    break;
            }
            break;
        default:
            return "enter a valid name";
                
        
    }
}