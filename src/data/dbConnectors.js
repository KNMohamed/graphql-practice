/**
 * @fileoverview This file connects our graphql schema to the database.
 * 
 * @author Khalid Mohamed
 * @version 1.0.0
 * @license MIT
 */
import mongoose from 'mongoose';

//Mongo connection
mongo.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contacts', {
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