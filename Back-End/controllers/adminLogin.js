const bcrypt = require("bcrypt");
const Admin = require("../models/adminLogin");
const nodemailer = require("nodemailer");

const adminLogin = {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }

      const admin = await Admin.findOne({ email });

      if (!admin) {
        return res.status(401).json({ error: "Invalid Email" });
      }

      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid Password" });
      }

      // Respond with token and admin details, including the ID
      return res.status(200).json({
        response: "Login successful",
        token: "your_generated_jwt_token_here", // Replace with your token generation logic
        admin: {
          id: admin._id,
          email: admin.email,
        },
      });
    } catch (error) {
      console.error('Server error:', error);
      return res.status(500).json({ error: "Server error", serverError: error.message });
    }
  },

  async register(req, res) {
    try {
      const { email, password } = req.body;

      const hashPassword = await bcrypt.hash(password, 10);

      const admin = await Admin.create({
        email,
        password: hashPassword,
      });

      res.status(201).json(admin);
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ error: "Server error", serverError: error.message });
    }
  },

  async updateDetails(req, res) {
    try {
      const { id } = req.params;
      const { email, password } = req.body;

      console.log("Updating admin:", { id, email, password }); // Debugging log

      const admin = await Admin.findById(id);
      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }

      if (email) {
        admin.email = email;
      }

      if (password) {
        admin.password = await bcrypt.hash(password, 10);
      }

      await admin.save();

      await sendUpdateNotificationEmail(admin.email);

      res.status(200).json({ message: "Admin details updated successfully", admin });
    } catch (error) {
      console.error("Error updating admin details:", error);
      res.status(500).json({ error: "Server error", serverError: error.message });
    }
  },

  async getAdmin(req, res) {
    try {
      const { id } = req.params;

      const admin = await Admin.findById(id).select('-password');

      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }

      res.status(200).json(admin);
    } catch (error) {
      console.error("Error retrieving admin details:", error);
      res.status(500).json({ error: "Server error", serverError: error.message });
    }
  },
};

// Function to send email notification to admin
async function sendUpdateNotificationEmail(adminEmail) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: 'nirajsalvi@reliableeventsudaipur.com',
      pass: 'Niraj2008@', // Use your email password or app-specific password
    },
  });

  const mailOptions = {
    from: "nirajsalvi@reliableeventsudaipur.com",
    to: adminEmail,
    subject: "Your Admin Account Details Were Updated",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #5c5c5c;">Admin Details Updated</h2>
          <p>Your admin account details (email or password) were recently updated. If you did not perform this action, please contact support immediately.</p>
          
          <br/>
          <p style="font-size: 14px; color: #666;">This is an automated email from your website.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Update notification email sent successfully!");
  } catch (error) {
    console.error("Error while sending update notification email:", error);
  }
}

module.exports = adminLogin;
