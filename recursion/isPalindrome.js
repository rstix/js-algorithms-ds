// isPalindrome

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

const alpha = 'abcdefghijklmnopqrstuvwxyz';

const cleanUpString = (s) => {
  return s
    .split('')
    .filter((c) => alpha.includes(c.toLowerCase()))
    .join('')
    .toLowerCase();
};

const recursivePalidrom = (s) => {
  if (!s.length) return true;

  const first = s[0];
  const last = s[s.length - 1];
  if (first !== last) return false;

  return recursivePalidrom(s.slice(1, -1));
};

function isPalindrome(s) {
  return recursivePalidrom(cleanUpString(s));
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('0P'));
