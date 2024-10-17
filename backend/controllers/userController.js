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
  