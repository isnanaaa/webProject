document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:5000/api/anggota")
      .then((response) => response.json())
      .then((data) => {
        let tableBody = document.getElementById("anggotaTableBody");
        tableBody.innerHTML = ""; // Kosongkan tabel sebelum diisi ulang
  
        data.forEach((anggota) => {
          let row = document.createElement("tr");
          row.setAttribute("id", `anggota-${anggota._id}`);
          row.innerHTML =`
            <td>${anggota.nama}</td>
            <td>${anggota.email}</td>
            <td>${anggota.konsulat}</td>
            <td>
              <button onclick="hapusAnggota('${anggota._id}')">Hapus</button>
            </td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error:", error));
  });
  
  // Fungsi untuk menambah anggota baru
  document.getElementById("formTambahAnggota").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const konsulat = document.getElementById("konsulat").value;
  
    fetch("http://localhost:5000/api/anggota", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nama, email, konsulat }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Berhasil bergabung!");
        location.reload(); // Refresh halaman untuk update data
      })
      .catch((error) => console.error("Error:", error));
  });
  
  // Fungsi untuk menghapus anggota
  async function hapusAnggota(id) {
    try {
      const response = await fetch(`http://localhost:5000/api/anggota/${id}`, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error(`Gagal menghapus anggota: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(result.message); // 🔹 Debug: Tampilkan pesan dari server
  
      // 🔹 Hapus dari tampilan tanpa reload halaman
      document.getElementById(`anggota-${id}`).remove();
    } catch (error) {
      console.error("Error saat menghapus anggota:", error);
    }
  }

//   // Cek apakah user sudah login
// fetch('/profile')
// .then(response => response.json())
// .then(data => {
//   if (!data.loggedIn) {
//     // Kalau belum login, arahkan ke halaman login
//     window.location.href = "/login.html";
//   }
// })
// .catch(error => {
//   console.error("Error checking login status:", error);
//   window.location.href = "/login.html"; // Kalau error, tetap redirect ke login
// });

  

  
  
  