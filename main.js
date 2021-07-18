document.addEventListener("DOMContentLoaded", function(){
    const allElement = document.querySelectorAll(".anim-bg");
    console.log(allElement);
    document.addEventListener("mousemove",function(event){
        console.log(event);
        const{clientX, clientY} = event;
        allElement.forEach(element =>{
            const ratioX = -element.getAttribute("RatioX");
            const ratioY = -element.getAttribute("RatioY");
            const CenterX = window.innerWidth/2;
            const CenterY = window.innerHeight/2;
            const X = clientX - CenterX;
            const Y = clientY - CenterY;
            element.style.transform = `translate(${X*ratioX}px,${Y *ratioY}px)`
        })

    } )

})