// promise adalah sebuah object yang membungkus hasil dari async operation
// memiliki 3 state : pending, resolve dengan value, reject dengan pesan error nya
// membuat sebuah promise
// const promise = new Promise((resolve, reject) => {
//     // body
//     // ...
//     if (success) {
//         resolve(value);
//     } else {
//         reject(error);
//     }
// });
let successFlagDummy;

function userCredentialRepo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = [
                {username: 'jusion', email: 'jasion@test.com'},
                {username: 'yesss', email: 'yesss@test.com'},
            ];
            if (successFlagDummy) {
                resolve(users);
            } else {
                reject('Failed to get user list');
            }

        }, 1000);
    })

}

function findUser(username) {
    const promise = userCredentialRepo()
    promise.then((users) => {
        const user = users.find((user) => user.username === username);
        console.log(user)
    }, (err) => {
        console.log(err)
    })
}


// console.log('Promise');
// successFlagDummy = true;
// findUser('jusion');

function findUserWithCatchFinally(username) {
    const promise = userCredentialRepo()
    promise.then((users) => {
        const user = users.find((user) => user.username === username);
        console.log(user);
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        console.log('Finish');
    })
}

console.log('Catch Failed Promise');
successFlagDummy = false;
findUserWithCatchFinally('jusion');

// Chaining Promise
function downloadFile(urlInfo) {
    console.log(`Downloading ${urlInfo.url}`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(urlInfo);
            // reject('Failed download');
        }, urlInfo.processTime);
    })
}

function processFile(file) {
    console.log(`Processing ${file.url}`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${file.url} finish`);
            // reject('Failed process');
        }, file.processTime);
    })
}

let urlInfo = {url: 'https://www.enigmacamp.com/pic.jpg', processTime: 300};
downloadFile(urlInfo).then((file) => {
    return file;
}).then((fileToProcess) => {
    return processFile(fileToProcess)
}).then((info) => {
    console.log(info);
}).catch((err) => {
    console.log(err);
});

const url1 = {url: 'https://www.enigmacamp.com/file01.jpg', processTime: 3000};
const url2 = {url: 'https://www.enigmacamp.com/file02.jpg', processTime: 500};
const url3 = {url: 'https://www.enigmacamp.com/file03.jpg', processTime: 750};

// downloadFile(url1).then((file) => {
//     return file;
// }).then((fileToProcess) => {
//     return processFile(fileToProcess)
// }).then((info) => {
//     console.log(info);
// }).then(() => downloadFile(url2))
//     .then((fileToProcess) => {
//         return processFile(fileToProcess)
//     }).then((info) => {
//     console.log(info);
// }).then(() => downloadFile(url3))
//     .then((file) => {
//         return file;
//     }).then((fileToProcess) => {
//     return processFile(fileToProcess)
// }).then((info) => {
//     console.log(info);
// }).catch((err) => {
//     console.log(err);
// });

//Promise All
// Promise.all([downloadFile(url1), downloadFile(url2), downloadFile(url3)]).then((results) => {
//     return results
// }).then((res) => {
//     let promiseProcess = [];
//     for (let i = 0; i < res.length; i++) {
//         promiseProcess.push(processFile(res[i]));
//     }
//     return Promise.all(promiseProcess);
// }).then((finishInfo) => {
//     for (let i = 0; i < finishInfo.length; i++) {
//         console.log(finishInfo[i]);
//     }
// })


// ES2017 introduced the async/await keywords that build on top of promises
// Async/Await is a syntactic sugar for promises
// await keyword only inside an async function
// async function processAllFile() {
//     try {
//         let resDownload01 = await downloadFile(url1);
//         let resProcess01 = await processFile(resDownload01);
//         console.log(resProcess01);
//         let resDownload02 = await downloadFile(url2);
//         let resProcess02 = await processFile(resDownload02);
//         console.log(resProcess02);
//         let resDownload03 = await downloadFile(url3);
//         let resProcess03 = await processFile(resDownload03);
//         console.log(resProcess03);
//     } catch (e) {
//         console.log(e);
//     }
// }

const processAllFile = async ()=>{
    try {
        let resDownload01 = await downloadFile(url1);
        let resProcess01 = await processFile(resDownload01);
        console.log(resProcess01);
        let resDownload02 = await downloadFile(url2);
        let resProcess02 = await processFile(resDownload02);
        console.log(resProcess02);
        let resDownload03 = await downloadFile(url3);
        let resProcess03 = await processFile(resDownload03);
        console.log(resProcess03);
    } catch (e) {
        console.log(e);
    }
}

processAllFile();



