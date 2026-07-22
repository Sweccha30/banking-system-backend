const accountModel = require("../models/account.model");

/**
 * Create a new account
 */
async function createAccountController(req, res) {
    try {
        const user = req.user;

        const account = await accountModel.create({
            user: user._id
        });

        res.status(201).json({
            success: true,
            account
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports = {
    createAccountController
};