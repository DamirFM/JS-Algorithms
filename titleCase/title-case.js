// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized
var str = "the quick brown fox jumped over the lazy dog";
var titleCase = function (str) {
    let result = [];
    // Let's separate str by ' ', and set hen into array
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        //Let's separate every each str by '', and set hen into array
        const word = words[i].split('');
        //Every first char make UpperCase
        word[0] = word[0].toUpperCase();
        //Assemble every string back to one array
        result.push(word.join(''));
    }
    //Transfer array back to the string
    console.log(result.join(" "))
    return result.join(" ");
};
titleCase(str);
