let displayxyz=document.getElementById("display")
let buttonxyz=Array.from(document.getElementsByClassName("btn"))


function clicking(btnxyz){
    btnxyz.addeventListner("click",(xyz)=>{
        switch(xyz.target.innerText){
            case 'c':
                displayxyz.innerText=""
                break
                case '+':
                displayxyz.innerText=displayxyz.innerText.slice(0,-1)  
                break
                case '-':
                    try{
                        displayxyz.innerText=eval(displayxyz.innerText)
                    }  
                    catch{
                        displayxyz.innerText="error"
                    }
                    break
            default:
                displayxyz.innerText= display.innerText+ xyz.target.innerText
                break

            }

    })
}
console.log(buttonxyz)
buttonxyz.map(abcdxyz=>clickingxyz(abcdxyz))


