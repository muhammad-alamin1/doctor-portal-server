const Contact = require("../model/Contact");

const contactPostController = async (req, res) => {
    const { email, subject, message } = req.body;

    try {
        const newContact = new Contact({
            email,
            subject,
            message,
        });

        await newContact.save();

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    contactPostController
}