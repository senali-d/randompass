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

export const generatePassword = (size: number, haveUppercase: boolean, haveLowercase: boolean,
  haveNumber: boolean, haveSymbol: boolean) => {
  const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const numbers = ['0','1','2','3','4','5','6','7','8','9']
  const symbols = "~`!@#$%^&*()_-+={[}]|:;\"'<,>.?/".split('')
  
  let uppercaseSize = 0
  let lowercaseSize = 0
  let numberSize = 0
  let symbolSize = 0
  
  if(haveUppercase && !haveLowercase && !haveNumber && !haveSymbol) {
    uppercaseSize = size
  }
  if(!haveUppercase && haveLowercase && !haveNumber && !haveSymbol) {
    lowercaseSize = size
  }
  if(!haveUppercase && !haveLowercase && haveNumber && !haveSymbol) {
    numberSize = size
  }
  if(!haveUppercase && !haveLowercase && !haveNumber && haveSymbol) {
    symbolSize = size
  }

  if(haveUppercase && haveLowercase && !haveNumber && !haveSymbol) {
    uppercaseSize = size/2
    lowercaseSize = size/2
  }
  if(haveUppercase && !haveLowercase && haveNumber && !haveSymbol) {
    uppercaseSize = size/2
    numberSize = size/2
  }
  if(haveUppercase && !haveLowercase && !haveNumber && haveSymbol) {
    uppercaseSize = size/2
    symbolSize = size/2
  }

  if(!haveUppercase && haveLowercase && haveNumber && !haveSymbol) {
    lowercaseSize = size/2
    numberSize = size/2
  }
  if(!haveUppercase && haveLowercase && !haveNumber && haveSymbol) {
    lowercaseSize = size/2
    symbolSize = size/2
  }

  if(!haveUppercase && !haveLowercase && haveNumber && haveSymbol) {
    numberSize = size/2
    symbolSize = size/2
  }

  if(haveUppercase && haveLowercase && haveNumber && !haveSymbol) {
    uppercaseSize = size/2
    lowercaseSize = Math.ceil(size*(30/100))
    numberSize = Math.floor(size*(20/100))
  }
  if(haveUppercase && haveLowercase && !haveNumber && haveSymbol) {
    uppercaseSize = size/2
    lowercaseSize = Math.ceil(size*(30/100))
    symbolSize = Math.floor(size*(20/100))
  }
  if(haveUppercase && !haveLowercase && haveNumber && haveSymbol) {
    uppercaseSize = size/2
    numberSize = Math.ceil(size*(30/100))
    symbolSize = Math.floor(size*(20/100))
  }
  if(!haveUppercase && haveLowercase && haveNumber && haveSymbol) {
    lowercaseSize = size/2
    numberSize = Math.ceil(size*(30/100))
    symbolSize = Math.floor(size*(20/100))
  }

  if(haveUppercase && haveLowercase && haveNumber && haveSymbol) {
    uppercaseSize = size/4
    lowercaseSize = size/4
    numberSize = size/4
    symbolSize = size/4
  }

  let password = []
  if(haveUppercase) {
    for(let i=0; i<uppercaseSize; i++) {
      const random = Math.floor(Math.random()*26)
      password.push(uppercase[random])
    }
  }
  if(haveLowercase) {
    for(let i=0; i<lowercaseSize; i++) {
      const random = Math.floor(Math.random()*26)
      password.push(lowercase[random])
    }
  }
  if(haveNumber) {
    for(let i=0; i<numberSize; i++) {
      const random = Math.floor(Math.random()*10)
      password.push(numbers[random])
    }
  }
  if(haveSymbol) {
    for(let i=0; i<symbolSize; i++) {
      const random = Math.floor(Math.random()*10)
      password.push(symbols[random])
    }
  }

  shuffle(password)
  return password.join('')
}