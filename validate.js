function showError(fieldId, message) {
  var errorEl = document.getElementById(fieldId + "-error");
  var inputEl = document.getElementById(fieldId);
  errorEl.textContent = message;
  errorEl.style.display = "block";
  inputEl.style.borderColor = "#E24B4A";
}

function clearError(fieldId) {
  var errorEl = document.getElementById(fieldId + "-error");
  var inputEl = document.getElementById(fieldId);
  errorEl.textContent = "";
  errorEl.style.display = "none";
  inputEl.style.borderColor = "";
}

function showSuccess(fieldId) {
  var inputEl = document.getElementById(fieldId);
  inputEl.style.borderColor = "#639922";
}

function validateForm() {
  var isValid = true;

  // 1. Full Name cannot be empty
  var fullName = document.getElementById("fullname").value.trim();
  if (fullName === "") {
    showError("fullname", "Full name cannot be empty.");
    isValid = false;
  } else {
    clearError("fullname");
    showSuccess("fullname");
  }

  // 2. Email must follow standard email format
  var email = document.getElementById("email").value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    showError("email", "Email cannot be empty.");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    showError("email", "Please enter a valid email address (e.g. user@example.com).");
    isValid = false;
  } else {
    clearError("email");
    showSuccess("email");
  }

  // 3. Password must contain minimum 4 characters
  var password = document.getElementById("password").value;
  if (password === "") {
    showError("password", "Password cannot be empty.");
    isValid = false;
  } else if (password.length < 4) {
    showError("password", "Password must be at least 4 characters long.");
    isValid = false;
  } else {
    clearError("password");
    showSuccess("password");
  }

  // 4. Phone is optional, but if entered must be exactly 10 digits
  var phone = document.getElementById("phone").value.trim();
  if (phone !== "") {
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      showError("phone", "Phone number must be exactly 10 digits (numbers only).");
      isValid = false;
    } else {
      clearError("phone");
      showSuccess("phone");
    }
  } else {
    clearError("phone");
  }

  if (isValid) {
    document.getElementById("success-msg").style.display = "block";
    document.getElementById("form-fields").style.display = "none";
  } else {
    document.getElementById("success-msg").style.display = "none";
  }

  return false; // prevent actual form submission
}

function resetForm() {
  var fields = ["fullname", "email", "password", "phone"];
  fields.forEach(function(id) {
    document.getElementById(id).value = "";
    clearError(id);
    document.getElementById(id).style.borderColor = "";
  });
  document.getElementById("success-msg").style.display = "none";
  document.getElementById("form-fields").style.display = "block";
}