import { AiOutlineGithub } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className="fixed z-10 w-full mx-auto bg-indigo-50 border-gray-200 px-2 sm:px-4 py-2.5 shadow">
      <div className="max-w-[1080px] container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center flex-1">
          <a href="/">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-[#0063B2]">randompass</span>
          </a>
        </div>
        <div className="flex md:order-2">
          {/* <button type="button" className="text-white bg-[#0063B2] hover:bg-[#0063B2cc] focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ml-5">Sign In</button> */}
        </div>
        <div>
          <ul className="flex flex-col md:flex-row md:space-x-8 md:text-sm md:font-medium">
          <li>
            <a href="https://github.com/senali-d/codechallenges" target="_blank" className="block py-2 pr-4 pl-3 text-[#0063B2] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#0063B2cc] md:p-0"><AiOutlineGithub size="30" /></a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
