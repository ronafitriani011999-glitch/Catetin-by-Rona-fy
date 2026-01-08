document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formTransaksi");
  const tbody = document.getElementById("bodyTransaksi");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const jumlah = document.getElementById("jumlah").value.trim();
    const kategori = document.getElementById("kategori").value.trim();

    if (!nama || !jumlah || !kategori) {
      alert("Semua field harus diisi!");
      return;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${nama}</td>
      <td>${jumlah}</td>
      <td>${kategori}</td>
    `;

    tbody.appendChild(row);
    form.reset();
  });
});