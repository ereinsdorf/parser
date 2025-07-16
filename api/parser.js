const Mercury = require('@postlight/mercury-parser');
module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'Missing URL' });

  try {
    const result = await Mercury.parse(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4)'
      }
    });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
