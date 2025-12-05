
function changeRoom(roomNumber) {
    var mainImage = document.querySelector('.villa-image-box img');
    
    if (roomNumber === 1) {
        mainImage.src = 'assets/photos/livingroom1.jpeg';
        alert('Now viewing: Living Room');
    } else if (roomNumber === 2) {
        mainImage.src = 'assets/photos/bedroom.jpeg';
        alert('Now viewing: Master Bedroom');
    } else if (roomNumber === 3) {
        mainImage.src = 'assets/photos/terrace.jpeg';
        alert('Now viewing: Terrace View');
    }
}

function startTour() {
    alert('Welcome to Virtual Tour! Click on room images to explore.');
}
