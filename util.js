function getRandomavalue(array){

}

function doSomeHeavyTask() {
    const ms  = getRandomavalue([100,150,200,300,400,5000,1222,3443,23443,2222]);
    const shouldThrowError = getRandomavalue([1,2,3,4,5,6,7,8]) === 8;
    if(shouldThrowError) {
        const randomError = getRandomavalue([
            "DB PAYMENT FAILURE",
            "DB SERVER IS DOWN",
            "ACCESS DENIED",
            "NOT FOUND ERROR"
        ]);
            throw new Error(randomError);
    }
    return new Promise((resolve, reject) => setTimeout(() =>resolve(ms).ms));
}

module.exports ={ doSomeHeavyTask };