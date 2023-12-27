// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized
var str = "the quick brown fox jumped over the lazy dog";
var titleCase = function(str) {
    let result = '';
    const firstChar = str[0].toUpperCase();
   // console.log(firstChar)
for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const next = str[i + 1]
    if (currentChar === ' ') {
       result += next.toUpperCase();
    }
    console.log(result)
}
return result;
};
titleCase(str);
