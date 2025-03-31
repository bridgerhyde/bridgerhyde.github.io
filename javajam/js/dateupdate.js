document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("dateupdate");
    if (dateElement) {
      dateElement.innerHTML = "This page was last modified on: " + document.lastModified;
    }
  });