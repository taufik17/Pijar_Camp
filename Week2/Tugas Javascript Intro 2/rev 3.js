// fungsi seleksiNilai
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal, nilaiAkhir, dataArray !== undefined) {
        // deklarasi variabel
        let lenArray = dataArray.length
        let hasil = []
        let counter = 0
        if (typeof (nilaiAwal, nilaiAkhir) === "number" && Array.isArray(dataArray) === true) {
            // validasi panjang array harus lebih dari 5
            if (lenArray > 5) {
                // validasi nilai awal harus lebih kecil dari nilai akhir
                if (nilaiAwal < nilaiAkhir) {
                    // proses sorting dan mendapatkan nilai data array
                    dataArray.sort(function (a, b) { return a - b }).map(element => {
                        // hitung counter jika value array terdapat nilai yang bukan number
                        if (typeof element !== "number") {
                            counter += 1
                        } else {
                            // data yang nilainya > nilai awal dan < nilai akhir maka akan disimpan di variabel hasil
                            if (element > nilaiAwal && element < nilaiAkhir) {
                                hasil.push(element)
                            }
                        }
                    })
                    // validasi nilai tidak kosong, cetak hasil
                    if (hasil.length != 0) {
                        if (counter != 0) {
                            console.log("Value array harus berformat number")
                        } else {
                            console.log(hasil)
                        }
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
        } else {
            console.log("Parameter yang dikirim salah, lihat: seleksiNilai(number, number, [array])")
        }
    } else {
        console.log("Parameter yang dikirim tidak lengkap, lihat: seleksiNilai(number, number, [array])")
    }
}

seleksiNilai("-5", 20, [2, 25, 4, "14", 17, 30, 8])
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, 17, [2, 25, 4])
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])
seleksiNilai([2, 25, 4, 1, 30, 18])
