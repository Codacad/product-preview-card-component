import ProductImageDesktop from "./assets/images/image-product-desktop.jpg";
import ProductImageMobile from "./assets/images/image-product-mobile.jpg";
import Cart from './assets/images/icon-cart.svg'
import "./App.css";
function App() {
  return (
    <>
      <div className="app min-h-[100vh] bg-appBackground flex flex-col md:justify-center items-center font-Fraunces md:p-0 p-2">
        <div className="product-review-component bg-reviewComponentBackground md:grid md:grid-cols-2 m-auto rounded-md">
          <div className="img rounded-l-md">
            <img src={ProductImageDesktop} className="rounded-l-md hidden md:block w-full h-full" alt="Product Image" />
            <img src={ProductImageMobile} className="rounded-l-md block md:hidden w-full h-full" alt="Product Image" />
          </div>
          <div className="text-content py-8 px-10 flex flex-col justify-between gap-4">
            <h3 className="font-sm font-Montserrat uppercase text-darkGrayishBlue tracking-[.2rem] font-semibold">Perfume</h3>
            <h1 className="text-4xl font-Fraunces font-extrabold text-veryDarkBlue">Gabrielle Essence Eau De Parfum</h1>
            <p className="text-sm font-medium font-Montserrat text-darkGrayishBlue leading-[1.8]">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="price grid grid-cols-2 items-center">
              <h2 className="text-darkCyan font-Montserrat text-2xl font-extrabold">$149.99</h2>
              <span className="text-darkGrayishBlue line-through flex justify-center"><span>$169.99</span></span>
            </div>
            <button className="bg-darkCyan text-white p-3 rounded-lg font-Montserrat font-bold">             
              <span className="flex justify-center text-sm"> <img className="mr-2" src={Cart} alt="Cart" /> Add to Cart</span>
            </button>
          </div>
        </div>
        <div className="attribution text-sm pt-2 md:pt-2 font-Montserrat">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Codacad" className="text-xl text-darkCyan font-bold">Mohd Rizwan</a>.
        </div>
      </div>
    </>
  );
}

export default App;
