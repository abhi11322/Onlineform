$(document).ready(function() {
    $("#registrationForm").on("submit", function(event) {
        let isValid = true;
        
        // Custom validation example
        if ($("#name").val().trim() === "") {
            alert("Name is required");
            isValid = false;
        }
        
        if (!isValid) {
            event.preventDefault();
        }
    });
});
