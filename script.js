function rps(userinput,systeminput)
{
    switch(toLowerCase(userinput))
    {
        case "rock":
            switch(toLowerCase(systeminput))
            {
                case "paper":
                    return "user-wins!!";
                    break;
                case "scissors":
                    return "system-wins";
                    break;
                case "rock":
                    return "draw";
                    break;
            }
                case "paper":
                    switch(toLowerCase(systeminput))
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
                case "scissors":
                    switch(toLowerCase(systeminput))
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
                

    }
}