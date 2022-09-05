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
  const [haveLowercase, setHaveLowercase] = useState<boolean>(false)
  const [haveNumber, setHaveNumber] = useState<boolean>(true)
  const [haveSymbol, setHaveSymbol] = useState<boolean>(true)
  const [isCopied, setIsCopied] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  useEffect(() => {
    const pass = generatePassword(size, haveUppercase, haveLowercase, haveNumber, haveSymbol)
    setPassword(pass)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
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
                <button 
                  className={`flex-shrink-0 border-transparent border-4 text-[#0063B2] hover:text-[#0063B2cc] text-sm py-1 px-2 rounded ${isClicked && 'rotate-180 transition-transform'}`}
                  type="button" 
                  onClick={reloadNewPassword}
                >
                  <FiRefreshCcw size={20} />
                </button>
                <CopyToClipboard text={password} onCopy={copyPassword}>
                  <button 
                    className={`flex-shrink-0 border-transparent border-4 text-sm py-1 px-2 rounded ${isCopied ? 'text-[#9CC3D5]' : 'text-[#0063B2] hover:text-[#0063B2cc]'}`} 
                    type="button" 
                    disabled={isCopied ? true : false}
                  >
                    <MdContentCopy size={20} />
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
