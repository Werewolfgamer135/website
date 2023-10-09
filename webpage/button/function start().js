var intervalID = 0;
var change =100;

function start()
{
    var i = 0;
    var image = document.getElementById("image");
    intervalID = setInterval(function() 
    {
        image.style.left = change+"px";
        image.style.top = change+"px";
       document.getElementById("msg").innerHTML = " X = " + image.style.left+ " y = " + image.style.top;
      change +=2;  // change = change + 5
    },50);
}

function stop()
{
    clearInterval(intervalID);
}

function Bowser()
{
    mysound = new sound("Brawler.mp3");
    mysound.play();
}

function sound(src)
{
    this.sound = document.createElement("audio")
    this.sound.src = src;
    this.play = function(){
        this.sound.play();
    }
}

function StopBowser()
{
    window.location.reload()
}

