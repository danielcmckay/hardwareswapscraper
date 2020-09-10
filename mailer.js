const nodemailer = require('nodemailer');

const sendMail = (address, body) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'hardwareswapscraper@gmail.com',
          pass: 'ThisIsMyPassword'
        }
      });
      
      const mailOptions = {
        from: 'hardwareswapscraper@gmail.com',
        to: address,
        subject: 'Sending Email using Node.js',
        html: body
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}



module.exports = sendMail;