const findRata = (nilai) => {
    // Deklarasi variabel
    let arrKeyNilai = Object.keys(nilai)
    let arrValueNilai = Object.values(nilai)
    let mapelInvalid = []

    arrValueNilai.find(element => {
        if (Number.isNaN(parseFloat(element))) {
            mapelInvalid.push(arrKeyNilai[arrValueNilai.indexOf(element)])
        }
        if (element < 0) {
            mapelInvalid.push(arrKeyNilai[arrValueNilai.indexOf(element)])
        }
    })

    if (mapelInvalid.length > 0) {
        return `Nilai mapel ${getInvalidMapel(mapelInvalid)} tidak valid. Rata-rata UN tidak bisa dihitung.`
    } else {
        let rataRata = Math.round(arrValueNilai.reduce((a, b) => a + b) / arrValueNilai.length);
        if (rataRata >= 90 && rataRata <= 100) {
            return `Rata - rata = ${rataRata} \nGrade = A`
        } else if (rataRata >= 80 && rataRata <= 89) {
            return `Rata - rata = ${rataRata} \nGrade = B`
        } else if (rataRata >= 70 && rataRata <= 79) {
            return `Rata - rata = ${rataRata} \nGrade = C`
        } else if (rataRata >= 60 && rataRata <= 69) {
            return `Rata - rata = ${rataRata} \nGrade = D`
        } else if (rataRata <= 59) {
            return `Rata - rata = ${rataRata} \nGrade = E`
        } else {
            return "Tidak Terdefinisi"
        }
    }
}

const getInvalidMapel = (mapel) => {
    if (mapel.length > 1) {
        return mapel.join(', ')
    } else {
        return mapel
    }
}

const nilai = {
    mtk: 80,
    bahasaIndonesia: 90,
    bahasaInggris: 89,
    ipa: 69
}

const nilaiDesimal = {
    mtk: 80,
    bahasaIndonesia: 80,
    bahasaInggris: 80,
    ipa: 69
}

const nilaiInvalid = {
    mtk: null,
    bahasaIndonesia: 80,
    bahasaInggris: 80,
    ipa: 69
}

console.log(findRata(nilai))
console.log(findRata(nilaiDesimal))
console.log(findRata(nilaiInvalid))