// Pesan-pesan romantis untuk ditampilkan satu per satu
const messages = [
    "Aku punya sesuatu yang ingin ku sampaikan...",
    "Aku tidak tahu kapan tepatnya...",
    "Tapi hatiku selalu bergetar setiap melihatmu...",
    "Rasanya aku ingin selalu berada di dekatmu...",
    "Sebenarnya...",
    "Aku sayang kamu ❤️"
];

let messageIndex = 0;

// Ambil elemen musik
const music = document.getElementById("backgroundMusic");

// Tambahkan event listener untuk tombol pengungkapan
document.getElementById("revealButton").addEventListener("click", function() {
    const messageElement = document.getElementById("message");

    // Periksa jika masih ada pesan yang tersisa
    if (messageIndex < messages.length) {
        messageElement.textContent = messages[messageIndex];
        messageIndex++;
    } else {
        // Mengganti teks tombol jika semua pesan sudah ditampilkan
        this.textContent = "Aku sayang kamu juga!";
    }
});

// Memastikan musik diputar setelah interaksi pertama
window.addEventListener("click", function() {
    if (music.paused) {
        music.play();
    }
}, { once: true });
