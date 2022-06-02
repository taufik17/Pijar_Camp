// fungsi seleksiNilai
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    // deklarasi variabel
    let lenArray = dataArray.length
    let hasil = []
    // cek panjang array harus lebih dari 5
    if (lenArray > 5) {
        // cek nilai awal harus lebih kecil dari nilai akhir
        if (nilaiAwal < nilaiAkhir) {
            // proses sorting dan mendapatkan nilai data array
            dataArray.sort(function (a, b) { return a - b }).map(element => {
                // data yang nilainya >= nilai awal dan <= nilai akhir maka akan disimpan di variabel hasil
                if (element >= nilaiAwal && element <= nilaiAkhir) {
                    hasil.push(element)
                }
            })
            // jika nilai tidak kosong, cetak hasil
            if (hasil.length != 0) {
                console.log(hasil)
                // jika nilai kosong maka tampil teks di bawah.
            } else {
                console.log("Nilai tidak ditemukan")
            }
            // jika nilai awal tidak lebih kecil dari nilai akhir, akan tampil teks di bawah
        } else {
            console.log("Nilai akhir harus lebih besar dari nilai awal")
        }
        // jika kurang dari / = 5 maka akan tampil teks di bawah
    } else {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    }


}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
// Output:
// [8, 14, 17]

seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
// Output:
// “Nilai akhir harus lebih besar dari nilai awal”

seleksiNilai(5, 17, [2, 25, 4])
// Output:
// “Jumlah angka dalam dataArray harus lebih dari 5”

seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])
// Output:
// “Nilai tidak ditemukan”
