import { Contacts } from "./dbconnectors";

export const resolvers = {
    Query: {
        getContacts: () => {
            return Contacts.find();
        },
        getOneContact: async(root, {id}) => {
            try {
                return Contacts.findById(id);
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    Mutation: {
        createContact: async (root, {input}) => {
            const newContact = new Contacts({
                firstName: input.firstName,
                lastName: input.lastName,
                email: input.email,
                company: input.company
            });
            newContact.id = newContact._id;
            try {
                return await newContact.save();
            } catch (error) {
                throw new Error(error);
            }
        },
        updateContact: async (root, {input}) => {
            try {
                return await Contacts.findOneAndUpdate({ _id: input.id }, input, { new: true });
            } catch (error) {
                throw new Error(error);
            }
        },
        deleteContact: async (root, {id}) => {
            try {
                return await Contacts.findByIdAndDelete(id);
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}