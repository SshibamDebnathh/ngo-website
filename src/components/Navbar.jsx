export default function Navbar() {
    return (
      <nav className="bg-black bg-opacity-50 text-white p-4 flex justify-between sticky top-0 z-50">
        <h1 className="text-xl font-bold">HOPE</h1>
        <div className="space-x-4 text-base">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#volunteer">Volunteer</a>
        </div>
      </nav>
    );
  }
  