function emailSend() {
    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var appurl = document.getElementById('URL').value;
    var sorCodurl = document.getElementById('URL1').value; // Corrected variable name

    var message = document.getElementById('message').value;

    var messageBody = "Name: " + userName +
        "<br/> Phone: " + phone +
        "<br/> Email: " + email +
        "<br/> App_URL: " + appurl +
        "<br/> SourceCode_URL: " + sorCodurl + // Corrected variable name

        "<br/> Message: " + message;

    Email.send({
        SecureToken: "f1fd93e4-78df-4474-8db5-80daf880c520",
        To: "mail.me.akashdip2001@gmail.com",
        From: "mail.me.akashdip2001@gmail.com",
        Subject: "Mail for Public App - Google Play Console", // Corrected subject line
        Body: messageBody,
        ContentType: "text/html; charset=utf-8" // Ensure HTML content type
    }).then(
        message => {
            if (message === 'OK') {
                swal("Success", "Email sent!", "success");
            } else {
                swal("Error", "Email not sent. Please try again later.", "error");
            }
        }
    );
}
