let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

// a. ubah data
const newData = {
    name: 'Taufik Agung Santoso',
    email: 'taufikagungsantoso17@gmail.com',
    hobby: ["Bulu Tangkis", "Catur", "Nonton"]
}

const dataUbah = { ...data, ...newData }

//b. destructuring
const { address: { street, city } } = data;
console.log(dataUbah)
console.log(street, city)