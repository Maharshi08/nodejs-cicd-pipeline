exports.getData = (req, res) => {
    res.json({ message: 'Here is your GET data 🎉' });
  };
  
  exports.postData = (req, res) => {
    const received = req.body;
    res.json({ message: 'POST received', data: received });
  };
  