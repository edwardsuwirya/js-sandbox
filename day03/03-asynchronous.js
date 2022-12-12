// JavaScript  termasuk Single Threaded Programming Language.
// Functions dieksekusi secara sequence

function pertama() {
    return 'Selamat Datang';
}

function kedua() {
    return 'Sampai Berjumpa Lagi';
}

console.log(pertama());
console.log(kedua());

// Async adalah proses yang cara kerjanya berdasarkan waktu proses
// Contohnya call backend API, proses tersebut kita tidak pernah tahu kapan mengeluarkan result nya
// https://www.javascripttutorial.net/javascript-event-loop/
// Async menggunakan setTimeOut
// Code dibawah adalah cara yang salah menggunakan async
// function userCredentialRepo() {
//     let users = [];
//     setTimeout(() => {
//         users = [
//             {username: 'jusion', email: 'jasion@test.com'},
//             {username: 'yesss', email: 'yesss@test.com'},
//         ];
//     }, 1000);
//     return users;
// }
//
// function findUser(username) {
//     const users = userCredentialRepo();
//     return users.find((user) => user.username === username);
// }
//
// console.log('Failed Async')
// console.log(findUser('jusion'));

function userCredentialRepo(findUserCallback) {
    setTimeout(() => {
        let users = [
            {username: 'jusion', email: 'jasion@test.com'},
            {username: 'yesss', email: 'yesss@test.com'},
        ];
        findUserCallback(users)
    }, 1000);
}

function findUser(username, printCallback) {
    let findUser = (users) => {
        const user = users.find((user) => user.username === username);
        printCallback(user);
    }
    userCredentialRepo(findUser);
}

function print(user) {
    console.log(user)
}

console.log('Success Async');
findUser('jusion', print);


// Callback hell
console.log('Callback Hell');
// function download(url) {
//     setTimeout(() => {
//         console.log(`Downloading ${url} ...`);
//     }, 1000);
// }
//
// function process(picture) {
//     console.log(`Processing ${picture}`);
// }
//
// let url = 'https://www.enigmacamp.com/pic.jpg';
//
// // Flow yang benar download file selesai baru dilanjutkan proses file
// // tapi terjadi issue, fungsi proses dijalankan terlebih dahulu, karena proses download yang cukup lama
// // Harus ada mekanisme khusus
// download(url);
// process(url);


function download(url, processCallBack) {
    setTimeout(() => {
        console.log(`Downloading ${url} ...`);
        processCallBack(url);
    }, 1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.enigmacamp.com/pic.jpg';
download(url, process);

// Callback hell case
// Bagaimana kalo kita memproses 3 buah url secara sync
const url1 = 'https://www.enigmacamp.com/pic1.jpg';
const url2 = 'https://www.enigmacamp.com/pic2.jpg';
const url3 = 'https://www.enigmacamp.com/pic3.jpg';

download(url1, function (url) {
    process(url);
    download(url2, function (url) {
        process(url);
        download(url3, function (url) {
            process(url);
        })
    })
});
