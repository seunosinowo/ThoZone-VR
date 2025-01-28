import { CheckCircle2} from "lucide-react"
import code from "../assets/code.jpg"
import { stepItems } from "../constants"

export const WorkFlow = () => {
  return (
    <div className="mt-12" id="workflow">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mt-6 mb-4 tracking-wide">A Step-by-Step Guide {""}
            <span className="bg-gradient-to-r from-green-400 to-green-800 text-transparent bg-clip-text">to Immersive Learning</span>
        </h2>

        <div className="lg:flex justify-center md:w-full w-full">
            <div className="flex p-2 w-full lg:w-1/2">
                <img src={code} alt="Code" />
            </div>

            <div className="pt-12 w-full lg:w-1/2">
                {stepItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>

                        <div>
                            <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                            <p className="text-[16px] text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
  )
}
