
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
sleep(6000).then(()=>console.log(1))