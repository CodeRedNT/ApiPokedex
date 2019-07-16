const express = require('express')
const app = express()
const port = 3001

var  pokemons = [
    {
        id: 1,
        name: "Bulbasaur",
        type: "Planta",
        urlImage: "https://pokeres.bastionbot.org/images/pokemon/1.png",
        description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."
    },
    {
        id: 2,
        name: "Ivysaur",
        type: "Planta",
        urlImage: "https://pokeres.bastionbot.org/images/pokemon/2.png",
        description: "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon."
    },
    {
        id: 3,
        name: "Venusaur",
        type: "Planta",
        urlImage: "https://pokeres.bastionbot.org/images/pokemon/3.png",
        description: "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people."
    },
    {
        id: 4,
        name: "Charmander",
        type: "Fogo",
        urlImage: "https://pokeres.bastionbot.org/images/pokemon/4.png",
        description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely."
    }
]

app.get('/pokemons', function (req, res) {
    var filtered = pokemons;
    var nameFilter = "";

    if(req.query.name) {
        nameFilter = req.query.name.toLocaleLowerCase();
        filtered = pokemons.filter(m => m.name.toLocaleLowerCase().indexOf(nameFilter) > -1)
    }

    res.json(
        {
            pokemons : filtered   
        }
    )
})

app.get('/pokemons/:id', (req, res) => {
    var movie = pokemons.find(m => m.id == req.params.id)
    res.json({pokemons : movie})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))