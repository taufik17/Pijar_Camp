const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    const validation = typeof (nilaiAwal, nilaiAkhir) === "number" && Array.isArray(dataArray) === true;

    function isDataTrue(data) {
        if (data.length > 5) {
            return true
        }
        return false
    }
    function search(nilai) {
        if (nilai.length === 0) {
            console.log('Nilai tidak ditemukan');
        } else {
            console.log(nilai.sort((a, b) => a - b));
        }
    }

    if (validation) {
        if (nilaiAwal < nilaiAkhir && isDataTrue(dataArray)) {
            const nilai = dataArray.filter((index) => index > nilaiAwal && index < nilaiAkhir && typeof index === 'number');
            search(nilai);
        } else if (nilaiAwal > nilaiAkhir && isDataTrue(dataArray)) {
            console.log('Nilai akhir harus lebih besar dari nilai awal');
        } else if (nilaiAwal < nilaiAkhir && dataArray.length <= 5) {
            console.log('Jumlah angka dalam dataArray harus lebih dari 5');
        } else {
            console.log(`nilaiAwal harus lebih kecil dari nilaiAkhir dan dataArray harus lebih dari 5`);
        }
    } else {
        console.log('Parameter yang dikirim salah, lihat: seleksiNilai(number, number, [array])');
    }
};

// seleksiNilai(5, 20, [2, "25", 4, 14, 17, 30, 8]);
// seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
// seleksiNilai(5, 17, [2, 25, 4]);
// seleksiNilai([2, 25, 4, 1, 30, 18]);

seleksiNilai("-5", 20, [2, 25, 4, "14", 17, 30, 8])
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, 17, [2, 25, 4])
seleksiNilai(50, 17, [2, 25, ])
seleksiNilai([2, 25, 4, 1, 30, 18])