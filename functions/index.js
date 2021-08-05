const functions = require('firebase-functions');
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');

admin.initializeApp()


//google account credentials used to send email
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'yamoimeda@gmail.com',
        pass: 'Zakaykaya'
    }
});


exports.sendEmail = functions.firestore
    .document('koinonia-registros/{registroId}')
    .onCreate((snap, context) => {

        const mailOptions = {
            from: `Aposento alto Panama`,
            to: snap.data().correo,
            subject: 'contact form message',
            html: `<h1>Order Confirmation</h1>
            <img
                  className="ref"
                  src=${snap.data().url}
                  
                />
                                <p>
                                   <b>Email: </b>${snap.data().correo}<br>
                                </p>`
        };


        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
    });