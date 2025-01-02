// Lesson 2 - Creating an Scheme and a Model

const mongoose = require('mongoose')


/* 1.- ¿QUÉ SON EL SCHEME Y EL MODEL?

SCHEME

    Cada scheme se asigna a una Collection
    En el scheme se definnen los campos/atributos, ditpos de datos, etc 




MODEL

    Usa el scheme para interactuar con la base de datos para realizar las operaciones del CRUD



*/

/* 2.1.- Creating an Scheme para los Documents "Person" de la Collection "People"
*/

// Implementing the scheme
const personSchema = new moongose.Schema
(
    {
        name:{type: String, required: true },
        id: {type: Number, required: true, unique: true},
        age: Number,
        favoriteFoods: [String],
    }
)

// Implementing the model

const Person = moongose.model('Person', personSchema)






/* 2.2- ¿Son los Mongoose Models un ORM?

    No exactamente, porque no es Relational pero si:

        - Mapea en POO los datos de MongoDB
        - Al igual que las Endidades de Doctrine mapean con POO clases las Tablas, Los Model de Mongoose mapean con POO class las collections
        - Tambien nos dan métodos para hacer CRUD de forma fácil sin queries 


*/


// Exporting the model
module.exports = Person;