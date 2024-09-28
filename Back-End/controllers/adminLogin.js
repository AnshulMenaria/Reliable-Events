const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const Admin = require("../models/adminLogin");

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

      return res.status(200).json({ response: "Login successful" });
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
      const { id } = req.params; // Get admin ID from request params
      const { email, password } = req.body; // Get new email and password from request body

      // Find the admin by ID
      const admin = await Admin.findById(id);

      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }

      // Update email if provided
      if (email) {
        admin.email = email;
      }

      // Update password if provided (and hash it)
      if (password) {
        admin.password = await bcrypt.hash(password, 10);
      }

      // Save the updated admin details
      await admin.save();

      // Send notification email
      await sendUpdateNotificationEmail(admin.email);

      res.status(200).json({ message: "Admin details updated successfully", admin });
    } catch (error) {
      console.error("Error updating admin details:", error);
      res.status(500).json({ error: "Server error", serverError: error.message });
    }
  },

  async requestPasswordReset(req, res) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }

      const admin = await Admin.findOne({ email });

      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }

      // Generate OTP
      const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
      admin.otp = otp; // Save OTP to admin object
      await admin.save();

      // Send OTP via email
      await sendOtpEmail(email, otp);

      res.status(200).json({ message: "OTP sent to your email" });
    } catch (error) {
      console.error("Error requesting password reset:", error);
      res.status(500).json({ error: "Server error", serverError: error.message });
    }
  },

  async verifyOtp(req, res) {
    try {
      const { email, otp } = req.body;

      const admin = await Admin.findOne({ email });

      if (!admin || admin.otp !== otp) {
        return res.status(400).json({ error: "Invalid OTP" });
      }

      res.status(200).json({ message: "OTP verified, you can now reset your password" });
    } catch (error) {
      console.error("Error verifying OTP:", error);
      res.status(500).json({ error: "Server error", serverError: error.message });
    }
  },

  async resetPassword(req, res) {
    try {
      const { email, newPassword } = req.body;

      const admin = await Admin.findOne({ email });

      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }

      // Hash new password and update
      admin.password = await bcrypt.hash(newPassword, 10);
      admin.otp = undefined; // Clear OTP after successful password reset
      await admin.save();

      res.status(200).json({ message: "Password reset successful" });
    } catch (error) {
      console.error("Error resetting password:", error);
      res.status(500).json({ error: "Server error", serverError: error.message });
    }
  },
};

// Function to send OTP email
async function sendOtpEmail(adminEmail, otp) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: 'anshul9145946510@gmail.com',
      pass: 'ydnr intr rbsz dbhd',
    },
  });

  const mailOptions = {
    from: "anshul9145946510@gmail.com", // Sender's email address
    to: adminEmail, // Admin email address to receive notifications
    subject: "Password Reset OTP",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #5c5c5c;">Password Reset OTP</h2>
          <p>Your OTP for password reset is: <strong>${otp}</strong></p>
          <p>If you did not request this, please ignore this email.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("OTP sent successfully!");
  } catch (error) {
    console.error("Error while sending OTP:", error);
  }
}

// Function to send update notification email
async function sendUpdateNotificationEmail(adminEmail) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: 'anshul9145946510@gmail.com',
      pass: 'ydnr intr rbsz dbhd',
    },
  });

  const mailOptions = {
    from: "anshul9145946510@gmail.com",
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
