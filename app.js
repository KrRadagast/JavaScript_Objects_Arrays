// console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const arr1 = [32, 33, 65, 67];
let sum = 0;

arr1.forEach((value) => {
  sum += value;
  console.log(sum);
});
//Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
const book = {
  title: "Lord of the rings",
  author: "JRR TOLKIEN",
  noOfPages: 479,
  haveRead: true,
  readCount: 2,
  info: function () {
    return `${this.title} by ${this.author}, number of pages
            ${this.noOfPages}, read ${this.readCount} times`;
  },
};

book.info();

console.log(book.info());

let sentence = "The quick brown fox jumps over the lazy dog";
// let letters=sentence

// for(let i=letters.length-1; i>=0; i--){
//     console.log(letters[i]);
//}
function reverseword(sentence) {
  let result = [];
  let words = sentence.split(" ");
  //console.log("these are the words splilt "+words);
  for (let i = 0; i < words.length; i++) {
    //let reverseWord=words.join(``);
    let letters = words[i].split("");
    //console.log("here are the letters split ",letters)
    for (let j = letters.length - 1; j >= 0; j--) {
      result.push(letters[j]);
      // console.log("this is after the push for result",result)
    }
    result.push(" ");
  }
  //console.log("this is result after the push",result)
  return result.join("");
}
console.log(reverseword(sentence));

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let head1 = csvData.split("\n")[0].split(",")[0];
let head2 = csvData.split("\n")[0].split(",")[1];
let data = csvData.split("\n").slice(1);
//console.log(head1);
let hobbit = [];
const myObj = {
  [head1]: "",
  [head2]: "",
};
data.forEach((val) => {
  let dataVal = val.split(",");
  //console.log(head1);
  let dataObj = Object.create(myObj);
  dataObj[head1] = dataVal[0];
  dataObj[head2] = dataVal[1];
  hobbit.push(dataObj);
});
console.log(hobbit);
