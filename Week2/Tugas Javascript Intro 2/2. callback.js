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
    let hasilIndex = []
    let hasil = []

    // Nama dijadikan huruf kecil semua
    const lowerName = name.map(element => {
        return element.toLowerCase()
    })

    // cari nama
    lowerName.find(element => {
        // get nama dalam element yang mengandung keyword dari parameter 
        if (element.includes(keyword)) {
            // hasil yang didapat akan diambil indeksnya, kemudian ditampung pada variabel hasilIndex
            hasilIndex.push(lowerName.indexOf(element))
        }
    })

    // get hasil index
    hasilIndex.map(element => {
        // hasil akan menampung nilai name dengan index yang didapatkan dari lowerName
        hasil.push(name[element])
    })

    // fungsi callback mereturn nilai hasil yang di slice berdasarkan ukuran yang dikirim parameter
    return console.log(hasil.slice(0, panjang))
}

// fungsi searchName
const searchName = (keyword, panjang, cari) => {
    // validasi keyword harus string
    if (typeof keyword === "string") {
        // validasi panjang array harus number
        if (typeof panjang === "number") {
            // validasi cari harus merupakan fungsi
            if (typeof cari === "function") {
                cari(keyword, panjang)
            } else {
                console.log("Parameter 3 harus fungsi callback")
            }
        } else {
            console.log("Parameter 2 / panjang array harus number")
        }
    } else {
        console.log("Parameter 1 / keyword harus string")
    }
}

searchName("an", 3, callback)