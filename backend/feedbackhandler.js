import nodemailer from 'nodemailer';
import Feedback from '../models/Feedback';  // Assuming you have a Feedback model

const handleFeedback = async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Save feedback to MongoDB
    const newFeedback = new Feedback({
      name,
      email,
      message,
    });
    await newFeedback.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Your Feedback',
      text: `Dear ${name},\n\nThank you for your feedback! We appreciate your time and effort.\n\nBest Regards,\nThe Team`,
    };

    await transporter.sendMail(mailOptions);

    // Respond back to the client
    res.status(200).json({ success: 'Feedback submitted successfully and confirmation email sent!' });
  } catch (error) {
    console.error('Error handling feedback:', error);
    res.status(500).json({ error: 'Error sending feedback. Please try again.' });
  }
};

export default handleFeedback;
