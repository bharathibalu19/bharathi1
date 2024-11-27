// Open Lightbox with the selected image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = imageSrc;
    lightbox.style.display = "flex";
  }
  
  // Close the Lightbox
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }
// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form from reloading the page
  
    // Show thank you message
    const thankYouMessage = document.getElementById("thankYouMessage");
    thankYouMessage.style.display = "block";
  
    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  }
// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
    