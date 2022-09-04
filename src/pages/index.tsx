import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import { generatePassword } from '../utils/util'

const Home: NextPage = () => {
  const [password, setPassword] = useState<string>('')
  const [size, setSize] = useState<number>(8)
  const [haveUppercase, setHaveUppercase] = useState<boolean>(true)
  const [haveLowercase, setHaveLowercase] = useState<boolean>(false)
  const [haveNumber, setHaveNumber] = useState<boolean>(true)
  const [haveSymbol, setHaveSymbol] = useState<boolean>(true)
  
  useEffect(() => {
    const pass = generatePassword(size, haveUppercase, haveLowercase, haveNumber, haveSymbol)
    setPassword(pass)
  }, [])

  return (
    <div>
      <Head>
        <title>randompass</title>
        <meta name="description" content="randompass is radom password generate app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-4 md:px-0 mx-auto max-w-[1080px]">        
        <div className="py-12 md:py-24">
          <div className="flex flex-col text-center w-full mb-5 md:mb-10">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
              {password}
            </h1>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
