const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            try {
                let cek = dataDay.find((item) => {
                    return item === day
                })
                if (cek) {
                    resolve(cek)
                } else {
                    reject(new Error(`Hari ${day} bukan hari kerja`))
                }
            } catch (error) {
                return error
            }
        }, 3000)
    })
}

cekHariKerja("senin")
    .then(res => console.log(`${res} adalah hari kerja`))
    .catch(err => console.log(`${err}`))

cekHariKerja("minggu")
    .then(res => console.log(`${res} adalah hari kerja`))
    .catch(err => console.log(`${err}`))
