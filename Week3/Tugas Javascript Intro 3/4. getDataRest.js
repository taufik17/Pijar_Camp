import fetch from 'node-fetch'
import axios from 'axios'

// fetch
console.log("Fetch:")
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await response.json()

data.map(element => {
    console.log(element.name)
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// axios async await
async function getName() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/')
        if (response?.data?.length) {
            return response.data
        } else {
            console.log("Tidak Ditemukan Data")
        }
    } catch (error) {
        throw error
    }
}
getName()
    .then(res => {
        console.log("")
        console.log("Async Await:")
        res.map(element => {
            console.log(element.name)
        })
    })
    .catch(err => {
        if (err.response.status == 404) {
            console.log("Tidak Ditemukan Data / Url Salah")
        }
    })

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promise
const getData = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/')
            if (response?.data?.length) {
                resolve(response.data)
            } else {
                reject("Tidak Ditemukan Data")
            }
        } catch (error) {
            reject(error)
        }
    })
}

getData()
    .then((res) => {
        console.log("")
        console.log("Promise:")
        res.map(element => {
            console.log(element.name)
        })
    })
    .catch(err => {
        if (err?.response?.status == 400) {
            console.log("Bad Request")
        } else {
            console.log("Terjadi Kesalahan di Dalam Sistem")
        }
    })



