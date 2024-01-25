//write a js function that convert the following text into ..statement
//raktim is a MERN SRACK teacher . He is teaching in broadway infosys
//raktim is a MERN STACK Teacher . He is..

const textShortner = (string)=> 
string.length > 40 ? string.slice(0, 40).concat("..."): string;

const response = textShortner("Raktim is a MERN STACK Teacher.");
console.log({response});

//write a js function that return boolean when correct monile number is passed 
//Eg: +1522019=> false
//Eg: 9841234444=> true

const findCorrectPhone =(number)=>{
    const stringNum = String(number);
    if(stringNum.length <10|| stringNum.length >10) return false;
    return stringNum.startsWith("98");
};
const result =findCorrectPhone(984122334);
console.log({result});
