const funcPrint = (nilai) => {
    let hasil = '';
    if (typeof nilai !== 'number') {
        console.log("Data harus number")
    } else {
        for (let i = 0; i < printSegitiga; i++) {
            for (let j = 1; j <= printSegitiga - i; j++) {
                hasil += j + ' ';
            }
            hasil += '\n';
        }
        console.log(hasil)
    }
}

const printSegitiga = 10

funcPrint(printSegitiga)