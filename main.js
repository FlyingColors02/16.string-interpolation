//String Interpolation

//add 2 no.s
let numValue1=10;
let numValue2=20;
console.log(numValue1+numValue2);//30

//add a no. and string
let strValue1="javascript";
console.log(numValue1+strValue1);//10javascript
//gets concatenates.

//add 2 string(string concatenation)
let strValue2="language"
console.log(strValue1+" "+strValue2);//javascript language
/* mutable (bad practice)*/

//another way to concatenate string is:
//"STRING INTERPOLATION"
console.log(`${strValue1} ${strValue2}`);//javascript language
/*immutable(good practice)*/