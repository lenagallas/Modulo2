
function ex1(){
    var v0 = document.getElementById('v0').value;
    var tempo = v0/10;
    var hmax = (v0^2)/20;
    document.getElementById('vem').innerHTML = "tempo de queda = " + tempo
    console.log("tempo " + tempo);
    console.log("altura " + hmax);
}
