const callback = (error, month) => {
    if (error === null) {
        month.map(res => {
            console.log(res)
        })
    } else {
        console.log(error)
    }
}

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000)
}

console.log("Mulai")
getMonth(callback)
console.log("Selesai")