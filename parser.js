const Mercury = require('@postlight/mercury-parser');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    res.status(400).json({ error: 'Missing "url" query parameter' });
    return;
  }

  try {
    const result = await Mercury.parse(url, {
      contentType: 'html',
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Parser error' });
  }
};
