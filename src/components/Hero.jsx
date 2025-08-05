import Navbar from "./Navbar";
export default function Hero() {
    return (
      
      <section
        id="home"
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
          "url('https://images.pexels.com/photos/9968379/pexels-photo-9968379.jpeg?_gl=1*vuablr*_ga*MTUwMzU2NTg0MS4xNzQ1OTEwNDc5*_ga_8JE65Q40S6*czE3NTQzMTA0NzckbzMkZzEkdDE3NTQzMTA4MjQkajU5JGwwJGgw')",
          
        }}
        >
         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
         <div className="relative z-10 text-center max-w-xl mx-4 top-0 px-5">
          <h1 className="text-3xl lg:text-5xl md:text-5xl font-bold mb-5 px-2">Bringing <span className="text-emerald-300 text-5xl lg:text-7xl md:text-7xl">HOPE</span> to Communities</h1>
          <p className="text-lg mb-6">
            Join us in creating a better world through education, health, and empowerment.
          </p>
          <a
            href="#volunteer"
            className="bg-emerald-400 text-white px-10 py-4 font-semibold rounded hover:bg-emerald-500 text-xl"
          >
           Join us
          </a>
        </div>
      </section>
    

    );
  }
  