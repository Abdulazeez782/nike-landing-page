import { shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalizefont-bold lg:max-w-lg">
            We Provide You <span className="text-coral-red">Super </span>
            <span className="text-coral-red">Quality</span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">Discover footwear that blends bold innovation with timeless design. Each pair is a statement—crafted to redefine comfort and elevate your look</p>
          <p className="mt-6 lg:max-w-lg info-text">Our dedication to details and excellence ensures your satisfaction</p>
          <div className="mt-11">
            <Button label="View details" />
          </div>          
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality