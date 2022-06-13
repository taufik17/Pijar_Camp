const cariNama = (inisialNya) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [
                "Abigail",
                "Alexandra",
                "Alison",
                "Amanda",
                "Anggela",
                "Bella",
                "Carol",
                "Caroline",
                "Carolyn",
                "Deidre",
                "Diana",
                "Elizabeth",
                "Ella",
                "Faith",
                "Olivie",
                "Alfredo",
                "Nimah",
                "Taufik",
                "Reza",
                " Kevin",
                "Wahid",
                "Jafar",
                "Nanang",
                "Adi",
                "Apryanto",
                "Irfandi",
                "Ayi",
                "Ilham",
                "Ikhsan",
            ];
            let regex = new RegExp(`${inisialNya}`, "i");
            let filterReg = data.filter((item) => regex.test(item));
            try {
                if (filterReg) {
                    resolve(filterReg);
                } else {
                    reject(new Error("Ini sial data tidak ditemukan"));
                }
            } catch (err) {
                return err;
            }
        }, 7000); // akhir timeout
    });
};
console.log("Mulai mencari data");
cariNama("adsfadfas")
    .finally(() => {
        console.log("Berhasil mencari data !!!!")
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));