export default function Footer() {
    return (
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-semibold mb-3">About Hope NGO</h3>
            <p className="text-sm leading-6">
              We are a non-profit organization dedicated to bringing positive change in underprivileged communities through education, health, and volunteer efforts.
            </p>
          </div>
  
         
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#volunteer" className="hover:underline">Volunteer</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
  
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <ul className="text-sm space-y-2">
              <li>Email: contact@hopengo.org</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Guwahati, Assam</li>
            </ul>
          </div>
        </div>
  
        <div className="text-center mt-10 text-xs text-gray-400">
          © {new Date().getFullYear()} Hope NGO. All rights reserved.
        </div>
      </footer>
    );
  }
  