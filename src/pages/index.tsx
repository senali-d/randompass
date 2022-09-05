import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FiRefreshCcw } from 'react-icons/fi'
import { MdContentCopy } from 'react-icons/md'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { generatePassword } from '../utils/util'

const Home: NextPage = () => {
  const [password, setPassword] = useState<string>('')
  const [size, setSize] = useState<number>(8)
  const [haveUppercase, setHaveUppercase] = useState<boolean>(true)
  const [haveLowercase, setHaveLowercase] = useState<boolean>(true)
  const [haveNumber, setHaveNumber] = useState<boolean>(true)
  const [haveSymbol, setHaveSymbol] = useState<boolean>(true)
  const [isCopied, setIsCopied] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  
  useEffect(() => {
    const pass = generatePassword(size, haveUppercase, haveLowercase, haveNumber, haveSymbol)
    setPassword(pass)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    switch (name) {
      case "password":
        setPassword(value)
        break
      case "passwordSize":
        setSize(parseInt(value))
        break
      default:
        break
    }
  }

  const reloadNewPassword = () => {
    setIsClicked(true)
    
    const pass = generatePassword(size, haveUppercase, haveLowercase, haveNumber, haveSymbol)
    setPassword(pass)
    setTimeout(() => {
      setIsClicked(false)
    }, 1000);
  }

  const copyPassword = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    switch(name) {
      case "uppercase":
        setHaveUppercase(checked)
        setPassword(generatePassword(size, checked, haveLowercase, haveNumber, haveSymbol))
        break
      case "lowercase":
        setHaveLowercase(checked)
        setPassword(generatePassword(size, haveUppercase, checked, haveNumber, haveSymbol))
        break
      case "number":
        setHaveNumber(checked)
        setPassword(generatePassword(size, haveUppercase, haveLowercase, checked, haveSymbol))
        break
      case "symbol":
        setHaveSymbol(checked)
        setPassword(generatePassword(size, haveUppercase, haveLowercase, haveNumber, checked))
        break
      default:
        break
    }
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
            <div className="w-full max-w-md mx-auto">
              <div className="flex items-center border-b border-[#ffffff] py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none" name="password" type="text" value={password} onChange={handleChange} aria-label="Password"/>
                <button 
                  className={`flex-shrink-0 border-transparent border-4 text-sm py-1 px-2 rounded ${isClicked ? 'text-white hover:text-[#ffffffcc] rotate-180 transition-transform' : 'text-[#0063B2] hover:text-[#0063B2cc]'}`}
                  type="button"
                  onClick={reloadNewPassword}
                >
                  <FiRefreshCcw size={20} />
                </button>
                <CopyToClipboard text={password} onCopy={copyPassword}>
                  <button 
                    className={`flex-shrink-0 border-transparent border-4 text-sm py-1 px-2 rounded ${isCopied ? 'text-white' : 'text-[#0063B2] hover:text-[#0063B2cc]'}`} 
                    type="button" 
                    disabled={isCopied ? true : false}
                  >
                    <MdContentCopy size={20} />
                  </button>
                </CopyToClipboard>
              </div>

              <div className="mt-10 p-3 bg-indigo-50 w-full">
                <p className="text-left pb-4">Settings</p>

                <div className="mb-5">
                  <label htmlFor="steps-range" className="flex mb-1 text-sm font-medium text-gray-700">Password Length: {size}</label>
                  <input id="steps-range" name="passwordSize" type="range" min="8" max="32" value={size} step="2" onChange={handleChange} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
                </div>

                <div className="text-left my-2">
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="uppercase" id="uppercase" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-[#9CC3D5] border-4 appearance-none cursor-pointer" checked={haveUppercase} onChange={handleSwitch}/>
                    <label htmlFor="uppercase" className="toggle-label block overflow-hidden h-6 rounded-full bg-[#9CC3D5] cursor-pointer"></label>
                  </div>
                  <label htmlFor="uppercase" className="text-[15px] text-gray-700">Uppercase.</label>
                </div>

                <div className="text-left my-2">
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="lowercase" id="lowercase" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-[#9CC3D5] border-4 appearance-none cursor-pointer" checked={haveLowercase} onChange={handleSwitch}/>
                    <label htmlFor="lowercase" className="toggle-label block overflow-hidden h-6 rounded-full bg-[#9CC3D5] cursor-pointer"></label>
                  </div>
                  <label htmlFor="lowercase" className="text-[15px] text-gray-700">Lowercase.</label>
                </div>

                <div className="text-left my-2">
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="number" id="number" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-[#9CC3D5] border-4 appearance-none cursor-pointer" checked={haveNumber} onChange={handleSwitch}/>
                    <label htmlFor="number" className="toggle-label block overflow-hidden h-6 rounded-full bg-[#9CC3D5] cursor-pointer"></label>
                  </div>
                  <label htmlFor="number" className="text-[15px] text-gray-700">Number.</label>
                </div>

                <div className="text-left my-2">
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="symbol" id="symbol" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-[#9CC3D5] border-4 appearance-none cursor-pointer" checked={haveSymbol} onChange={handleSwitch}/>
                    <label htmlFor="symbol" className="toggle-label block overflow-hidden h-6 rounded-full bg-[#9CC3D5] cursor-pointer"></label>
                  </div>
                  <label htmlFor="symbol" className="text-[15px] text-gray-700">Symbol.</label>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Home
