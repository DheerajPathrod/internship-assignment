document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("formContainer").style.bottom = "0";
  }, 15000);
  document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("formContainer").style.bottom = "-100%";
  });
});
