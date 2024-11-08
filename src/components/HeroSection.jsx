import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-5">
      <h1 className="text-4xl sm:text-2xl md:text-4xl lg:text-7xl text-center tracking-wide">
      Learn without limits in a

      <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
        {" "} virtual world
      </span>
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-">
        Break free from traditional learning limits, unlock endless possibilities and discover a world where curiosity has no bounds.
      </p>

      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-lg">
          Start here
        </a>

        <a href="#" className="border rounded-lg py-3 px-4 ">
          Documentation
        </a>
      </div>

      <div className="flex flex-row justify-center mt-10">
          <video autoPlay loop muted
          className="rounded-lg w-1/2 border border-green-700 shadow-green-400 my-2 mx-2 ">
            <source src={video1} type="video/mp4"/>
            Your Browser does not support the video tag.
          </video>

          <video autoPlay loop muted
          className="rounded-lg w-1/2 border border-green-400 shadow-green-400 mx-2 my-2">
            <source src={video2} type="video/mp4" />
            Your Browser does not support the video tag.
          </video>

      </div>

    </div>
  )
}

export default HeroSection
