import nodemailer from 'nodemailer';

const sendMails = (req, res) => {
    const { email } = req.body;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'thandv03@gmail.com',
            pass: 'than2003a'
        }
    });

    var mailOptions = {
        from: 'thandv03@gmail.com',
        to: `${email}`,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
export default sendMails;