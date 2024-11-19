// Copy Email and Show Toast Notification
document.getElementById('copyEmail').addEventListener('click', () => {
    const email = "contact@tholumuzi.co.za";
    navigator.clipboard.writeText(email).then(() => {
        showToast("Email copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy email:", err);
    });
});

// Toast Notification Function
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000); // Hide after 3 seconds
  }
