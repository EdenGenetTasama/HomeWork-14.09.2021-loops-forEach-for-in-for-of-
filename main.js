/*Loops*/ 


/* forEach loop*/
// נתון מערך של מחרוזות הדפס כל אחד מהאלמנטים ואת האינדקס

let arrayOfStr = ["Eden" , "Yafit" , "Keren" , "Tikva"];

// arrayOfStr.forEach((element , index)=>{
//     console.log(element, index);
// })


/**self=Try/ */
// let arrayOfObject = [
//     {id: 1 },
//     {id: 2 },
//     {id: 3},
//     {id: 4},

// ]



// arrayOfObject.forEach((element,index)=>{
//     console.log(element.id , index);
// })


// נתון מערך של מספרים הדפס כל אחד מהאלמנטים ואת האינדקס
let arrayOfNumber = [2,4,5,8,10,7,14,13,5];

// arrayOfNumber.forEach((number , index)=>{
//     console.log(number , index);
// })

// תון מערך של מספרים על כל אלמנט בדוק האם הוא זוגי והדפס את התוצאה(כן/לא)

// arrayOfNumber.forEach((number)=>{
//     if(number % 2 == 0){
//         console.log("double");
//     }
//     else{
//         console.log("Not double");
//     }
// })


// ===================================================================================
/* for of loop*/
// תון מערך של אובייקטים הדפס את כל האובייקטים

// let arrayOfObject=[
//     {id: 1 ,name:"Eden"},
//     {id: 2 ,name:"Yafit"},
//     {id: 3 ,name:"Keren"},
//     {id: 4 ,name:"Tikva"}
// ]




// for(const item of arrayOfObject){
//     console.log(item.name);
// }

/*========================================================================================*/
/*for in loop*/


// נתון אובייקט הדפס את כל ה- key
// הדפס את כל ה- value

let object = {
    id: 316260 , 
    name: "eden", 
    age: 25,
    city :"Rehovot", 
    yearOfBirth :1996
}


// for(const key in object){
//     // console.log(`key: ${key}, value: ${object[key]}`);
//     console.log(key);
//     console.log(object[key]);
// }
/*========================================================================================*/
// עבודת בית :

// שאלה ראשונה

// נתון מערך של כתבות: כותרת, מחבר, תאריך
//  הדפס את כל הכתבות בעזרת forEach

let arrayOfArticle = [
    {header: "HeaderOne" , writer: "Eden" , date: "12.08.2021" },
    {header: "HeaderTwo" , writer: "Yafit" , date: "10.01.2005" },
    {header: "HeaderThree" , writer: "Eden" , date: "12.08.2021" },
]

// arrayOfArticle.forEach((element)=>{
// console.log(element);
// })

// הדפס את כל הכתבות בעזרת for-of

// for(const item of arrayOfArticle){
//     console.log(item);
// }


// שאלה שניה 

// נתון מערך של אובייקטים
//  הדפס את כל ה- key וה-value של כל האובייקטים- שילוב לולאה + forIN

let arrayOfObject=[
    {id: 1 ,name:"Eden"},
    {id: 2 ,name:"Yafit"},
    {id: 3 ,name:"Keren"},
    {id: 4 ,name:"Tikva"}
]

// for (let i = 0; i < arrayOfObject.length; i++) {
//     for(const keyWord in arrayOfObject[i]){
//         // console.log(`${keyWord}:${arrayOfObject[i].id} , ${keyWord}:${arrayOfObject[i].name}  `);
//         console.log(keyWord);
//     }
// }
    

// שאלה שלישית:

// נתון מערך של 4 ספרים: שם, מחבר ומחיר:

let arrayOfNumbers=[
    {book: "Harry Poter" ,writer: "Eden" , price: 100},
    {book: "romeo and juliet" ,writer: "Yafit" , price: 90},
    {book: "Flashback" ,writer: "Keren" , price: 88},
    {book: "Terror" ,writer: "Tikva" , price: 120}
]

// הדפס את כל הספרים

for (const item of arrayOfNumbers) {
    console.log(item.book);
}
// הדפס את כל המחברים של הספרים

for (const item of arrayOfNumbers) {
    console.log(item.writer);
}


// שאלה רביעית:

// נתון מערך של מספרים-  הדפס את סכום המערך:
//  בעזרת forEach
//  בעזרת for-of

let arrayOfNumbersTwo = [ 
    12,8,40,5,71,10
]

let sum = 0 ;
arrayOfNumbersTwo.forEach((element)=>{
    sum += element
})
console.log(sum);

let sumTwo = 0;
for (const item of arrayOfNumbersTwo) {
    sumTwo += item
}
console.log(sumTwo);

