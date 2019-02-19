const { user } = require('../models')

module.exports = {
    async register(req, res) {
        try {
            const user = await user.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    }
}