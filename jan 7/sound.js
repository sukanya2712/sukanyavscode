const btnsxyz = Array.from(document.querySelectorAll(".btn"))

for(var i=0;i<btnsxyz.length;i++){
    var buttonxyz = btnsxyz[i]
    playSound(buttonxyz)
    // console.log(buttonxyz)
}

function stopSounds(){
    for(var i=0;i<btnsxyz.length;i++){
        const sound = document.getElementById(btnsxyz[i].innerText)
        sound.pause()
        sound.currentTime = 0
    }
}

function playSound(btn){
    btn.addEventListener("click",function(){
        // console.log(btn)
        stopSounds()
        document.getElementById(btn.innerText).play()
    })
}

document.querySelector(".stop").addEventListener("click",function(){
    stopSounds()
})

