var contacts = [
    {
        "firstname": "China",
        "lastname": "Srun",
        "age": 18,
        "likes": ["genshin", "primos"],
    },
    {
        "firstname": "Hour",
        "lastname": "Seak",
        "age": 189,
        "likes": ["Hot dog", "ice-cream"],
    },
    {
        "firstname": "Seiha",
        "lastname": "Vong",
        "age": 19,
        "likes": ["carrot", "cucumber"],
    },
    {
        "firstname": "Rith",
        "lastname": "Huot",
        "age": 20,
        "likes": ["oun", "ss"],
    },
]

function search(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (name  == contacts[i].firstname) {
            return contacts[i][prop] || "no property exists" // || this symbol check whether the property exist in the object or not
        }
    }
    return "no such name";
}
console.log(search("Seiha", "likes"));
