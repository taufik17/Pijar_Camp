const callback = (keyword, panjang) => {
    const name = [
        "Abigail",
        "Alexandra",
        "Alison",
        "Amanda",
        "Angela",
        "Bella",
        "Carol",
        "Caroline",
        "Carolyn",
        "Deirdre",
        "Diana",
        "Elizabeth",
        "Ella",
        "Faith",
        "Olivia",
        "Penelope",
    ];
    let hasilIndex = [];
    let hasil = [];
    const lowerName = name.map((element) => {
        return element.toLowerCase();
    });

    lowerName.find((element) => {
        if (element.includes(keyword.toLowerCase())) {
            hasilIndex.push(lowerName.indexOf(element));
        }
    });

    hasilIndex.map((element) => {
        hasil.push(name[element]);
    });

    if (hasil.length > 0) {
        return hasil.slice(0, panjang);
    } else {
        return "Nama Tidak ditemukan";
    }
};

function checkType(keyword, panjang, cari) {
    if (typeof keyword !== "string") {
        console.log("Parameter 1 / keyword harus string");
        return false;
    }
    if (typeof panjang !== "number") {
        console.log("Parameter 2 / panjang array harus number");
        return false;
    }
    if (typeof cari !== "function") {
        console.log("Parameter 3 harus fungsi callback");
        return false;
    }
    return true;
}

function checkLength(keyword, panjang) {
    let inf = true;
    if (keyword.length === 0) {
        console.log("Keyword tidak boleh kosong");
        inf = false
    }
    if (panjang < 1) {
        console.log("Parameter 2 / panjang array harus >= 1");
        inf = false
    }
    return inf;
}

const searchName = (keyword, panjang, cari) => {
    const validation = (keyword, panjang, cari) !== undefined;
    if (validation) {
        if (
            checkType(keyword, panjang, cari) &&
            checkLength(keyword, panjang)
        ) {
            console.log(cari(keyword, panjang));
        }
    } else {
        console.log(
            "Parameter yang dikirim tidak lengkap, lihat: searchName(string, number, functionCallback)"
        );
    }
};

// testCase
searchName("A", 3, callback);
searchName();
searchName(true, 3, callback);
searchName("a", 3, callback);
searchName("an", true, callback);
searchName("an", -3, callback);
searchName("an", 3, "callback");
