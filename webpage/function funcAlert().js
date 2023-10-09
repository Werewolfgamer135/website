function funcAlert()
{
    alert("Let's See that score");
    var ranNum1 = Math.ceil(Math.random()*10);
    var ranNum2 = Math.ceil(Math.random()*10);
    var sum = ranNum1+ranNum2
    document.getElementById("sumTag").innerHTML = "sum = " + sum;
    document.getElementById("rand1").innerHTML = "first roll = " + ranNum1;
    document.getElementById("rand2").innerHTML = "second roll = " + ranNum2;

    //alert("First num =" + ranNum1 + " Second num = " + ranNum2);

    if (ranNum1 % 2 ==0)
    {
        //alert("ranNum1 = " + ranNum1 + " and this # is EVEN");
    }
    else
    {
       // alert("ranNum1 = " + ranNum1 + " and this # is ODD");
    }
    if (sum >15)
    {
        alert("You scored a very big amount")
    }
    else if (sum >10)
    {
        alert("You got an average score")
    }
    else if (sum ==7)
    {
        alert ("Lucky number")
    }
    else
    {
        alert("sorry but you scored low")
    }
}