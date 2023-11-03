        // Function to show the success popup
        function showSuccessPopup() {
            const successPopup = document.querySelector('.js_success-popup');
            successPopup.classList.add('popup--visible');

            // Set a timeout to hide the success popup after 2 seconds
            setTimeout(function() {
                successPopup.classList.remove('popup--visible');
            }, 2000);
        }

        // Function to show the error popup
        function showErrorPopup() {
            const errorPopup = document.querySelector('.js_error-popup');
            errorPopup.classList.add('popup--visible');
        }

        // Function to close the error popup
        function closeErrorPopup() {
            const errorPopup = document.querySelector('.js_error-popup');
            errorPopup.classList.remove('popup--visible');
        }

        // Function to show the warning popup
        function showWarningPopup() {
            const warningPopup = document.querySelector('.js_warning-popup');
            warningPopup.classList.add('popup--visible');
        }

        // Function to close the warning popup
        function closeWarningPopup() {
            const warningPopup = document.querySelector('.js_warning-popup');
            warningPopup.classList.remove('popup--visible');
        }

      // Function to close the warning popup
      function closeWarningPopup() {
        const warningPopup = document.querySelector('.js_warning-popup');
        warningPopup.classList.remove('popup--visible');
    }