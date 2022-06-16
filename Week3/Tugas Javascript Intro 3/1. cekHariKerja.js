const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            try {
                let cek = dataDay.find(item => {
                    return item === day.toLowerCase()
                })
                if (cek) {
                    resolve(cek)
                } else {
                    reject(new Error(`Hari ${day} bukan hari kerja`))
                }
            } catch (error) {
                reject(new Error(`Terdapat kesalahan pada parameter`))
            }

            // Try Catch
            // Try digunakan untuk menjalankan baris program tertentu yang sekaligus dicek apakah terjadi error atau tidak,
            // karena sifatnya validasi maka dapat digunakan untuk handling error. 
            // Blok try akan berhenti jika terdapat error pada nilai balikannya. dan error langsung masuk ke catch.
            // Sebaliknya, jika tidak terdapat error pada blok try, maka blok catch akan dihiraukan.
        }, 3000)
    })
}

cekHariKerja("Senin")
    .then(res => console.log(`${res} adalah hari kerja`))
    .catch(err => console.log(`${err}`))

cekHariKerja("minggu")
    .then(res => console.log(`${res} adalah hari kerja`))
    .catch(err => console.log(`${err}`))

cekHariKerja(123)
    .then(res => console.log(`${res} adalah hari kerja`))
    .catch(err => console.log(`${err}`))

cekHariKerja()
    .then(res => console.log(`${res} adalah hari kerja`))
    .catch(err => console.log(`${err}`))


// Then Catch
// .then() .catch() digunakan ketika pemanggilan fungsi pada sebuah proses asyncronous, penggunaanya ditujukan untuk menghandle proses asyncronous
// yang ada pada fungsi yang dipanggil.
// Blok then berfungsi menangkap nilai balikan resolve / blok try yang success
// Blok catch berfungsi menangkap nilai balikan reject pada promise, dan juga error dari blok catch (pada proses try catch)

// validasi lower