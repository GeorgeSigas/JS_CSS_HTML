function DateFunction(){
    var d=new Date();
    var n=d.toLocaleDateString();
    document.getElementById("dateText").innerHTML=n
    var day=d.getDate();
    if(day%2==0)
    {
        document.getElementsByClassName("Menu")[0].style.backgroundColor="#493838"
    }
    else{
        document.getElementsByClassName("Menu")[0].style.backgroundColor="#aa8383"
    }
}