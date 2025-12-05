// Function 1: Search Properties
function searchProperty() {
    var searchInput = document.querySelector('.img_sec21');
    var searchText = searchInput.value;
    
    if (searchText === '') {
        alert('Please enter a location to search');
    } else {
        alert('Searching for properties in: ' + searchText);
    }
}

// Function 2: Show Property Details
function showDetails(propertyName, price) {
    alert('Property: ' + propertyName + '\nPrice: ' + price + '\n\nContact us for more details!');
}
