const nodemailer = require('nodemailer');
const Contact = require('../models/contactModel');
const Admin = require('../models/adminLogin'); // Import Admin model to retrieve admin emails

const contactController = {
    async createContact(req, res, next) {
        try {
            const { name, email, mobile, service, date } = req.body; // Extract date from request body

            // Save the contact form in the database
            const contact = await Contact.create({
                name,
                email,
                mobile,
                service,
                uniquedate: date, // Save the date received from the frontend
            });

            // Retrieve all admin emails from the database
            const admins = await Admin.find();
            const adminEmails = admins.map(admin => admin.email);

            // Send email notification to all admins
            await sendEmailNotification(name, email, mobile, service, date, adminEmails); // Pass the date to the email function

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

async function sendEmailNotification(name, email, mobile, service, date, adminEmails) {
    // Create a transporter using SMTP service (Gmail is used here)
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'anshul9145946510@gmail.com',
            pass: 'ydnr intr rbsz dbhd', // Use App-specific password if using Gmail
        },
    });

    // Format the date
    const formattedDate = new Date(date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // Prepare the email content
    const mailOptions = {
        from: 'anshul9145946510@gmail.com', // Sender's email address
        to: adminEmails, // Send email to all admin emails
        subject: `New Query Received: ${name}`, // Email subject
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #5c5c5c;">New Query Received</h2>
            <p>You have received a new query from your website. Here are the details:</p>
            
            <table style="width: 100%; border-collapse: collapse;">
                <tr style="background-color: #f9f9f9;">
                    <td style="padding: 8px; font-weight: bold;">Name:</td>
                    <td style="padding: 8px;">${name}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; font-weight: bold;">Email:</td>
                    <td style="padding: 8px;">${email}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td style="padding: 8px; font-weight: bold;">Mobile:</td>
                    <td style="padding: 8px;">${mobile}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; font-weight: bold;">Service Interested In:</td>
                    <td style="padding: 8px;">${service}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                    <td style="padding: 8px; font-weight: bold;">Selected Date:</td>
                    <td style="padding: 8px;">${formattedDate}</td> <!-- Use formatted date -->
                </tr>
            </table>
            
            <br/>
            <p style="font-size: 14px; color: #666;">Please contact the client for further discussions.</p>
            
            <div style="border-top: 1px solid #ddd; padding-top: 10px; font-size: 12px; color: #999;">
                <p>This is an automated email from your website. Please do not reply to this email.</p>
            </div>
        </div>
        `,
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to admins!');
    } catch (error) {
        console.error('Error while sending email:', error);
    }
}

module.exports = contactController;
