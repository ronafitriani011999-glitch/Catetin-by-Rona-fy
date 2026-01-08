document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (!form) {
    alert("Form login tidak ditemukan. Cek id='loginForm'");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Username & password wajib diisi!");
      return;
    }

    // ✅ SIMPAN STATUS LOGIN
    localStorage.setItem("login", "true");
    localStorage.setItem("username", username);

    alert("Login berhasil!");
    window.location.href = "index.html";
  });
});