import logo from "../src/assets/logo.png"

const NavBar = () => {
  return (
    

    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
            <div className="flex justify-center items-center">
                <div className="flex items-center flex-shrink-0"> 
                    <img className="h-100 w-100 mr-auto" src={logo} alt="logo" />
                    <span className="text-xl underline">ThoZoneVR</span>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default NavBar;

