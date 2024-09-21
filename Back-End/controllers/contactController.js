const nodemailer = require('nodemailer');
const Contact = require('../models/contactModel');

const contactController = {
    async createContact(req, res, next) {
        try {
            const { name, email, mobile, message } = req.body;

            // Save the contact message in the database
            const contact = await Contact.create({
                name,
                email,
                mobile,
                message,
            });

            // Send email notification to admin (your email)
            await sendEmailNotification(name, email, mobile, message);

            // Respond with success
            res.status(201).json({
                message: 'Contact form submitted successfully!',
                contact,
            });
        } catch (error) {
            console.error('Error while submitting contact form:', error);
            res.status(500).json({
                error: 'Internal Server Error',
                details: error.message,
            });
        }
    },

    // Other functions like index, deleteContact...
    async index(req, res, next) {
        try {
            const contacts = await Contact.find();
            res.status(200).json(contacts);
        } catch (error) {
            res.status(500).json({ error: 'Server error', serverError: error });
        }
    },

    async deleteContact(req, res, next) {
        try {
            const { id } = req.params;
            const contact = await Contact.findByIdAndDelete(id);
            if (!contact) {
                return res.status(404).json({ error: 'Contact not found' });
            }
            res.status(200).json({ message: 'Contact deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Server error', serverError: error });
        }
    },
};

// Email sending function using Nodemailer
async function sendEmailNotification(name, email, mobile, message) {
    // Create a transporter using SMTP service (Gmail is used here)
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'anshul9145946510@gmail.com',
            pass: 'ydnr intr rbsz dbhd', // Use App-specific password if using Gmail
        },
    });

    // Email options
    const mailOptions = {
        from: 'anshul9145946510@gmail.com', // Sender's email address
        to: 'anshulmenaria@gmail.com', // Admin email address to receive messages
        subject: `New Contact Form Submission from ${name}`, // Subject of the email
        text: `
            You have a new contact form submission.

            Name: ${name}
            Email: ${email}
            Mobile: ${mobile}
            Message: ${message}
        `,
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error while sending email:', error);
    }
}

module.exports = contactController;
