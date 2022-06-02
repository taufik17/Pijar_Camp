// Built-in String javascript
// 1. charAt
let nama = 'Taufik Agung Santoso'
console.log(nama.charAt(6))

// 2. concat
let bootcamp = 'PijarCamp'
let program = 'FullStack Web Developer'

console.log(bootcamp.concat(' ', program))

// 3. includes
let konten = 'FullStack Web Developer'
console.log(konten.includes("Stack"))

// 4. endsWith
let proglang = 'JavaScript'
console.log(proglang.endsWith("cript"))

// 5. indexOf
let text = 'Pijar Mahir'
console.log(text.indexOf("i"))

// 6. lastIndexOf
let job = 'Trainer'
console.log(job.lastIndexOf("i"))

// 7. repeat
let camp = 'Pijar'
console.log(camp.repeat(3))

// 8. replace
let tingkat = 'Trainer'
console.log(tingkat.replace(tingkat, 'CEO'))

// 9. search
let teks = 'Kerja Saya Adalah Programmer'
console.log(teks.search('Saya'))

// 10. slice
let potong = 'Jika Tidak Bekerja Maka Potong Gaji'
console.log(potong.slice(5, 10))

// 11. startsWith
let lorem = 'lorem ipsum sit dolor amet'
console.log(lorem.startsWith('Kel'))

// 12. substr
let sub = 'Dalam Organisasi biasanya terdapat sub bagian tertentu'
console.log(sub.substr(0, 7))

// 13. substring
let substr = 'Dalam Organisasi biasanya terdapat sub bagian tertentu'
console.log(substr.substring(0, 7))

// 14. toLowerCase
let txt = 'PijarCamp'
console.log(txt.toLowerCase())

// 15. toUpperCase
let txtup = 'PijarCamp'
console.log(txtup.toUpperCase())

// 16. trim
let trimText = '  PijarCamp '
console.log(trimText)
console.log(trimText.trim())

// 17. toString
let int = 5
console.log(int + 2)
console.log(int.toString() + 2)


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
