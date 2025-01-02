// Lesson 2 - Creating an Scheme and a Model

const mongoose = require('mongoose')


/* 1.- ¿QUÉ SON EL SCHEME Y EL MODEL?

SCHEME

    Cada scheme se asigna a una Collection
    En el scheme se definnen los campos/atributos, ditpos de datos, etc 




MODEL

    Usa el scheme para interactuar con la base de datos para realizar las operaciones del CRUD



*/

/* 2.- Creating an Scheme para los Documents "Person" de la Collection "People"
*/

// Defining the scheme
const personSchema = new moongose.Schema
(
    {
        name:{type: String, required: true },
        id: {type: Number, required: true, unique: true},
        age: Number,
        favoriteFoods: [String],
    }
)

// Defining the model

const Person = moongose.model('Person', personSchema)



module.exports = Person;