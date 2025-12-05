// Function 1: Validate Form
function validateForm() {
    var name = document.getElementById('text').value;
    var phone = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    
    if (name === '') {
        alert('Please enter your name');
    } else if (phone === '') {
        alert('Please enter your phone number');
    } else if (email === '') {
        alert('Please enter your email');
    } else {
        alert('Thank you ' + name + '! We will contact you soon.');
    }
}

function showBudgetInfo() {
    var budget = document.getElementById('option2').value;
    alert('Selected Budget: ' + budget);
}

function countAmenities() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var count = 0;
    
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            count = count + 1;
        }
    }
    
    alert('You selected ' + count + ' amenities');
}
