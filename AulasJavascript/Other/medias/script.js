function findavg ()
{
    var n1 = document.getElementsByClassName("num1").value
    var n2 = document.getElementsByClassName("num2").value
    
    var nenum = Number(n1);
    var nenum = Number(n2);

    var avg = parseFloat((nenum1 + nenum2)/2);
    var anz = parseInt(avg);

    document.getElementsByClassName ("viewresult").innerHTML="Average is :" + anz;
}