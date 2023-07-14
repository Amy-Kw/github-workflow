// Only Odd


// create variables for  # in input arrays
// //Input Arrays	                           Expected Results
// [2, 4, 6, 8, 11, 20, 15, 22]	                   [ 11, 15]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	               [1, 3, 5, 7, 9]
// [70, 42, 55, 81, 21, 91, 34]	                   [55, 81, 21, 91]
// [2, 4, 6, 8, 10, 11, 12] 	                   [11]
//make the variable into a string
//create a for loop array statement
// make it so that only odd number be spit out as result


// const num = [2, 4, 6, 8, 11, 20, 15, 22];
// const odd =[];

// for (let index = 0; index <= num.length; index++) {
//     if (num [index]% 2 === 1) {
//         odd.push(num[index])
//     }
// }
// console.log(odd)


// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const odd =[];

// for (let index = 0; index <= num.length; index++) {
//     if (num [index]% 2 === 1) {
//         odd.push(num[index])
//     }
// }
// console.log(odd)


// const num = [70, 42, 55, 81, 21, 91, 34];
// const odd =[];

// for (let index = 0; index <= num.length; index++) {
//     if (num [index]% 2 === 1) {
//         odd.push(num[index])
//     }
// }
// console.log(odd)

// const num = [2, 4, 6, 8, 10, 11, 12];
// const odd =[];

// for (let index = 0; index <= num.length; index++) {
//     if (num [index]% 2 === 1) {
//         odd.push(num[index])
//     }
// }
// console.log(odd)



//Vowel versus Consonant


//create variables for the arrays
// Input Arrays	                                    Expected Results
// "hello"	                                        "hello has 3 consonants and 2 vowels"
// "ukelele"	                                    "ukelele has 3 consonants and 4 vowels"
// "awesome"	                                    "awesome has 3 consonants and 4 vowels"
// "onomonopia"                                  	"onomonopia has 4 consonants and 6 vowels"
// "textbook"	                                    "textbook has 5 consonants and 3 vowels"
//create two variables that keep track of the number of consonants and vowels
//use a loop and have it spit out lowercase letter
//use length to count how many consonants and vowels the string has


// const word = "hello";
// let v =0
// let c = 0

// for (let index = 0; index < word.length; index++) {
//     if (word [index] === "a" || word [index] === "e" || word [index] === "i" || word [index] === "o" || word [index] === "u" ) {
//         v++}
//     else {c++
//     }
// }

// console.log(`hello ` + `has ` + c + ` Constants `  + `and `  + v + ` Vowels`)


// const word = "ukelele";
// let v =0
// let c = 0

// for (let index = 0; index < word.length; index++) {
//     if (word [index] === "a" || word [index] === "e" || word [index] === "i" || word [index] === "o" || word [index] === "u" ) {
//         v++}
//     else {c++
//     }
// }

// console.log( word  + ` has ` + c + ` Constants `  + `and `  + v + ` Vowels`)


// const word = "awesome";
// let v =0
// let c = 0

// for (let index = 0; index < word.length; index++) {
//     if (word [index] === "a" || word [index] === "e" || word [index] === "i" || word [index] === "o" || word [index] === "u" ) {
//         v++}
//     else {c++
//     }
// }

// console.log( word  + ` has ` + c + ` Constants `  + `and `  + v + ` Vowels`)


// const word = "onomonopia" ;
// let v =0
// let c = 0

// for (let index = 0; index < word.length; index++) {
//     if (word [index] === "a" || word [index] === "e" || word [index] === "i" || word [index] === "o" || word [index] === "u" ) {
//         v++}
//     else {c++
//     }
// }

// console.log( word  + ` has ` + c + ` Constants `  + `and `  + v + ` Vowels`)



// const word = "textbook" ;
// let v =0
// let c = 0

// for (let index = 0; index < word.length; index++) {
//     if (word [index] === "a" || word [index] === "e" || word [index] === "i" || word [index] === "o" || word [index] === "u" ) {
//         v++}
//     else {c++
//     }
// }

// console.log( word  + ` has ` + c + ` Constants `  + `and `  + v + ` Vowels`)





//Reverse Array




//create a loop
//create a array the reverse the order of the input array
//create a variable for the input array
//Input Arrays	                                         Expected Results
// [1, 2, 3]	                                         [3, 2, 1]
// [1, 3, 5, 7, 9, 11]	                                 [11, 9, 7, 5, 3, 1]
// [20, 50, 30, 60, 200]	                             [200, 60, 30, 50, 20]
// [1, -1, 2, -3, 5, -8, 13]	                         [13, -8, 5, -3, 2, -1, 1]


// const num = [1, 2, 3];
// let r =num.reverse();

// console.log(r)

// const num = [1, 2, 3];
// let r =[];

// for (let index = num.length -1; index >= (0); index--) {
//         r.push(num [index])
// }
// console.log(r)


// const num = [1, 3, 5, 7, 9, 11]	;
// let r =[];

// for (let index = num.length -1; index >= (0); index--) {
//         r.push(num [index])
// }
// console.log(r)


// const num = [20, 50, 30, 60, 200]		;
// let r =[];

// for (let index = num.length -1; index >= (0); index--) {
//         r.push(num [index])
// }
// console.log(r)


// const num = [1, -1, 2, -3, 5, -8, 13]		;
// let r =[];

// for (let index = num.length -1; index >= (0); index--) {
//         r.push(num [index])
// }
// console.log(r)




//FizzBuzz




//create a for loop prints 1-100, each have there own line
//create an if/else statement that say multiple of 3 print fizz and multiple of 5 print buzz and both 3 and 5 print fizzbuzz



for ( let i = 1; i <= 100; i++) {
    if  (i% 3 === 0 && i% 5=== 0) {
        console.log ("fizzbuzz")
        }
    
    else if( i % 3 === 0) {
        console.log ("fizz")
    }
    else if ( i% 5 === 0) {
        console.log ("buzz")
    }
    else {
       console.log (i)
    }
}


