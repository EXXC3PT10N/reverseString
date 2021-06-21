const reverse = (input) => {
  const words = [];
  const otherChars = [];
  const polishChars = "ĄĆĘŁŃÓŚŹŻąćęłńóśźż".split('');

  let output = "";
  let wordCount = 0;
  let isLastCharLetter = true;

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
  
    if ((c.charCodeAt(0) > 64 && c.charCodeAt(0) < 91) || (c.charCodeAt(0) > 96 && c.charCodeAt(0) < 123) || polishChars.includes(c)) {
      if (words[wordCount] != null)
        words[wordCount].push(c);
      else {
        words[wordCount] = [];
        words[wordCount].push(c);
      }
      isLastCharLetter = true;
    } else {
      if (isLastCharLetter) {
        otherChars.push([c]);
        wordCount++;
  
      } else {
        otherChars[otherChars.length - 1].push(c);
      }
      isLastCharLetter = false;
    }
  
  }
  
  
  words.reverse();
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      output += words[i][j];
    }
    if (otherChars.length > i) {
      for (let j = 0; j < otherChars[i].length; j++) {
        output += otherChars[i][j];
      }
    }
  }
  // console.log(words);
  // console.log(otherChars);
  return output;
}

const s = "Jedenaście,.;  dwa trzy;;-= cztery -=- pięć";
console.log(`input: ${s}`);
console.log(`output: ${reverse(s)}`);

