const first_name = document.getElementById("first-name")
const last_name = document.getElementById("last-name")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const message = document.getElementById("message")

document.getElementById('email-form').addEventListener('submit',(e) => {
    e.preventDefault()
    const templateParams = {
        email: email.value,
        subject: subject.value,
        message: message.value
    };
    console.log(email.value)
    emailjs.init("user_NCQCoB88joZXm1YUfFDHr")
    
     
    emailjs.send('service_zgycd4x', 'template_w2zmuzq', templateParams)
        .then(function(response) {
           alert("Email Sent Successfully")
           email.value = ""
           subject.value = ""
           message.value = ""
           first_name.value = ""
           last_name.value = ""
        }, function(error) {
           console.log("Email Not sent");
        });
})