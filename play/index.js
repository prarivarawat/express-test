//write  a js function that converts number into proper format
//Eg: 10000=> 10,000
//Eg: 100000=>100,000;
//Eg: 1000000=>1000,000


//library function
//argument pass in library function
//destructure


const {numberFormatter}= require("./library");

const getFormattedNumber = (number)=>{
    const resp = numberFormatter(number);
    return resp;
};
 const result = getFormattedNumber(10000);
 console.log({result});