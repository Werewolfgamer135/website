function strings()
{
    var str1 = document.getElementById("initString").value;
    //alert(str1); 

    var str2 = str1.substring(0,3);
    //alert ("str2 = substr " + str2);

    str2 = str1.replace(/qwe/, "asd");
    str2 =str1.replace(/qwe/i, "asd")//i = case Insensitive
    //alert("replace qwe with asd " + str2);

    str1 = str1.toLowerCase();
    //alert("lower case str1 " + str1);
    str2 = str1.replace(/qwe/g, "asd")
    //alert("replace all " + str2)

    //reverse string
    var splitString = str1.split("");
    //alert("split string = " + splitString)
    var reveseString = splitString.reverse();
    //alert ("reverse string = " + reveseString);
    var joinString = reveseString.join("");
    //alert ("joined string = " + joinString )

    if (str1 ==joinString)
    {
        document.getElementById("updated string").innerHTML = "This is a Palindrome";
        //alert("This is a Palindrome");
    }
    else
    {
        document.getElementById("updated string").innerHTML = "This is not a Palindrome";
        //alert("This is not a Palindrome")
    }
}

function Bowser()
{
    mysound = new sound("Werewolf Howl.mp3");
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