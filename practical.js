function cal(){
    let p=document.getElementById("principal").value;
    let r=document.getElementById("rate").value;
    let t=document.getElementById("time").value;
    if(p==""||r==""||t==""){
        document.getElementById("result").innerHTML="wrong";
        return;
    }
    let s=(p*r*t)/100;
    document.getElementById("result").innerHTML="simple interest=" + s.toFixed(2);

}
