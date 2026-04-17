import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

export default function AboutUs() {

  {/* What We Design */ }
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

  {/* Our Perspective */ }
  const sectionRef2 = useRef(null);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible2(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef2.current) {
      observer.observe(sectionRef2.current);
    }

    return () => {
      if (sectionRef2.current) {
        observer.unobserve(sectionRef2.current);
      }
    };
  }, []);

  {/* Space */ }
  const sectionRef3 = useRef(null);
  const [visible3, setVisible3] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible3(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef3.current) {
      observer.observe(sectionRef3.current);
    }

    return () => {
      if (sectionRef3.current) {
        observer.unobserve(sectionRef3.current);
      }
    };
  }, []);

  return (
    <div className="bg-black">
      <section className="bg-black text-white">

        {/* TOP BANNER IMAGE with NAVBAR on top */}
        <div className="relative w-full h-[369px]">
          <img
            src="/about-bg.jpg"
            alt="about banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#666666]/50" />
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
          <div className="absolute inset-0 flex items-center justify-center animate-slideInTogether">
            <h1 className="text-[40px] font-inter font-bold text-white tracking-wide mt-10">About us</h1>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="py-20 px-[123px] animate-fadeUp">

          {/* BIG HEADING */}
          <h2 className="text-[40px] font-semibold font-inter text-center tracking-[0.25em] text-white mb-20 mt-6">
            Shaping Spaces with Purpose
          </h2>

          {/* THREE COLUMNS */}
          <div className="flex gap-0">

            {/* Column 1 */}
            <div className="flex-1 pr-10 border-r border-[#5C5C5C]">
              <h3 className="text-[22px] font-medium font-inetr text-[#B7B7B7] mb-4">Who we are</h3>
              <p className="text-[16px] text-white font-inter leading-relaxed">
                At Shreenda, we create spaces that balance visual refinement with meaningful experience,
                focusing on designs that feel both purposeful and enduring.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex-1 px-10 border-r border-[#5C5C5C]">
              <h3 className="text-[22px] font-medium font-inter text-[#B7B7B7] mb-4">What We Do</h3>
              <p className="text-[16px] text-white font-inter leading-relaxed">
                We work across architecture, interiors, and visualization, bringing ideas together to create
                spaces that are cohesive, functional, and thoughtfully designed.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex-1 pl-10">
              <h3 className="text-[22px] font-medium font-inter text-[#B7B7B7] mb-4">Our Approach</h3>
              <p className="text-[16px] text-white font-inter leading-relaxed">
                Our approach is rooted in simplicity and clarity, where materials, light, and spatial flow are
                carefully considered to shape timeless and practical environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we Design */}
      <section ref={sectionRef1} className="bg-black text-white">

        {/* Heading */}
        <div className="pt-20 pb-10 top-0 left-0 w-full flex justify-center">
          <h2 className={`text-[40px] font-inter font-semibold tracking-[0.3em] text-white ${visible1 ? "animate-slideInTogether" : "opacity-0"}`}>
            What We Design
          </h2>
        </div>

        {/* Image Grid with Hover Overlay */}
        <div className={`relative w-full ${visible1 ? "animate-fadeUp" : "opacity-0"}`} style={{ height: '664px' }}>

          {/* Single Background Image */}
          <img src="/do-bg2.jpg" className="absolute inset-0 w-full h-full object-cover" />

          <div className="absolute inset-0 bg-[#5C5C5C]/30" />

          {/* 4 Columns on top of image */}
          <div className="absolute inset-0 flex">

            {/* Column 1 */}
            <div className="relative group flex-1 cursor-pointer">
              <div className="absolute inset-0 opacity-100 transition duration-700"
                style={{ background: 'linear-gradient(to bottom, #66666600, #000000)' }}
              />
              <div className="absolute bottom-0 left-0 p-6 translate-y-0 opacity-100 transition-all duration-700 ease-out">
                <h3 className="text-[23px] font-bold font-inter">Residential</h3>
                <p className="text-[16px] text-[#B7B7B7] font-inter mt-1 max-w-[250px]">
                  We design homes that reflect individual lifestyles, blending comfort
                  and functionality <br />with a timeless sense of <br />space.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[1px] bg-[#868686]" />

            {/* Column 2 */}
            <div className="relative group flex-1 cursor-pointer">
              <div className="absolute inset-0 opacity-100 transition duration-700"
                style={{ background: 'linear-gradient(to bottom, #66666600, #000000)' }}
              />
              <div className="absolute bottom-0 left-0 p-7 translate-y-0 opacity-100 transition-all duration-700 ease-out">
                <h3 className="text-[23px] font-bold font-inter">Commercial</h3>
                <p className="text-[16px] text-[#B7B7B7] font-inter mt-1 max-w-[250px]">
                  Our commercial spaces enhance productivity and presence through
                  thoughtful planning and strong design identity.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[1px] bg-[#868686]" />

            {/* Column 3 */}
            <div className="relative group flex-1 cursor-pointer">
              <div className="absolute inset-0 opacity-100 transition duration-700"
                style={{ background: 'linear-gradient(to bottom, #66666600, #000000)' }}
              />
              <div className="absolute bottom-0 left-0 p-6 translate-y-0 opacity-100 transition-all duration-700 ease-out">
                <h3 className="text-[23px] font-bold font-inter">Interior</h3>
                <p className="text-[16px] text-[#B7B7B7] font-inter mt-1 max-w-[250px]">
                  We create refined interiors where materials, lighting, <br />and layout
                  come together <br />in a balanced and cohesive <br />way.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[1px] bg-[#868686]" />

            {/* Column 4 */}
            <div className="relative group flex-1 cursor-pointer">
              <div className="absolute inset-0 opacity-100 transition duration-700"
                style={{ background: 'linear-gradient(to bottom, #66666600, #000000)' }}
              />
              <div className="absolute bottom-0 left-0 p-6 translate-y-0 opacity-100 transition-all duration-700 ease-out">
                <h3 className="text-[23px] font-bold font-inter">Elevation</h3>
                <p className="text-[16px] text-[#B7B7B7] font-inter mt-1 max-w-[250px]">
                  Our elevation designs define character and presence <br />through visually
                  striking <br />and well-proportioned <br />exteriors.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[1px] bg-[#868686]" />

            {/* Column 5 */}
            <div className="relative group flex-1 cursor-pointer">
              <div className="absolute inset-0 opacity-100 transition duration-700"
                style={{ background: 'linear-gradient(to bottom, #66666600, #000000)' }}
              />
              <div className="absolute bottom-0 left-0 p-6 translate-y-0 opacity-100 transition-all duration-700 ease-out">
                <h3 className="text-[23px] font-bold font-inter">3D Visualization</h3>
                <p className="text-[16px] text-[#B7B7B7] font-inter mt-1 max-w-[250px]">
                  We bring ideas to life <br />through detailed <br />visualizations, offering
                  a <br />clear and realistic <br />understanding of the space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Perspective */}
      <section ref={sectionRef2} className="bg-black text-white py-20">

        {/* Heading */}
        <div className={`text-center mb-20 ${visible2 ? "animate-slideInTogether" : "opacity-0"}`}>
          <h2 className="text-[60px] font-semibold font-inter mb-6">Our Perspective</h2>
          <p className="text-[22px] text-white font-medium font-inter max-w-4xl mx-auto leading-relaxed">
            We see every space as a story waiting to be shaped—where design is not just about
            how it looks, but how it feels, functions, and evolves over time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-0 bg-[#121212] w-full py-16 px-[123px]">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-16">

            {/* Our Mission */}
            <div className={`${visible2 ? "animate-fadeLeft" : "opacity-0"}`}>
              <div className="flex items-center gap-4 mb-3">
                <img src="/value3.png" className="w-[86px] h-[86px] object-contain" />
                <h3 className="text-[24px] font-semibold tracking-[0.2em] font-inter">OUR MISSION</h3>
              </div>
              <p className="text-[16px] text-[#B7B7B7] font-inter leading-relaxed max-w-[491px]">
                To deliver well-crafted architectural and design solutions that balance creativity, functionality, and precision
              </p>
              <div className="w-[300px] h-[1px] bg-[#5C5C5C] mt-6" />
            </div>

            {/* Our Values */}
            <div className={`${visible2 ? "animate-fadeLeft" : "opacity-0"}`}>
              <div className="flex items-center gap-4 mb-3">
                <img src="/value2.png" className="w-[100px] h-[100px] object-contain" />
                <h3 className="text-[24px] font-semibold tracking-[0.2em] font-inter">OUR VALUES</h3>
              </div>
              <p className="text-[16px] text-[#B7B7B7] font-inter leading-relaxed max-w-[491px]">
                Driven by simplicity, detail, and purposeful design, with a focus on integrity and creativity.
              </p>
              <div className="w-[300px] h-[1px] bg-[#5C5C5C] mt-6" />
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-16 mt-16">

            {/* Our Vision */}
            <div className={`${visible2 ? "animate-fadeRight" : "opacity-0"}`}>
              <div className="flex items-center justify-end gap-4 mb-3">
                <h3 className="text-[24px] font-semibold tracking-[0.2em] font-inter">OUR VISION</h3>
                <img src="/value4.png" className="w-[90px] h-[90px] object-contain" />
              </div>
              <p className="text-[16px] text-[#B7B7B7] font-inter leading-relaxed text-right">
                To create spaces that inspire, endure, and elevate <br />
                everyday living through thoughtful and timeless design.
              </p>
              <div className="w-[300px] h-[1px] bg-[#5C5C5C] mt-6 ml-auto" />
            </div>

            {/* Our Strength */}
            <div className={`${visible2 ? "animate-fadeRight" : "opacity-0"}`}>
              <div className="flex items-center justify-end gap-4 mb-3">
                <h3 className="text-[24px] font-semibold tracking-[0.2em] font-inter">OUR STRENGTH</h3>
                <img src="/value1.png" className="w-[90px] h-[90px] object-contain" />
              </div>
              <p className="text-[16px] text-[#B7B7B7] font-inter leading-relaxed text-right">
                Blending design and practicality to create cohesive and <br />meaningful spaces.
              </p>
              <div className="w-[300px] h-[1px] bg-[#5C5C5C] mt-6 ml-auto" />
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef3} className="bg-black text-white h-[150px] flex items-center justify-center">
        <p className={`text-[28px] text-[#868686] font-medium font-inter tracking-wide mb-16 ${visible3 ? "animate-slideInTogether" : "opacity-0"}`}>
          Spaces That Feel as Good as They Look
        </p>
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