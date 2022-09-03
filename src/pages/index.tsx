import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import shuffle from '../utils/shuffle'

const Home: NextPage = () => {
  const [password, setPassword] = useState('')
  
  useEffect(() => {
    Gen()
  }, [])

  const Gen = () => {
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
    setPassword(password.join(''))
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl text-red-600 font-bold underline">
        Hello world!
      </h1>
      <p>{password}</p>
    </div>
  )
}

export default Home
