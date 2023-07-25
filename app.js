require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 7000;

const schema = new mongoose.Schema({ name: String, sid: Number });
const Quizes = mongoose.model('quizes', schema);

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    
        app.get('/', async (req, res) => {
            try {
                await Quizes.create({
                    name: "Joao Pedro Beltrame",
                    sid: 300366969
                });
            } catch (e) {
                console.log(e.message);
            }

            let result = await Quizes.find().exec();

            res.json(result);
        })


        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        });
    } catch (err) {
        console.log(err.message);
    }
}

main();
