const funcPrint = (nilai) => {
    let hasil = '';
    if (typeof nilai !== 'number') {
        console.log("Data harus number")
    }
    if (nilai < 0) {
        console.log("Data tidak boleh negatif")
    }
    if (nilai === 0) {
        console.log("Nilai 0, Segitiga tidak ditampilkan")
    }
    for (let i = 0; i < printSegitiga; i++) {
        for (let j = 1; j <= printSegitiga - i; j++) {
            hasil += j + ' ';
        }
        hasil += '\n';
    }
    console.log(hasil)
}

const printSegitiga = -4

funcPrint(printSegitiga)