import { BsTelephone } from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useRef, useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
export default function ContactUs() {

  {/* Form */ }
  const sectionRef1 = useRef(null);
  const [visible1, setVisible1] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible1(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef1.current) {
      observer.observe(sectionRef1.current);
    }

    return () => {
      if (sectionRef1.current) {
        observer.unobserve(sectionRef1.current);
      }
    };
  }, []);

  const [formData, setFormData] = useState({
  firstName: "", lastName: "", email: "", phone: "", message: ""
});
const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
};

const handleSubmit = async () => {
  setStatus("sending");
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus("sent");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
};

  return (
    <div className="bg-black">
      <section className="bg-black text-white">

        {/* TOP BANNER IMAGE with NAVBAR on top */}
        <div className="relative w-full h-[369px]">
          <img
            src="/contact-bg1.jpg"
            alt="about banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#666666]/30" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #00000099, #66666600, #000000)' }} />

          {/* Navbar — image ke upar */}
          <div className="fixed top-0 left-0 w-full flex items-center justify-between px-[123px] py-4 z-50">
            <a href="/">
              <img src="/logo.png" className="h-[100px]" />
            </a>
            <div className="flex gap-10 text-white text-[14px] font-inter font-medium">
              <a href="/" className="font-semibold">Home</a>
              <a href="/services">Our Projects</a>
              <a href="/about-us">About Us</a>
              <a href="/contact-us">Contact Us</a>
            </div>
          </div>

          {/* About us text — center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-[40px] font-inter font-bold text-white tracking-wide mt-10 animate-slideInTogether">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Form */}
      <section ref={sectionRef1} className="bg-black pt-16 pb-28 px-[123px] font-['Inter',sans-serif]">
        <div className="grid grid-cols-2 gap-20 items-start">

          {/* Left Side */}
          <div className={`ml-16 ${visible1 ? "animate-fadeLeft" : "opacity-0"}`}>
            <h2 className="text-white font-bold font-inter text-[60px] leading-tight mb-3">
              Get in Touch
            </h2>
            <p className="text-white text-[22px] font-medium font-inter mb-10">
              Connect with Us for Your<br />Next Project
            </p>

            {/* Phone */}
            <div className="flex items-start gap-6 mb-8">
              <BsTelephone className="text-white mt-1 shrink-0" size={24} />
              <div>
                <p className="text-white/80 font-semibold font-inter text-[18px] mb-1">Phone</p>
                <p className="text-[#B7B7B7] text-[16px] font-inter">+91 123 456 7890</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-6 mb-8">
              <HiOutlineEnvelope className="text-white mt-1 shrink-0" size={24} />
              <div>
                <p className="text-white/80 font-semibold font-inter text-[18px] mb-1">Email</p>
                <p className="text-[#B7B7B7] text-[16px] font-inter">info@nutsandbolts.com</p>
              </div>
            </div>

            {/* Office Address */}
            <div className="flex items-start gap-6">
              <GoLocation className="text-white mt-1 shrink-0" size={24} />
              <div>
                <p className="text-white/80 font-semibold font-inter text-[18px] mb-1">Office Address</p>
                <p className="text-[#B7B7B7] text-[16px] font-inter leading-relaxed">
                  123 Business Park Industrial Area, <br />
                  Andheri East Mumbai, Maharashtra <br />
                  400001
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className={`border border-[#5C5C5C] rounded-xl p-8 mr-16 ${visible1 ? "animate-fadeRight" : "opacity-0"}`}>
            <h3 className="text-[#B7B7B7] font-semibold font-inter text-[24px] mb-6">
              Send us a message
            </h3>

            {/* First Name + Last Name */}
            <div className="grid grid-cols-2 gap-5 mb-4">
              <div>
                <label className="text-[#868686] text-[16px] font-inter mb-1 block">First Name</label>
                <input
                  type="text"
                  name="firstName"
  value={formData.firstName}
  onChange={handleChange}
                  placeholder="Enter Your First Name"
                  className="w-full bg-[#1E1E1E] border border-black/20 rounded-[8px] px-3 py-2.5 text-white text-[16px] font-inter placeholder-[#5C5C5C] outline-none focus:border-[#555] transition-colors"
                />
              </div>
              <div>
                <label className="text-[#868686] text-[16px] font-inter mb-1 block">Last Name</label>
                <input
                  type="text"
                  name="lastName"
  value={formData.lastName}
  onChange={handleChange}
                  placeholder="Enter Your Last Name"
                  className="w-full bg-[#1E1E1E] border border-black/20 rounded-[8px] px-3 py-2.5 text-white text-[16px] font-inter placeholder-[#5C5C5C] outline-none focus:border-[#555] transition-colors"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="text-[#868686] text-[16px] font-inter mb-1 block">Email Address</label>
                <input
                  type="email"
                  name="email"
  value={formData.email}
  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full bg-[#1E1E1E] border border-black/20 rounded-[8px] px-3 py-2.5 text-white text-[16px] font-inter placeholder-[#5C5C5C] outline-none focus:border-[#555] transition-colors"
                />
              </div>
              <div>
                <label className="text-[#868686] text-[16px] font-inter mb-1 block">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
  value={formData.phone}
  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  className="w-full bg-[#1E1E1E] border border-black/20 rounded-[8px] px-3 py-2.5 text-white text-[16px] font-inter placeholder-[#5C5C5C] outline-none focus:border-[#555] transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="text-[#868686] text-[16px] font-inter mb-1 block">Message</label>
              <textarea
                name="message"
  value={formData.message}
  onChange={handleChange}
                placeholder="Please provide details about your requirements..."
                rows={5}
                className="w-full bg-[#1E1E1E] border border-black/20 rounded-[8px] px-3 py-2.5 text-white text-[16px] font-inter placeholder-[#5C5C5C] outline-none focus:border-[#555] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button 
            onClick={handleSubmit}
  disabled={status === "sending"}
            className="bg-[#D9D9D9] text-black text-[16px] font-medium font-inter px-7 py-3 rounded-[8px] hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
              {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : "Send Message"}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B1B1B] text-white px-[123px] pt-16 pb-4">

        <div className="flex items-start justify-between">

          {/* Logo */}
          <div className="flex flex-col items-center gap-3">
            <a href="/">
              <img src="/logo.png" className="w-[164px] h-[178px] object-contain" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[16px] font-semibold font-inter">Quick Links</h4>
            <a href="/" className="text-[16px] font-inter text-white">Home</a>
            <a href="/about-us" className="text-[16px] font-inter text-white">About Us</a>
            <a href="/services" className="text-[16px] font-inter text-white">Our Projects</a>
            <a href="/contact-us" className="text-[16px] font-inter text-white">Contact Us</a>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[16px] font-semibold font-inter">Address</h4>
            <p className="text-[16px] font-inter text-white">Hubballi</p>
          </div>

          {/* Connect With Us */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[18px] font-semibold font-inter">Connect With Us</h4>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/shreendaarchitects/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[35px] h-[35px] rounded-full flex items-center justify-center hover:bg-white/10 transition duration-300"
              >
                <FaInstagram size={35} />
              </a>

              <a href="https://www.facebook.com/shreendaarchitects/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[34px] h-[34px] rounded-full flex items-center justify-center hover:bg-white/10 transition duration-300"
              >
                <FaFacebook size={34} />
              </a>

              <a href="#" className="w-[35px] h-[35px] rounded-full flex items-center justify-center hover:bg-white/10 transition duration-300">
                <FaWhatsapp size={35} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#9A9A9A] mt-16 pt-4 text-center">
          <p className="text-[12px] font-inter text-[#DADADA]">
            © 2026 Shreenda. All Rights Reserved. Designed By Spitel
          </p>
        </div>
      </footer>
    </div>
  )
}