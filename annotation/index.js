// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Первая цепочка')
//         resolve()
//     }, 1000)
// })
//
// promise.then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             var users = [
//                 {uid: 'id1', name: 'Maxim'},
//                 {uid: 'ud2', name: 'Elena'}
//             ]
//             reject('База данных не обновилась')
//             console.log('Вторая цепочка');
//             resolve(users)
//         },5000)
//     })
// }).then((dbUsers) => {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//         console.log('Трансформирую данные');
//         let users = dbUsers.map((user) => {
//             return {
//                 id: user.uid.toUpperCase(),
//                 firstName: user.name.toUpperCase(),
//                 timestamp: Date.now()
//             }
//         });
//         resolve(users)
//     }, 2000)
//    } )
// }).then((users) => {
//     console.log(users)
// })
// .catch((error) => {
//     console.log(error);
// })

async function load(){
    let url = 'https://jsonplaceholder.typicode.com/users';

    var response = await fetch(url);
    var data = await response.json();

    console.log(data)

    // fetch(url)
    //     .then((result) => {
    //         console.log(result)
    //     return result.json();
    // })
    //     .then((json) => {
    //
    //         let spEl = document.querySelector('#sp');
    //
    //         let htmlSpisok = json.map((item) => {
    //             return '<li>'+ item.name + '</li>'
    //         });
    //
    //         spEl.insertAdjacentHTML('afterbegin',htmlSpisok.join(' '))
    //
    //         console.log(htmlSpisok)
    //     })
}

let but = document.querySelector('#dd').addEventListener('click', load)

