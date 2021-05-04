let sendEmail = (sender, receiver, subject, message) => {
    //research nodemailer for sending email from node.
    // https://nodemailer.com/about/
    // https://www.w3schools.com/nodejs/nodejs_email.asp
    //create a burner gmail account 
    //make sure you add the password to the environmental variables
    //similar to the DATABASE_URL and PHISH_DOT_NET_KEY (later section of the lab)

    const EMAIL = process.env.EMAIL;
    const PASSWORD = process.env.PASSWORD;

    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL, 
        pass: PASSWORD
      }
    });

    var mailOptions = {
        from: sender,
        to: receiver,
        subject: subject,
        text: message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
    
    // line 81 register.js

}

module.exports = { 
    sendEmail
}