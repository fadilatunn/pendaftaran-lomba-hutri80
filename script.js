function handleSubmit(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const telepon = document.getElementById("telepon").value.trim();
    const lomba = document.getElementById("lomba").value;

    if (!nama || !email || !telepon || !lomba) {
        alert("Silakan lengkapi semua data.");
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Email tidak valid.");
        return false;
    }

    const phonePattern = /^[0-9]{10,13}$/;
    if (!phonePattern.test(telepon)) {
        alert("Nomor telepon harus 10-13 digit angka.");
        return false;
    }

    document.getElementById("modalMessage").innerText = `Terima kasih, ${nama}, telah mendaftar lomba ${lomba.toUpperCase()}!`;
    document.getElementById("successModal").style.display = "flex";
    return false;
}

function closeModal() {
    document.getElementById("successModal").style.display = "none";
    document.getElementById("formLomba").reset();
}

// Animasi scroll
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    faders.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});