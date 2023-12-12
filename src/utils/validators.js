// validators.js (Utility file for data validation)

const validators = {
    validateEmail(email) {
      // Regular expression to validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  
    validatePassword(password) {
      // Example password validation (replace with your specific requirements)
      return password.length >= 8;
    },
  
    // Add other validation functions as needed
  };
  
  export default validators;
  