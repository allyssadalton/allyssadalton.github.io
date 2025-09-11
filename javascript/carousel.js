document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".strip img");

  images.forEach(img => {
    // Create a label for each image
    const label = document.createElement("div");
    label.className = "hover-label";
    label.innerText = img.getAttribute("data-label");
    img.parentNode.appendChild(label);

    // Show label on hover
    img.addEventListener("mouseover", function () {
      label.style.display = "block";
    });

    // Hide label when not hovering
    img.addEventListener("mouseout", function () {
      label.style.display = "none";
    });
  });
});
