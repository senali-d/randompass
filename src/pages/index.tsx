import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FiRefreshCcw } from 'react-icons/fi'

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const reloadNewPassword = () => {
    const pass = generatePassword(size, haveUppercase, haveLowercase, haveNumber, haveSymbol)
    setPassword(pass)
  }

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
            <div className="w-full max-w-sm mx-auto">
              <div className="flex items-center border-b border-[#9CC3D5] py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={password} onChange={handleChange} aria-label="Password"/>
                <button className="flex-shrink-0 border-transparent border-4 text-[#9CC3D5] hover:text-[#9CC3D5cc] text-sm py-1 px-2 rounded" type="button" onClick={reloadNewPassword}>
                  <FiRefreshCcw size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
