const shuffle = (array: string[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const generatePassword = () => {
  const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const numbers = ['0','1','2','3','4','5','6','7','8','9']
  const symbols = "~`!@#$%^&*()_-+={[}]|:;\"'<,>.?/".split('')

  let password = []
  
  for(let i=0; i<2; i++) {
    const random = Math.floor(Math.random()*26)
    password.push(uppercase[random])
  }
  for(let i=0; i<3; i++) {
    const random = Math.floor(Math.random()*26)
    password.push(lowercase[random])
  }
  for(let i=0; i<2; i++) {
    const random = Math.floor(Math.random()*10)
    password.push(numbers[random])
  }
  for(let i=0; i<1; i++) {
    const random = Math.floor(Math.random()*10)
    password.push(symbols[random])
  }

  shuffle(password)
  return password.join('')
}