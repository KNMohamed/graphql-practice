/**
 * @fileoverview This file connects our graphql schema to the database.
 * 
 * @author Khalid Mohamed
 * @version 1.0.0
 * @license MIT
 */
import mongoose from 'mongoose';

//Mongo connection
mongoose.Promise = global.Promise;
const uri = "mongodb+srv://Cluster58621:y96ZD40CSG1jBFJb@cluster58621.nxoiayn.mongodb.net/contacts";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String
    },
    company: {
        type: String
    }
});

const Contacts = mongoose.model('contacts', contactSchema);

export {Contacts};