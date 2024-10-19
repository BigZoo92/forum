const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path'); 
const jwt = require('jsonwebtoken');
const { jwtToken } = require('../../constant');

const users = [
    { id: 1, email: 'user1@example.com', name: 'User One' },
    { id: 2, email: 'user2@example.com', name: 'User Two' }
  ];
  
  const messages = [
    { id: 1, forumId: 1, userId: 1, date: '2024-10-16', content: 'Message One Content' },
    { id: 2, forumId: 1, userId: 2, date: '2024-10-16', content: 'Message Two Content' },
    { id: 3, forumId: 2, userId: 1, date: '2024-10-17', content: 'Message Three Content' },
  ];
  
  exports.getUserByMessageId = (req, res) => {
    const messageId = parseInt(req.params.messageId);
  
    const message = messages.find(msg => msg.id === messageId);
    if (!message) {
      return res.status(404).json({ error: 'Message non trouvé' });
    }
  
    const user = users.find(user => user.id === message.userId);  
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  
    res.json(user);
  };

  exports.getUsersById = (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = users.find(user => user.id === userId);
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.json(users);
  };



const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, 
  auth: {
    user: process.env.MAIL,
    pass: process.env.MDP_SECRET,
  },
});


exports.sendInvitationEmail = async(user1, user2, topicLink) => {
  const htmlTemplatePath = path.resolve(__dirname, '../templates/mail/mail.html');
  const htmlTemplate = fs.readFileSync(htmlTemplatePath, 'utf8');
  
  const emailHTML = htmlTemplate
    .replace('{{user1}}', user1)
    .replace('{{user2}}', user2)
    .replace('{{topicLink}}', topicLink);
  
  await transporter.sendMail({
    from: process.env.MAIL,
    to: user2,
    subject: `${user1} has invited you to a topic`,
    html: emailHTML,
  });
}

module.exports = { sendInvitationEmail };

  
exports.sendInvite = async (req, res) => {
  const { user1, user2, topicLink } = req.body;

  try {
    await sendInvitationEmail(user1, user2, topicLink);
    res.status(200).json({ message: 'Invitation sent successfully' });
  } catch (error) {
    console.error('Error sending invitation email:', error);
    res.status(500).json({ error: 'Failed to send invitation email' });
  }
};