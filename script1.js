// Get all product items
const productItems = document.querySelectorAll('.product-item');

// Get the modal
const modal = document.getElementById('enquiryModal');

// Get the <span> element that closes the modal
const closeModal = document.querySelector('.close');

// Add click event to each product item to open the modal
productItems.forEach(item => {
    item.addEventListener('click', function() {
        // Ensure modal is displayed
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Disable background scroll when modal is open
    });
});

// When the user clicks on <span> (x), close the modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable background scroll when modal is closed
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable background scroll when modal is closed
    }
});
