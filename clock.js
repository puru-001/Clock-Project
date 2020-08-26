// let time = document.getElementById('clock')

// function clock () {
//     // console.log (new Date())

//     let date = new Date();  //Date Object
//     // console.log(date)

//     let hours = date.getHours() % 12;
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     // console.log(` ${hours} : ${minutes} : ${seconds} `);
//     time.innerHTML = `<h1>${hours}:${minutes}:${seconds}</h1>`
// }
// clock();

// setTimeout(_=> {
//     document.write(`<h1> Purushottam singh</h1>`)
// }, 5000);
// clearTimeout();
// setInterval(_=> {
//     let date = new Date().toLocaleTimeString();
//     document.write(date)
// },1000);
// clearInterval();



let time = document.getElementById('clock')
function clock () {
    setInterval(_=> {
        let date = new Date();  //Date Object
    let hours = date.getHours() % 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let AmOrPm = date.getHours() > 12 ? 'PM': "AM";   // ? - turnery operataor
    time.innerHTML = `<h1>${hours}:${minutes}:${seconds} ${AmOrPm}</h1>`

    },1000)
}
clock();