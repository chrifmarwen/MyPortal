const data = require('../../data.json');

module.exports = (req, res) => {
  const modelId = parseInt(req.params.modelId);
  const model = data.models.find(m => m.id === modelId);

  res.status(200).json({ model });
};