const messages = [
    { id: 1, forumId: 1, userId: 1, date: '2024-10-16', content: 'Message One Content' },
    { id: 2, forumId: 1, userId: 2, date: '2024-10-16', content: 'Message Two Content' },
    { id: 3, forumId: 2, userId: 1, date: '2024-10-17', content: 'Message Three Content' },
  ];
  
  const users = [
    { id: 1, email: 'user1@example.com', name: 'User One' },
    { id: 2, email: 'user2@example.com', name: 'User Two' }
  ];
  
  exports.getMessagesByForum = (req, res) => {
    const forumId = parseInt(req.params.forumId);
  
    // Filtrer les messages par forumId
    const forumMessages = messages
      .filter(message => message.forumId === forumId)
      .map(message => {
        // Ajouter les informations utilisateur au message
        const user = users.find(user => user.id === message.userId);
        return { ...message, user };
      });
  
    res.json(forumMessages);
  };
  