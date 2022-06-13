import { readFile as bacaFile } from 'fs';

const readFile = (file, encoding) => {

    return new Promise((resolve, reject) => {
        if (file, encoding !== undefined) {
            try {
                bacaFile(file, encoding, (err, content) => {
                    if (err) return reject(err)
                    return resolve(content)
                })
            } catch (err) {
                return err;
            }
        } else {
            console.log("Parameter yang dikirim harus lengkap")
        }
    })
}

readFile('nama.txt', 'utf-8')
    .then(content => {
        // baca file berhasil
        console.log(content)
    })
    .catch(err => {
        if (err?.errno == -4058) {
            console.log("File tidak ditemukan. (gunakan ekstensi file)")
        } else {
            console.log('Terjadi error saat membaca file:', err)
        }
    })

import axios from 'axios'

const getData = (keyword) => {
    return new Promise(async (resolve, reject) => {
        try {
            const request = await axios.get(
                `https://kitsu.io/api/edge/trending/anime`
            )
            if (request?.data?.data) {
                resolve({ data: request.data.data, key: keyword })
            } else {
                reject("Data tidak di temukan")
            }
        } catch (error) {
            reject(error)
        }
    });
};

console.log("Mencari data");
getData("hero")
    .then((res) => {
        const filteredNames = res.data.map(element => {
            return element.attributes.titles.en_jp
        }).filter(name => {
            return name.toLowerCase().includes(res.key.toLowerCase())
        })

        if (filteredNames.length > 0) {
            console.log(`Data ditemukan: ${filteredNames}`)
        } else {
            console.log("Data Tidak Ditemukan")
        }
    })
    .catch(err => {
        if (err?.response?.status == 400) {
            console.log("Bad Request")
        } else {
            console.log("Terjadi Kesalahan di Dalam Sistem")
        }
    })
