const loadtext= document.querySelector('.loading-text')
const bg=document.querySelector('.bg') 

let load=0

let blurr =setInterval(blurring,30)


// function blurring(){
//     load++
//     if (load>99){
//         clearInterval(blur)
//     }
//     console.log(load)
// }


function blurring(){
    load++
    if(load>99){
        clearInterval(blurr)
    }

    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
    
    loadtext.innerText =`${load}%`
    loadtext.style.opacity = scale(load,0,100,1,0)

    bg.style.filter =`blur(${scale(load,0,100,30,0)}px)`

}
