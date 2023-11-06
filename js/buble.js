window.addEventListener("load",function(){

    const sound=document.querySelectorAll(".sound");
    const color_paid=document.querySelectorAll(".pad");
    const visual=document.getElementsByClassName("visual")[0];
    const color=['lawngreen','rgb(29, 44, 253)','rgb(247, 91, 19)','rgb(29, 250, 231)'
    ,'rgb(255, 41, 148)',
    '#000']

    color_paid.forEach((pad,index) =>{

        pad.addEventListener("click",function(){

            sound[index].play();

            createBUbbles(index);  
        });
    });//end of foreach loop

    //create bubble function

    const createBUbbles=(index) => {

        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.background=color[index];
        bubble.style.animation='jump 1s ease';
        bubble.addEventListener("animationend",function(){

            visual.removeChild(this);

        });


    };
    
});