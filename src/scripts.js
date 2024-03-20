document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookie-consent");
  const acceptCookiesButton = document.getElementById("accept-cookies");

  // Verifique se o usuário já deu consentimento
  if (localStorage.getItem("cookie-consent") !== "accepted") {
    cookieConsent.style.display = "block";
  }

  // Quando o botão de aceitar é clicado
  acceptCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookie-consent", "accepted");
    cookieConsent.style.display = "none";
  });
});
