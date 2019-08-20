console.log('main start > ');

// new Promise((resolve, reject) => {
//     console.log('micro1 strat >');
//     resolve();
// }).then(() => {
//     console.log('micro1 end >');
// });

// setTimeout(() => {
//     console.log('macro1 start > macro end')
// }, 0)


setTimeout(() => {
    console.log('macro1 start > ');
    Promise.resolve().then(() => {
        console.log('micro1 >');
    });
    Promise.resolve().then(() => {
        console.log('micro2 >');
    })
    console.log('macro1 end ');
}, 0)

setTimeout(() => {
    console.log('macro2 start > ');
    Promise.resolve().then(() => {
        console.log('micro3 >');
    });
    Promise.resolve().then(() => {
        console.log('micro4 >');
    })
    console.log('macro2 end ');
}, 0)