// reverse

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(s) {
  if (s.length === 0) return '';
  return s[s.length - 1] + reverse(s.slice(0, -1));
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
console.log(reverse('awesome'));
