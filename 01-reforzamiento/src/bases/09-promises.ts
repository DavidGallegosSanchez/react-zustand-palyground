const myPromise = new Promise( (resolve, reject) => {

    setTimeout( () => {
        // Back my money!!!
        // resolve(100);
        reject('My friend went missing');
    }, 2000); // 2s

})

myPromise.then((myMoney) => {
    console.log(`I have my money ${myMoney}`);
})
.catch((reason) => {
    console.warn(reason);
})
.finally(()=>{
    console.log('Keep working!!!');
});