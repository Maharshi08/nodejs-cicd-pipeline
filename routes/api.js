const express = require('express');
const router = express.Router();

let dataStore = []; // ✅ Keeps data while server is running

// GET route
router.get('/data', (req, res) => {
  console.log('📥 GET /api/data called');
  res.json({
    message: '✅ GET /api/data working!',
    data: dataStore
  });
});

// POST route
router.post('/data', (req, res) => {
  const newData = req.body;

  if (!newData || Object.keys(newData).length === 0) {
    return res.status(400).json({ error: 'No data provided' });
  }

  dataStore.push(newData);
  console.log('✅ Data stored:', dataStore);

  res.status(201).json({
    message: '✅ Data saved successfully!',
    data: newData
  });
});

module.exports = router;
