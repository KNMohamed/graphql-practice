import { ContactSchema } from "./dbconnectors";

const Contact = mongoose.model('Contact', ContactSchema);

export const resolvers = {
    Query: {
        getContacts: () => {
            return Contact.find();
        }
    },
    Mutation: {
        createContact: (root, {input}) => {
            const newContact = new Contact({
                firstName: input.firstName,
                lastName: input.lastName,
                email: input.email,
                company: input.company
            });
            newContact.id = newContact._id;
            return new Promise((resolve, reject) => {
                newContact.save((err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(newContact);
                    }
                });
            });
        }
    }
}