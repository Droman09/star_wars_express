const express = require("express")
const app = express();
const PORT = 3000

app.use(express.urlencoded({extended : true}));
app.use(express.json());


const character = [
    {
        name: "Yoda",
        role: "Jedi Masters",
        forcePoints: 100000,
        age: 900,
        avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*",
        routeName: "yoda"
    },
    {
        name: "Luke Skywalker",
        role: "Jedi Masters",
        forcePoints: 1000,
        age: 40,
        avatar: "https://static.wikia.nocookie.net/star-wars-canon-extended/images/2/2c/Luke_Sky7.jpg/revision/latest/scale-to-width-down/340?cb=20180123070942",
        routeName: "lukeskywalker"
    },
    {
        name: "Princess Leia",
        role: "General Princess",
        forcePoints: 100,
        age: 40,
        avatar: "https://api.time.com/wp-content/uploads/2016/12/carrie-fisher-movies-2.jpg?w=600&quality=85",
        routeName: "princessleia"
    }
]

app.get("/", (req, res) => {
    res.send("MAY THE FORCE BE WITH YOU")
})


// api/characters  - show all character data.
app.get(`/api/characters`, (req, res) => {
    res.json(character);
})


// /api/character/:routeName

app.get(`/api/characters/:routeName`, (req, res)=>{
  const target = req.params.routeName;
  const char = character.find(characters => {
    return characters.routeName === target
})
res.json(char)

})

app.post(`/api/characters/add`, (req, res) =>{
   console.log(req.body)
    res.end()
})


app.listen(PORT, () => {
    console.log(`example app listening at http://localhost:${PORT}`)
})


