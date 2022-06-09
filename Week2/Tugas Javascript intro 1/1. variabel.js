const biodata = {
    name: "Taufik Agung Santoso",
    age: 24,
    hobbies: ["Bulu Tangkis", "Catur", "Nonton"],
    isMarried: false,
    schoolList: [
        {
            name: "SDN 2 Jajaran baru",
            yearIn: 2004,
            yearOut: 2009,
            major: null
        },
        {
            name: "SMP Negeri Megang Sakti",
            yearIn: 2010,
            yearOut: 2013,
            major: null
        },
        {
            name: "SMK Negeri 3 Lubuk Linggau",
            yearIn: 2013,
            yearOut: 2016,
            major: "Teknik Komputer dan Jaringan"
        },
        {
            name: "Institut Teknologi Sumatera",
            yearIn: 2016,
            yearOut: 2021,
            major: "Teknik Informatika"
        }],
    skills: [
        {
            skillName: "Html",
            level: "Advanced"
        },
        {
            skillName: "css",
            level: "Advanced"
        },
        {
            skillName: "php",
            level: "Advanced"
        },
        {
            skillName: "Javascript",
            level: "Beginner"
        }
    ],
    interestInCoding: true
}

console.log(biodata.interestInCoding)