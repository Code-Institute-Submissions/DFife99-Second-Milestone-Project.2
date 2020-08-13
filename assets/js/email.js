function sendMail(contactForm) {
    emailjs.send("gmail", "test", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "subject": contactForm.options.value,
            "summary": contactForm.summary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}