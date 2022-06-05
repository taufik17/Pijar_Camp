// Built-in String javascript
console.log("Built-in String javascript")
// 1. charAt
let nama = 'Taufik Agung Santoso'
console.log("Nomor 1 = ", nama.charAt(7))
// => Mendapatkan value pada variabel string dengan parameter index yang dikirim, index dimulai dari 0

// 2. concat
let bootcamp = 'PijarCamp'
let program = 'FullStack Web Developer'
console.log("Nomor 2 = ", bootcamp.concat(' ', program))
// => Menggabungkan dua atau lebih variabel String. ada metode lebih mudah yaitu dengan template literals

// 3. includes
let konten = 'FullStack Web Developer'
console.log("Nomor 3 = ", konten.includes("Stack"))
// => Method yang berfungsi untuk memeriksa string tertentu pada variabel string. mengembalikan nilai boolean

// 4. endsWith
let proglang = 'JavaScript'
console.log("Nomor 4 = ", proglang.endsWith("cript"))
// => Method yang berfungsi untuk memeriksa string apakah diakhiri dengan string yang dikirim di parameter. mengembalikan nilai boolean

// 5. indexOf
let text = 'Pijar Mahir'
console.log("Nomor 5 = ", text.indexOf("jar"))
/* => Method yang berfungsi untuk mencari indeks dari string. 
    method akan mengembalikan nilai angka indeks yang ditemukan pertama kali, 
    jika tidak ditemukan akan mengembalikan nilai -1
*/

// 6. lastIndexOf
let job = 'Trainer'
console.log("Nomor 6 = ", job.lastIndexOf("r"))
/* => Method yang berfungsi untuk mencari indeks dari string. 
    method akan mengembalikan nilai angka indeks yang ditemukan terakhir kali, 
    jika tidak ditemukan akan mengembalikan nilai -1
*/

// 7. repeat
let camp = 'Pijar'
console.log("Nomor 7 = ", camp.repeat(3))
// => Method yang berfungsi untuk menyalin string sesuai jumlah(n) yang diinginkan

// 8. replace
let tingkat = 'Trainer'
console.log("Nomor 8 = ", tingkat.replace(tingkat, 'CEO'))
// => Method yang berfungsi untuk mengganti nilai string

// 9. search
let teks = 'Pekerjaan Saya Adalah Programmer'
console.log("Nomor 9 = ", teks.search('Saya'))
/* => Method yang berfungsi untuk mencari indeks awal dari string yang dicari 
    jika tidak ditemukan mengembalikan nilai -1
*/

// 10. slice
let potong = 'Jika Tidak Bekerja Maka Potong Gaji'
console.log("Nomor 10 = ", potong.slice(5, 10))
/* => Method yang berfungsi untuk mengambil string 
    dengan rentang indeks awal sampai indeks akhir (indeks dikirim dengan parameter) 
*/

// 11. startsWith
let lorem = 'lorem ipsum sit dolor amet'
console.log("Nomor 11 = ", lorem.startsWith('Kel'))
/* => Method yang berfungsi untuk mengecek apakah sebuah string diawali dengan string tertentu.
    method mengembalikan nilai berupa boolean
*/

// 12. substr
let sub = 'Dalam Organisasi biasanya terdapat sub bagian tertentu'
console.log("Nomor 12 = ", sub.substr(6, 10))
/* => Method yang berfungsi untuk mengambil string dari indeks ke-n dengan panjang tertentu. 
    6 adalah indeks awal, 10 adalah panjang nilai.
*/

// 13. substring
let substr = 'Dalam Organisasi biasanya terdapat sub bagian tertentu'
console.log("Nomor 13 = ", substr.substring(6, 10))
/* => Method yang berfungsi untuk mengambil sebagian string anatara dua indeks (awal dan akhir).
    6 adalah indeks awal, 10 adalah indeks akhir.
*/

// 14. toLowerCase
let txt = 'PijarCamp'
console.log("Nomor 14 = ", txt.toLowerCase())
// => Method yang berfungsi untuk mengubah semua huruf didalam string menjadi huruf kecil

// 15. toUpperCase
let txtup = 'PijarCamp'
console.log("Nomor 15 = ", txtup.toUpperCase())
// => Method yang berfungsi untuk mengubah semua huruf didalam string menjadi huruf besar

// 16. trim
let trimText = '  PijarCamp '
console.log("Nomor 16: ")
console.log(trimText)
console.log(trimText.trim())
// Method yang berfungsi untuk menghapus spasi pada awal dan akhir string

// 17. toString
let int = 5
console.log("Nomor 17: ")
console.log("integer: ", int + 2)
console.log("String: ", int.toString() + 2)


// Built-in Array javascript
// (kecuali : split, reverse, join, foreach, map)

// 1. unshift
var mahasiswa = ['Taufik', 'Kevin', 'Komarudin', 'Aldo']
console.log("Data awal : ", mahasiswa)
mahasiswa.unshift('Ayi')
console.log("Setelah unshift() : ", mahasiswa)

console.log(" ")

// 2. shift
var mahasiswa2 = ['kisana', 'Taufik', 'Kevin', 'Komarudin', 'Aldo']
console.log("Data awal : ", mahasiswa2)
mahasiswa2.shift('kisana')
console.log("Setelah shift() : ", mahasiswa2)

console.log(" ")

// 3. push
var mahasiswa3 = ['Taufik', 'Kevin', 'Komarudin', 'Aldo']
console.log("Data awal : ", mahasiswa3)
mahasiswa3.push('Ayi')
console.log("Setelah push() : ", mahasiswa3)

console.log(" ")

// 3. pop
var mahasiswa4 = ['Taufik', 'Kevin', 'Komarudin', 'Aldo', 'kisana']
console.log("Data awal : ", mahasiswa4)
mahasiswa4.pop('Ayi')
console.log("Setelah pop() : ", mahasiswa4)

console.log(" ")

// 4. slice dan 5. splice
var mahasiswa5 = ['Taufik', 'Kevin', 'Komarudin', 'Aldo', 'kisana']
console.log("Data awal : ", mahasiswa5)
console.log("Setelah slice() : ", mahasiswa5.slice(1, 2))
console.log("Setelah splice() : ", mahasiswa5.splice(1, 2))

console.log(" ")

// 6. some
const usia = [3, 10, 18, 20]
const checkAdult = (usia) => {
    return usia > 25
}

console.log(usia.some(checkAdult))

console.log(" ")

// 7. entries
const buah = ["Pisang", "Jeruk", "Apel", "Mangga"]
const item = buah.entries()

for (let x of item) {
    console.log(x)
}

console.log(" ")

// 8. entries
const buah2 = ["Pisang", "Jeruk", "Apel", "Mangga"]
const item2 = buah2.keys()

for (let x of item2) {
    console.log(x)
}

console.log(" ")

// 9. valueOf
const buah3 = ["Pisang", "Jeruk", "Apel", "Mangga"]
console.log(buah3.valueOf())

console.log(" ")

// 10. 
const buah4 = ["Pisang", "Jeruk", "Apel", "Mangga"]
console.log(buah4.copyWithin(2, 0)) // array.copyWithin(target, start, end)