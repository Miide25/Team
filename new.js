// Function to generate QR code
function generateQRCode() {
  const qrCodeContainer = document.getElementById('qrCode');
  const formURL = window.location.href; // Use current page URL for QR code
  
  // Create QR code image from form link
  const qrCodeImage = document.createElement('img');
  qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(formURL)}&size=200x200`;
  qrCodeImage.alt = 'QR Code for Form';

  // Clear any existing QR codes and add new one
  qrCodeContainer.innerHTML = '';
  qrCodeContainer.appendChild(qrCodeImage);
}

// Generate QR code on page load
window.onload = generateQRCode;

// Handle form submission
document.getElementById('userForm').onsubmit = function(event) {
  event.preventDefault();
  alert('Form submitted! Thank you for your input.');
  document.getElementById('userForm').reset(); // Clear form fields
};


