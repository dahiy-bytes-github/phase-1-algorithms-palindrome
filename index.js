function isPalindrome(word) {
 let reversedWord = reverse(word)
 return reversedWord === word
}
function reverse(word){
  return word.split("").reverse().join("")
}

/* 
  Add your pseudocode here
  function isPalindrome(string)
  if reversedString is same as the input
  return true
  else false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

}

module.exports = isPalindrome;
