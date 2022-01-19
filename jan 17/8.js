const form=document.getElementById("form")
const input=document.getElementById("input")
const todosUL=document.getElementById("todos")

// const todo=[
//     {
//         text:"Abc",
//         completed:true
//     },
//     {
//         text:"def",
//         completed:false
//     }
// ]



form.addEventListener("submit",(e)=>{
      e.preventDefault()
      addTodo()
})

function addTodo(_todo){
    let todoText = input.value;
    
    
    if(todoText){
        const todoE1=document.createElement("li")

        // if(todo && todo.completed){
        //     todoE1.classList.add("completed")
        // }
         todoE1.innertext =todoText

        todoE1.addEventListener("click",()=>{
            todoE1.classList.toggle("completed")
        })

        todoE1.addEventListener("contextmenu",(e)=>{
            e.preventDefault()
            todoE1.remove()
        })
        todosUL.appendChild(todoE1)
        input.value=''
    }
}