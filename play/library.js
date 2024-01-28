const numberFormatter =(num)=>{
    const string = String(num);//"10000"
    const separatedArr = string.split("");//["1","0"....]
    let count = 0;
    let newString="";
    console.log({separatedArr});
    for (let i=0; i < separatesArr.length; i++){
        newString  += separatedArr.pop();//"000,01"
        count ++;
        if(count ===3){
            newString += ",";
            count = 0;

        }
        console.log(i, count);
    }
console.log({newString});
newString = newString.split("").reverse().join();//10,000
return newString;
};
module.exports={numberFormatter};