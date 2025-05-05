/**
 * @fileoverview This file connects our graphql schema to the database.
 * 
 * @author Khalid Mohamed
 * @version 1.0.0
 * @license MIT
 */

export const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    }
});