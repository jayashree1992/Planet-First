var nodemailer = require('nodemailer');

require('dotenv/config')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jayashreedpatel@gmail.com',
        pass: process.env.EmailPassword
    }
});

module.exports = {
    sendEmail : function(to, campaign_name, receipt_url){
        var mailOptions = {
            from: 'jayashreedpatel@gmail.com',
            to: to,
            subject: 'Donation complete',
            text: 'Thank you for the donation. You have successfully ' + campaign_name + ". \nHere is your receipt <a href='"+ receipt_url + "' >Receipt</a>",
            html: 'Thank you for the donation. You have successfully ' + campaign_name + ". \nHere is your receipt <a href='"+ receipt_url + "' >Receipt</a>" 
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
};