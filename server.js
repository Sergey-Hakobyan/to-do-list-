const express = require("express")
const cors = require("cors")

require("dotenv").config()

const app = express()


app.use(cors())
app.use(express.json())

const port = process.env.PORT

let tasks = [

]
let postId = 0

app.get("/tasks", (req, res) => {
    res.json(tasks)
    //- На беке res.json(tasks) — отправляет данные в JSON. 
    //- На фронте response.json() — читает JSON из ответа и преобразует его в JavaScript-данные.
})

app.post("/tasks", (req, res) => {
    const newTask = {
        id: postId++, 
        title: req.query.title
        
    }
    tasks.push(newTask)
    res.json(newTask)
})

app.delete("/tasks", (req, res) => {
    title = req.query.title
    for(let i = 0; i<tasks.length; i++){
        if(tasks[i].title === title){
            tasks.splice(i, 1)
            break
        }
    }
        res.json({ message: "Task deleted" });
})



app.listen(port, () => {
    console.log("port is working!")
})


//npm install cors express
//npm install dotenv