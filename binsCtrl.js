module.exports = {
  getBins: async (req, res) => {
    try {
    const db = req.app.get('db');
    const { shelf } = req.params;

    const bins = await db.get_bins({shelf});
    res.status(200).send(bins)
    } catch(err) {
      res.sendStatus(500)
      console.error('getBins failed in binsCtrl.js:', err)
    }
  },

  getBinDetails: async (req, res) => {
    try {
      const db = req.app.get('db');
      const { shelf, bin } = req.params;
      const [binInfo] = await db.get_bin_details({shelf, bin})
      res.status(200).send(binInfo)
    } catch(err) {
      res.status(500).send(err)
      console.error('getBinDetails failed in binsCtrl.js:', err)
    }
  }
}