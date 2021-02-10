import nodemailer from 'nodemailer'

export const Mailer = (email, firstName, lastName) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
        }
    })

    var mailOptions = {
        from: 'youremail@gmail.com',
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