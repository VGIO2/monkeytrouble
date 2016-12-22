function calcular()
{
    var aSmile = document.getElementById("monoa").value;
    var bSmile = document.getElementById("monob").value;
    
    var isaSmile = false;
    var isbSmile = false;
    
    var salida = document.getElementById("salida");
    
    if(aSmile == bSmile)
        {
            isaSmile = true;
        }
    if(aSmile != bSmile)
        {
            isbSmile = false;
        }
    if(isaSmile)
        {
            salida.innerHTML ="Si";
        }
    else{
        if(isbSmile){
             salida.innerHTML = "No";
        }
        else{
             salida.innerHTML ="No"
        }
        }
}