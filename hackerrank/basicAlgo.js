function decryptPassword(s) {
  // Write your code here
  let mutatedS = '';
  let len = s.length;

  for (let i = 0; i < len; i++) {
    if (/[a-z]/.test(s[i]) && /[A-Z]/.test(s[i + 1])) {
      mutatedS += s[i + 1] + s[i] + '*';
    } else if (/[1-9]/.test(s[i]) && i < len) {
      mutatedS = mutatedS.split('');
      mutatedS.push(0);
      mutatedS.unshift(s[i]);

      mutatedS = mutatedS.join('');
    } else {
      mutatedS += s[i];
    }
  }

  return mutatedS;
}

console.log(decryptPassword('lBgKu1'));

// lBgKu1

// 43Ah*ck0rr0nk
// hAck3rr4nk
