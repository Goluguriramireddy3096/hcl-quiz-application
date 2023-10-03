document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedback-form");

    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting via HTTP

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const feedback = document.getElementById("feedback").value;

        // Create an object to store the feedback data
        const feedbackData = {
            name: name,
            email: email,
            feedback: feedback
        };

        // You can send the feedbackData to your server or perform any other desired actions here
        // Example: Send feedbackData using fetch to a server endpoint
        fetch("/your-feedback-endpoint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(feedbackData)
        })
        .then(response => {
            if (response.status === 200) {
                alert("Feedback submitted successfully!");
                feedbackForm.reset(); // Clear the form
            } else {
                alert("Failed to submit feedback. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while submitting feedback. Please try again later.");
        });
    });
});
