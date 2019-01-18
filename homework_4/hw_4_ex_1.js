const {Observable} = require('rxjs')
const os = require('os')
console.log('Checking your system...');
const ob = Observable.create(observer => {
    let isSuccess = true;
    const memGB = (((os.totalmem()/1024)/1024)/1024);
    if(memGB<4) {
        isSuccess = false;
        observer.next('This app needs atleast 4GB of ram');
    }
    const coreInfo = os.cpus();
    const numOfCores = coreInfo.length;
    if(numOfCores<2) {
        isSuccess = false;
        observer.next('Processor is not supported');
    }

    if(isSuccess){
        observer.next('System is checked successfully');
    }

});

ob.subscribe(value => console.log(value));
// console.log(memGB);
// console.log(numOfCores);



