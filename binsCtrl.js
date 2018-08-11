module.exports = {
  getBins: async (req, res) => {
    try {
      const db = req.app.get('db');
      const { shelf } = req.params;

      const bins = await db.get_bins({ shelf });
      res.status(200).send(bins)
    } catch (err) {
      res.sendStatus(500)
      console.error('getBins failed in binsCtrl.js:', err)
    }
  },

  getBinDetails: async (req, res) => {
    try {
      const db = req.app.get('db');
      const { shelf, bin } = req.params;
      const [binInfo] = await db.get_bin_details({ shelf, bin })
      res.status(200).send(binInfo)
    } catch (err) {
      res.status(500).send(err)
      console.error('getBinDetails failed in binsCtrl.js:', err)
    }
  },

  editProductDetails: async (req, res) => {
    try {
      const db = req.app.get('db')
      const { product_id } = req.params
      const { product_name, product_price, product_image } = req.body
      const [editedProduct] = await db.edit_bin_details({ product_name, product_price, product_image, product_id })
      res.status(200).send(editedProduct)
    } catch (err) {
      res.status(500).send(console.error('editProductDetails failed in binsCtrl.js:', err))
    }
  },

  addProduct: async (req, res) => {
    try {
      const db = req.app.get('db')
      const { shelf, bin } = req.params
      const { product_name, product_price, product_image } = req.body

      const [newProduct] = await db.add_product({ product_name, product_price, product_image, shelf, bin })
      res.status(200).send(newProduct)
    } catch (err) {
      res.sendStatus(500)
      console.error('addProduct function failed in binsCtrl.js:', err)
    }
  }
}