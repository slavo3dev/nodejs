
const promisData = () => {

    const newPromise = new Promise((res, rej) => {
        setTimeout(() => {
            res("Done it's working")
        }, 1000)
    })

    return newPromise
}

setTimeout(() => {
    console.log("Times is done");
    promisData().then(data => console.log(data))
}, 5000)

