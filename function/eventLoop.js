function task(message){
    let n = 10000000000;
    while(n > 0){
        n--;
    }
    console.log(message);
}
// console.log("Start scripts...");
// task('Call an API');
// console.log('Done');

console.log('Start script...');

setTimeout(()=>{
    task('Download a File.')
}, 1000)

console.log('Done!');