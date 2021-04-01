require('dotenv').config();
const AWS = require('aws-sdk');
const SES = require('aws-sdk/clients/ses');

const sendEmail = (to, message) => {
    const params = {
            Destination: {
                ToAddresses: [`${to}`]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: "<p>this is test body.</p>"
                    },
                    Text: {
                        Charset: "UTF-8",
                        Data: `Hey, this is test.${message}`
                      },
                    
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: "test"
                 }
            },
            Source: 'zina.a.mohamed@gmail.com' /* required */,
            ReplyToAddresses: [
                'zina.a.mohamed@gmail.com',
                /* more items */
            ],
        };

        const SESconfig = {
            apiVersion: '2010-12-01',
            accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
            region: 'us-east-2'
        };
    
        const response = new SES(SESconfig).sendEmail(params).promise();

};

module.exports = { 
    sendEmail,
 };