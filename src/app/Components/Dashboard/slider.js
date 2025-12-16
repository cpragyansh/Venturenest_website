

function corosuelShow(){
    let btn_next = document.querySelector(".corosuel-next");
let btn_prev = document.querySelector(".corosuel-prev");
let first = document.querySelector(".corosuel-first");

let slide = "first";





btn_next.addEventListener("click" ,() =>{
    // let slide = "first";
    if(slide === "first"){
        document.querySelector(".corosuel-first").style.display = "block";
        
        slide ="second";
        
    // document.querySelector(".second").style.backgroundColor = "red";
    }
    else if(slide === "second"){
        document.querySelector(".corosuel-second").style.display = "block";
       
        slide ="third";
    }
   else if(slide === "third"){
       document.querySelector(".corosuel-first").style.display = "None";
   
       slide ="fourth";
    // document.querySelector(".fourth").style.backgroundColor = "red";
    }
    else{
        document.querySelector(".corosuel-second").style.display = "None";
     
        slide ="first";
    }
});
setInterval(() => {
    btn_next.click();
}, 1000); // Trigger click every 1000 milliseconds (1 second)
}
module.exports = {
    corosuelShow,
}