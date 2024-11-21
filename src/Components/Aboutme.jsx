import aboutImg from "../asses"
import {ABOUT_TEXT} from ".."
const Aboutme = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
    <h1 className="my-20 text-center text-4xl">About 
    <span className="text-neutral-500">Me</span>
    </h1>
    <div className="flex flex-wrap">
       <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
            <img className="round-2xl src={aboutImg} alt="Aboutme" />
        </div>
       </div> 
       <div className="w-full lg:w-1/2">
        <div claassName=" flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
        </div>
       </div>
    </div>

    </div>
  )
};

export default Aboutme