const Email = require('../models/Email');
const { sendEmail } = require('../utils/amazon');

module.exports = class EmailService {
    static async create({ message }) {
        await sendEmail(
            'zina.a.mohamed@gmail.com',
            `Test Message ${message}`
        );

        const email = await Email.insert({ message });

        return email;
    }

    static async getEmails() {
        const email = await Email.getAll();

        await sendEmail(
            'zina.a.mohamed@gmail.com',
            `Test Message ${message}`
        );

       return email 

}
};