const express = require("express")
var cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
//app.use(express.static('public'))

const data = [
    {
        _id: 0,
        title: "index 1"
    },
    {
        _id: 1,
        title: "index 2"
    },
    {
        _id: 2,
        title: "index 3"
    },
    {
        _id: 3,
        title: "index 4"
    },
    {
        _id: 4,
        title: "index 5"
    },
    {
        _id: 5,
        title: "index 6"
    },
    {
        _id: 6,
        title: "index 7"
    },
    {
        _id: 7,
        title: "index 8"
    },
    {
        _id: 8,
        title: "index 9"
    },
    {
        _id: 9,
        title: "index 10"
    },
    {
        _id: 10,
        title: "index 11"
    },
    {
        _id: 11,
        title: "index 12"
    },
    {
        _id: 12,
        title: "index 13"
    },
    {
        _id: 13,
        title: "index 14"
    },
    {
        _id: 14,
        title: "index 15"
    },
    {
        _id: 15,
        title: "index 16"
    },
    {
        _id: 16,
        title: "index 17"
    },
    {
        _id: 17,
        title: "index 18"
    },
    {
        _id: 18,
        title: "index 19"
    },
    {
        _id: 19,
        title: "index 20"
    }
]

app.get("/api", (req,res) => {
    const {page, size} = req.query
    // delay for response
    setTimeout(() => {
        res.send(data.slice((page - 1) * size, page * size))
    }, 1000 * 1);
})

app.listen(3001, function(){
    console.log("server is run on 3001 port")
})
