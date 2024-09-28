const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        mobile: { type: String, required: true },
        service: { type: String, required: true },
        uniquedate: { type: Date, required: true } // Change the field name to uniquedate
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
