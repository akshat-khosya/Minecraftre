document.querySelector(".team").addEventListener("click", handleClick);
function handleClick(){
    alert("Team will be updated soon");
}
    
document.querySelector(".teamb").addEventListener("click", teambclick);
function teambclick(){
    alert("Team will be updated soon");
}
document.querySelector(".event").addEventListener("click", eventclick);
function eventclick(){
    alert("No Event Yet!");
}
document.querySelector(".clickme").addEventListener("click", meclick);
function meclick(){
    alert("This Section will be updated soon");
}
document.querySelector(".navbar-brand").addEventListener("click", brandclick);
function brandclick(){
    var numcolor=Math.round(Math.random()*7);
    if(numcolor===0){
        document.querySelector(".navbar-brand").style.color="red";
    }
    else if(numcolor===1){
        document.querySelector(".navbar-brand").style.color="green";
    }
    else if(numcolor===2){
        document.querySelector(".navbar-brand").style.color="white";
    }
    else if(numcolor===3){
        document.querySelector(".navbar-brand").style.color="blue";
    }
    else if(numcolor===4){
        document.querySelector(".navbar-brand").style.color="yellow";
    }
    else if(numcolor===5){
        document.querySelector(".navbar-brand").style.color="pink";
    }
    else if(numcolor===6){
        document.querySelector(".navbar-brand").style.color="brown";
    }
}

document.querySelector(".nav-link").addEventListener("click", navitemclick);
function navitemclick(){
    var numitemcolor=Math.round(Math.random()*7);
    
    if(numitemcolor===0){
        document.querySelector(".nav-link").style.color="red";
    }
    else if(numitemcolor===1){
        document.querySelector(".nav-link").style.color="green";
    }
    else if(numitemcolor===2){
        document.querySelector(".nav-link").style.color="white";
    }
    else if(numitemcolor===3){
        document.querySelector(".nav-link").style.color="blue";
    }
    else if(numitemcolor===4){
        document.querySelector(".nav-link").style.color="yellow";
    }
    else if(numitemcolor===5){
        document.querySelector(".nav-link").style.color="pink";
    }
    else if(numitemcolor===6){
        document.querySelector(".nav-link").style.color="brown";
    }


}
document.querySelector(".why-img").addEventListener("mouseenter", imgeffect);
function imgeffect(){
    document.querySelector(".why-img").src = "Image/what.jpg";
    document.querySelector(".why-img").style.padding="1% 1% 1% 1%";
}