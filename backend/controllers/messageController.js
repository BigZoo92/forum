const messages = [
    { id: 1, date: '2024-10-16', content: 'Message One Content' },
    { id: 2, date: '2024-10-16', content: 'Message Two Content' }
  ];
  
  exports.getMessages = (req, res) => {
    res.json(messages);
  };
  