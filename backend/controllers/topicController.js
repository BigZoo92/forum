const topics = [
    { id: 1, name: 'Topic One', description: 'Description for Topic One' },
    { id: 2, name: 'Topic Two', description: 'Description for Topic Two' }
  ];
  
  exports.getTopics = (req, res) => {
    res.json(topics);
  };

  exports.getTopicsById = (req, res) => {
    const topicId = parseInt(req.params.topicId);
    const topic = topics.find(topic => topic.id === topicId);
    if (!topic) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.json(topics);
  };
  
  