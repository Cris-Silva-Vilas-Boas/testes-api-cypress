it('nada agora', () => {})


const getSomenthing = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13)
        }, 1000)
    })
}

const system = () => {
    console.log('init')
    const prom = getSomenthing();
    prom.then(some=> {
        console.log("Something is" + some)
    })
    console.log('end')
}

system();