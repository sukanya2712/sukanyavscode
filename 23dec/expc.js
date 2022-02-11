const panels=document.querySelectorAll(".card")

//panels.addEventlistener("click",)

panels.forEach(panel=>{
    panel.addEventListener("click",()=>{
        removeactiveClass()
        panel.classList.add("active")
    })

})

function removeactiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove("active")
    })
}

