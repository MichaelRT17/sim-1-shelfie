module.exports = {

    showProducts: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_products()
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send());
    },

    createProduct: (req, res, next) => {
        console.log(req.body)
        const dbInstance = req.app.get('db');
        const { product_image, product_name, product_price } = req.body;

        dbInstance.create_product([product_image, product_name, product_price])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },

    deleteProduct: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete_product([req.params.id])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },

    updateProduct: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { product_image, product_name, product_price } = req.body;

        dbInstance.edit_product([req.params.id, product_image, product_name, product_price])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    }
}