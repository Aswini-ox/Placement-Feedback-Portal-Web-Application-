document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("feedbackForm");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;
    const rating = document.getElementById("rating").value;

    if (!name || !email || !department || !rating) {
      alert("All required fields must be filled!");
      return;
    }

    // Simulate submission (like gov portal)
    setTimeout(() => {
      successMsg.style.display = "block";
      form.reset();
    }, 500);

  });

});