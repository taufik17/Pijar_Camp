// fungsi callback
const callback = (keyword, panjang) => {
    // deklarasi variabel
    const name = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
    ]
    let hasil = []

    // Nama dijadikan huruf kecil semua
    const lowerName = name.map(element => {
        return element.toLowerCase()
    })

    // cari nama
    lowerName.find(element => {
        // get nama dalam element yang mengandung keyword dari parameter 
        if (element.includes(keyword)) {
            // hasil yang didapat akan ditampung pada variabel hasil
            hasil.push(element)
        }
    })

    // fungsi callback mereturn nilai hasil yang di slice berdasarkan ukuran yang dikirim parameter
    return console.log(hasil.slice(0, panjang))
}

// fungsi searchName
const searchName = (keyword, panjang, cari) => {
    cari(keyword, panjang)
}

searchName("an", 3, callback)