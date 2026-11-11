function hitung(operator) {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil;

    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil").innerHTML = "Masukkan kedua angka!";
        return;
    }

    switch (operator) {
        case "+":
            hasil = angka1 + angka2;
            break;

        case "-":
            hasil = angka1 - angka2;
            break;

        case "*":
            hasil = angka1 * angka2;
            break;

        case "/":
            hasil = angka2 !== 0 ? angka1 / angka2 : "Tidak bisa dibagi 0";
            break;

        default:
            hasil = "Operator tidak valid";
    }

    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}