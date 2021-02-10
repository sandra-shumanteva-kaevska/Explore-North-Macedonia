import nodemailer from 'nodemailer'

console.log(process.env.SMTPuserName, process.env.SMTPpassword)

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTPuserName,
        pass: process.env.SMTPpassword
    }
})

export const Mailer = (email, firstName, lastName) => {


    var mailOptions = {
        to: email,
        subject: 'Sending Order confirmation',
        text: `Thank you ${firstName} ${lastName} for your order. You have successfully ordered from Explore North Macedonia`
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}