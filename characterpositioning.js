function countLetters(str){
  str = str.split(' ').join("");
  var objLetterCount = {};
  for (var i = 0; i < str.length; i++){

  var letterPosition = 0;
  var arrPosition = [];
  var letterCount = 0;
    for (var j = 0; j < str.length; j++){
      if (str[i] === str[j]){
        //letterPosition = letterPosition + ', ' + j;
        letterPosition = j
        letterCount += 1;
    arrPosition.push(letterPosition);

      }
    }
    objLetterCount[str[i]] = arrPosition;
  }
  return objLetterCount;
}

console.log(countLetters("lighthouse in the house"));