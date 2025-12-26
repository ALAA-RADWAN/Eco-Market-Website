"use strict";

/**
 *jQuery-based validation for registration form
 *email and phone formats
 *Submit/reset event handlers; focus management
 */
$(document).ready(() => {
  $("#email").focus();

  const showError = (selector, message) => {
    $(selector).next(".error").text(message);
  };
  const clearError = (selector) => {
    $(selector).next(".error").text("");
  };

  $("#register_form").on("submit", event => {
    let isValid = true;

    //Email validation
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const email = $("#email").val().trim();
    if (email === "" || !emailPattern.test(email)) {
      showError("#email", email === "" ? "Email is required." : "Must be a valid email address.");
      isValid = false;
    } else { clearError("#email"); }
    $("#email").val(email);

    // Password length
    const password = $("#password").val().trim();
    if (password.length < 6) {
      showError("#password", "Must be 6 or more characters.");
      isValid = false;
    } else { clearError("#password"); }
    $("#password").val(password);

    //Verify password
    const verify = $("#verify").val().trim();
    if (verify === "" || verify !== password) {
      showError("#verify", verify === "" ? "This field is required." : "Passwords must match.");
      isValid = false;
    } else { clearError("#verify"); }
    $("#verify").val(verify);

    //First name
    const firstName = $("#first_name").val().trim();
    if (firstName === "") { showError("#first_name", "First name is required."); isValid = false; }
    else { clearError("#first_name"); }
    $("#first_name").val(firstName);

    //Last name
    const lastName = $("#last_name").val().trim();
    if (lastName === "") { showError("#last_name", "Last name is required."); isValid = false; }
    else { clearError("#last_name"); }
    $("#last_name").val(lastName);

    //Phone format
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const phone = $("#phone").val().trim();
    if (phone === "" || !phonePattern.test(phone)) {
      showError("#phone", phone === "" ? "Phone number is required." : "Use 999-999-9999 format.");
      isValid = false;
    } else { clearError("#phone"); }
    $("#phone").val(phone);

    //Country select
    if ($("#country").val() === "") { showError("#country", "Please select a country."); isValid = false; }
    else { clearError("#country"); }

    //Comments textarea
    const comments = $("#comments").val().trim();
    clearError("#comments");   
    $("#comments").val(comments);



    //Prevent submit if invalid
    if (!isValid) { event.preventDefault(); }
  });

  //Reset button clears fields and errors
  $("#reset_form").on("click", () => {
    $("#register_form").trigger("reset");
    $(".error").text("*");
    $("#email").focus();
  });
});
