function hitungLuasTrapesium(sisiAtas, sisiBawah, tinggi) {
    return 0.5 * (sisiAtas + sisiBawah) * tinggi;
}
let luas1 = hitungLuasTrapesium(6, 10, 4);
console.log("Luas trapesium dengan sisi atas 6, sisi bawah 10, dan tinggi 4 adalah: " + luas1);
let luas2 = hitungLuasTrapesium(8, 12, 5);
console.log("Luas trapesium dengan sisi atas 8, sisi bawah 12, dan tinggi 5 adalah: " + luas2);

let teksHasil = `
    Luas trapesium dengan sisi atas 6, sisi bawah 10, dan tinggi 4 adalah: ${luas1} <br>
    Luas trapesium dengan sisi atas 8, sisi bawah 12, dan tinggi 5 adalah: ${luas2}
`;
document.getElementById("hasil").innerHTML = teksHasil;