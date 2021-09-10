var value = 10;
var promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("foo"), 5000);
});

promise.then((test)=>console.log(test)).catch(() => console.log("Gbolf"));