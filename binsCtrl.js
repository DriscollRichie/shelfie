module.exports = {
  getBins: async (req, res) => {
    try {
    const db = req.app.get('db');
    const { shelf } = req.params;

    const bins = await db.get_bins({shelf});
    res.status(200).send(bins)
    } catch(err) {
      console.error('getBins failed in binsCtrl.js:', err)
    }
  }
}