import { IoMdSchool } from "react-icons/io";
import { FaHandshakeAngle } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";



export default function About() {
  return (
    <>
    <div className="flex flex-wrap lg:flex-nowrap justify-center p-5 items-center bg-gray-300 w-full">
      <section className="p-8 lg:w-1/2 w-full justify-center items-center flex-row bg-gray-500 text-white m-3 rounded-lg border-black border-2 lg:h-[435px]">
      <h2 className="text-3xl font-bold text-center m-8">About Us</h2>
      We are a passionate team committed to creating positive change in society. Through community outreach, education, and volunteer efforts, we strive to empower the underprivileged and support sustainable development. Our mission is to bring people together and make a lasting impact through compassion, dedication, and meaningful action.
      </section>
    <section id="about" className="p-5 bg-gray-300 lg:w-1/2 w-full m-3">
      <h2 className="text-3xl font-bold text-center m-8">What we do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-emerald-500 text-white p-5 h-44 flex-row items-center justify-center text-center rounded shadow-md border-gray-200 border-2">
        <FaHandshakeAngle className="text-5xl mx-auto mb-5" />

          <p className="text-lg font-semibold">Our Mission: Empowering Youth</p>
        </div>

        <div className="bg-yellow-500 text-white p-5 h-44 flex-row items-center justify-center text-center rounded shadow-md border-gray-200 border-2">
        <IoMdSchool className="text-5xl mx-auto mb-5"/>
          <p className="text-lg font-semibold">Education & Skill Development</p>
        </div>

        <div className="bg-red-500 text-white p-5 h-44 flex-row items-center justify-center text-center rounded shadow-md border-gray-200 border-2">
        <GiHealthNormal className="text-5xl mx-auto mb-5"/>
          <p className="text-lg font-semibold">Healthcare Access for All</p>
        </div>

        <div className="bg-blue-500 text-white p-5 h-44 flex-row items-center justify-center text-center rounded shadow-md border-gray-200 border-2">
        <HiUserGroup className="text-5xl mx-auto mb-5"/>
          <p className="text-lg font-semibold">Community Engagement & Support</p>
        </div>
      </div>
    </section>
    </div>
    </>
  );

}
