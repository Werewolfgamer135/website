function CheckInput()
{

    var firstName = document.getElementById("fname").value;
    //alert(firstName);
    
    var LastName = document.getElementById("lname").value;
    //alert(LastName);

    var allName = firstName +  " " + LastName;

    var len = allName.length;
    //alert(len);

    var badge = document.getElementById("badgeNum").value;
    //alert(badge);

    if (len <2)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid name length";
    }
    else if ((badge>0) && (badge <100000))
    {
        document.getElementById("loginStatus").innerHTML =" Valid login!!!";
        location.replace("Webpage.html")
    }
    else
    {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number";
    }

}