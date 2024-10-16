const users = [
    { id: 1, email: 'user1@example.com', name: 'User One' },
    { id: 2, email: 'user2@example.com', name: 'User Two' }
  ];
  
  exports.getUsers = (req, res) => {
    res.json(users);
  };