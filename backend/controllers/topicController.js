const topics = [
    { id: 1, name: 'Topic One', description: 'Description for Topic One' },
    { id: 2, name: 'Topic Two', description: 'Description for Topic Two' }
  ];
  
  exports.getTopics = (req, res) => {
    res.json(topics);
  };
  