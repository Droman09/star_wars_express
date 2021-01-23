const express = require("express")
const app = express();
const port = 3000

app.get("/", (req,res)=>{
    res.send("MAY THE FORCE BE WITH YOU")
})


app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
})