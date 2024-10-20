const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path'); 
const { getUserByUsername } = require('../utils/searchUser');


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

  exports.getUsersById = async (req, res) => {
    const userId = req.params.userId;
  
    const url = `https://directus-ucmn.onrender.com/users?filter[id][_eq]=${userId}`;
  
    try {
      const response = await fetch(url);      
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
      }
  
      const data = await response.json();
  
      if (data && data.data && data.data.length > 0) {
        return res.json(data.data[0]); 
      } else {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
  
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur :', error);
      res.status(500).json({ error: 'Erreur serveur lors de la récupération de l\'utilisateur' });
    }
  };



const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, 
  auth: {
    user:"moodframe.pro@gmail.com",
    pass: "ndil hpdz pdcv jnok",
  },
});




const sendInvitationEmail = async(user1, user2, topicLink) => {
  const htmlTemplatePath = path.resolve(__dirname, '../templates/mail.html');
  const htmlTemplate = fs.readFileSync(htmlTemplatePath, 'utf8');

  const sender = await getUserByUsername(user1)
  const usernameSender = sender.username
  const received = await getUserByUsername(user2)
  const usernameReceived = received.username
  
  const emailHTML = htmlTemplate
    .replace('{{user1}}', usernameSender)
    .replace('{{user2}}', usernameReceived)
    .replace('{{topicLink}}', topicLink);
  
  await transporter.sendMail({
    from:"moodframe.pro@gmail.com",
    to: 'givernaudenzo@gmail.com',
    subject: `${user1} has invited you to a topic`,
    html: emailHTML,
  });
}

  
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