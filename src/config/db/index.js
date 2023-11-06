const mongoose = require('mongoose')

function connect() {
    const uri = "mongodb+srv://Quangbinh:bAYzohS4WtsNfi6I@cluster0.kaluzja.mongodb.net/database1?retryWrites=true&w=majority";

    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    mongoose.connect(uri, connectionParams)
        .then(() => {
            console.log('Connected to the database ');
        })
        .catch((err) => {
            console.error(`Error connecting to the database. n${err}`);
        });
}

module.exports = { connect };