import { useState } from "react";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <section id="volunteer" className="flex flex-col md:flex-row w-full h-screen">
      
      
      <div className="w-full md:w-1/2 relative h-64 md:h-auto">
        <img
          src="https://images.pexels.com/photos/6348129/pexels-photo-6348129.jpeg"
          alt="Volunteer"
          className="object-cover w-full h-full"
        />
        
        <div className="absolute inset-0 bg-black opacity-55" />
      </div>

      
      <div className="w-full md:w-1/2 flex items-center justify-center bg-teal-300 p-6">
        <div className="w-full max-w-md bg-white shadow-lg p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-white bg-emerald-500 p-2 rounded">
            Volunteer With Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                Why do you want to volunteer?
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write a short message..."
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
