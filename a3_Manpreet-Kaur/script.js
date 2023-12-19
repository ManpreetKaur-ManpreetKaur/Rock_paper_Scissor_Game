var score1= 0;
var score2= 0;

document.getElementById('rock').onclick = function()
{
    document.getElementById('start2').src = "images/rock.png";
    var imageu =  "images/rock.png";
    var imagec = computer();
   
    if(imagec == "images/paper.png")
    {
        score1 = score1 + 1;
    }
    else if(imagec == "images/scissors.png")
    {
        score2 = score2 +1;
    }
    document.getElementById('score1').innerHTML = score1;
    document.getElementById('score2').innerHTML = score2;
   confirmBox();
}


document.getElementById('paper').onclick = function()
{
    document.getElementById('start2').src = "images/paper.png";
    var imageu =  "images/paper.png";
    var imagec = computer();

    if(imagec == "images/scissors.png")
    {
        score1 = score1 + 1;
    }
    else if(imagec == "images/rock.png")
    {
        score2 = score2 +1;
    }
    document.getElementById('score1').innerHTML = score1;
    document.getElementById('score2').innerHTML = score2; 
   confirmBox();
}


document.getElementById('scissors').onclick = function()
{
    document.getElementById('start2').src = "images/scissors.png";
    var imageu =  "images/scissors.png"; 
    var imagec = computer();

    if(imagec == "images/rock.png")
    {
        score1 = score1 + 1;
    }
    else if(imagec == "images/paper.png")
    {
        score2 = score2 +1;
    }
    document.getElementById('score1').innerHTML = score1;
    document.getElementById('score2').innerHTML = score2;
    confirmBox();
}


function confirmBox()
{
        
    var choice =confirm("Do you want to continue");
    if(choice == false)
    {
       
    
        if(score2 > score1)
        {
            document.getElementById('win').innerHTML ="YOU WIN ! <br> Final Score: <br> User's Score : " +score2 +  " <br> Computer's Score : " + score1 ; 
            
            
        }
        else if(score1 > score2)
        {
            document.getElementById('lose').innerHTML ="YOU LOSE ! <br> Final Score: <br> User's Score : " +score2 + " <br>   Computer's Score : " + score1; 
           
            
        }
        else{
            document.getElementById('draw').innerHTML ="IT'S A DRAW ! <br> Final Score: <br> User's Score : " +score2 + " <br>   Computer's Score : " + score1  ; 
            
            
        }
       
    }
    
}
function computer()
{
    var arr=["images/rock.png","images/paper.png", "images/scissors.png"];
    var index = Math.round(Math.random()* 2);
    document.getElementById('start1').src = arr[index];
    return arr[index];
    
}

document.getElementById('reset').onclick = function()
{
    score1 = 0;
    score2 = 0;
    document.getElementById('score1').innerHTML = 0;
    document.getElementById('score2').innerHTML = 0;
    document.getElementById('start1').src = "images/start.png";
    document.getElementById('start2').src = "images/start.png"; 
    document.getElementById('win').innerHTML ="" ; 
    document.getElementById('lose').innerHTML ="" ; 
    document.getElementById('draw').innerHTML ="" ; 
    

}


