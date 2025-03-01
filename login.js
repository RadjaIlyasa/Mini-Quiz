document.getElementById("start-btn").addEventListener("click", () => {
    const playerName = document.getElementById("player-name").value.trim();

    if (playerName === "") {
        alert("Silakan masukkan nama Anda!");
        return;
    }

    localStorage.setItem("playerName", playerName); // Simpan nama pemain
    window.location.href = "game.html"; // Pindah ke halaman kuis
});
