function swDev() {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl)
        .then((e) => {
            console.warn("Result", e)
        }).catch((e)=>{
            console.warn("Error", e)
        })
}

export default swDev;