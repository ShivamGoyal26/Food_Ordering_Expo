function stringScramble(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let str1Chars = {};

  for (let char of str1) {
    if (str1Chars[char]) {
      str1Chars[char] = str1Chars[char] + 1;
    } else {
      str1Chars[char] = 1;
    }
  }

  for (let char of str2) {
    if (!str1Chars[char]) {
      return false;
    }
    str1Chars[char] = str1Chars[char] - 1;
    console.log(str1Chars);
  }
  console.log(str1Chars);
  return true;
}

console.log(stringScramble("lleho", "hello"));
