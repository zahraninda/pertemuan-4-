function hitung(operator) {
    let rawAngka1 = document.getElementById("angka1").value.replace(/\./g, '').replace(',', '.');
    let rawAngka2 = document.getElementById("angka2").value.replace(/\./g, '').replace(',', '.');

    let angka1 = parseFloat(rawAngka1);
    let angka2 = parseFloat(rawAngka2);
    let hasilSpan = document.getElementById("hasil");

    if (isNaN(angka1) || isNaN(angka2)) {
        hasilSpan.textContent = "Masukkan kedua angka terlebih dahulu!";
        hasilSpan.style.color = "#dc2626";
        return;
    }

    let hasil = 0;
    hasilSpan.style.color = "#0f172a";

    switch (operator) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            if (angka2 === 0) {
                hasilSpan.textContent = "Tidak dapat membagi dengan nol!";
                hasilSpan.style.color = "#dc2626";
                return;
            }
            hasil = angka1 / angka2;
            break;
        default:
            return;
    }

    hasilSpan.textContent = hasil.toLocaleString('id-ID');
}