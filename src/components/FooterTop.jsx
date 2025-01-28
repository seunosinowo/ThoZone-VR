import { resourcesLinks, platformLinks, communityLinks } from "../constants"

const FooterTop = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
            <div>
                <h3 className="text-[16px] font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                    {resourcesLinks.map((link, index) => (
                        <li key={index}>
                            <a 
                                className="text-neutral-400 hover:text-white"
                                href = {link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                    </ul>
            </div>

            
            <div>
                <h3 className="text-[16px] font-semibold mb-4">Platform</h3>
                    <ul className="space-y-2">
                    {platformLinks.map((link, index) => (
                        <li key={index}>
                            <a 
                                className="text-neutral-400 hover:text-white"
                                href = {link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                    </ul>
            </div>


        
            <div>
                <h3 className="text-[16px] font-semibold mb-4">Community</h3>
                    <ul className="space-y-2">
                    {communityLinks.map((link, index) => (
                        <li key={index}>
                            <a 
                                className="text-neutral-400 hover:text-white"
                                href = {link.href}>
                                {link.text}
                            </a>
                        </li>
                    ))}
                    </ul>
            </div>
        </div>

        <div className="flex flex-wrap mt-12 w-full items-center justify-center border-neutral-700/80 border-t">
            <h5 className="text-[16px] tracking-wide mt-3 font-extralight text-neutral-200">
                © 2024 Osinowo Oluwaseun</h5>
        </div>

        
    </footer>
  )
}

export default FooterTop
