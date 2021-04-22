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

var navlinknum = document.querySelectorAll(".navbaritem").length;

   for(var i=0;i<navlinknum;i++){

    document.querySelectorAll(".navbaritem")[i].addEventListener("click", navitemclick);
    
    function navitemclick(){
        var navlinkinnerhtml=this.innerHTML;
        switch(navlinkinnerhtml){
            case "About":
                var numitemcolor=Math.round(Math.random()*7);
                if(numitemcolor===0){
                    document.querySelectorAll(".navbaritem")[0].style.color= "red";
                    }
                    else if(numitemcolor===1){
                        document.querySelectorAll(".navbaritem")[0].style.color= "green";
                    }
                    else if(numitemcolor===2){
                        document.querySelectorAll(".navbaritem")[0].style.color= "white";
                    }
                    else if(numitemcolor===3){
                        document.querySelectorAll(".navbaritem")[0].style.color= "blue";
                    }
                    else if(numitemcolor===4){
                        document.querySelectorAll(".navbaritem")[0].style.color= "yellow";
                    }
                    else if(numitemcolor===5){
                        document.querySelectorAll(".navbaritem")[0].style.color= "pink";
                    }
                    else if(numitemcolor===6){
                        document.querySelectorAll(".navbaritem")[0].style.color= "brown";
                    }
                    break;
                    case "Work":
                        var numitemcolor=Math.round(Math.random()*7);
                        if(numitemcolor===0){
                            document.querySelectorAll(".navbaritem")[1].style.color= "red";
                            }
                            else if(numitemcolor===1){
                                document.querySelectorAll(".navbaritem")[1].style.color= "green";
                            }
                            else if(numitemcolor===2){
                                document.querySelectorAll(".navbaritem")[1].style.color= "white";
                            }
                            else if(numitemcolor===3){
                                document.querySelectorAll(".navbaritem")[1].style.color= "blue";
                            }
                            else if(numitemcolor===4){
                                document.querySelectorAll(".navbaritem")[1].style.color= "yellow";
                            }
                            else if(numitemcolor===5){
                                document.querySelectorAll(".navbaritem")[1].style.color= "pink";
                            }
                            else if(numitemcolor===6){
                                document.querySelectorAll(".navbaritem")[1].style.color= "brown";
                            }
                            break;
                            case "Team":
                                var numitemcolor=Math.round(Math.random()*7);
                                if(numitemcolor===0){
                                    document.querySelectorAll(".navbaritem")[2].style.color= "red";
                                    }
                                    else if(numitemcolor===1){
                                        document.querySelectorAll(".navbaritem")[2].style.color= "green";
                                    }
                                    else if(numitemcolor===2){
                                        document.querySelectorAll(".navbaritem")[2].style.color= "white";
                                    }
                                    else if(numitemcolor===3){
                                        document.querySelectorAll(".navbaritem")[2].style.color= "blue";
                                    }
                                    else if(numitemcolor===4){
                                        document.querySelectorAll(".navbaritem")[2].style.color= "yellow";
                                    }
                                    else if(numitemcolor===5){
                                        document.querySelectorAll(".navbaritem")[2].style.color= "pink";
                                    }
                                    else if(numitemcolor===6){
                                        document.querySelectorAll(".navbaritem")[2].style.color= "brown";
                                    }
                                    break;
                                    default: console.log(numitemcolor);

        }
        
        }
} 

   
document.querySelector(".why-img").addEventListener("mouseenter", imgeffect);
function imgeffect() {
    document.querySelector(".why-img").src = "Image/what.jpg";
    document.querySelector(".why-img").style.width="102%";
}
document.querySelector(".why-img").addEventListener("mouseleave", imgeffectrev);
function imgeffectrev(){
    document.querySelector(".why-img").src = "Image/what-black.jpg";
    document.querySelector(".why-img").style.width="100%";
    
}
