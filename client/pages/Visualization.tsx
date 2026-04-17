"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
export default function Visualization() {

  const residentialProjects = [
    { image: "/VisualizationProject1.png", alt: "Modern contemporary house with car" },
    { image: "/VisualizationProject2.png", alt: "Classic white luxury villa" },
    { image: "/VisualizationProject3.png", alt: "Classic white luxury villa" },
    { image: "/VisualizationProject4.png", alt: "Classic white luxury villa" },
  ];

  {/* Text + 4 Images */ }
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

  return (
    <div className="bg-black">
      <section className="bg-black text-white">

        {/* TOP BANNER IMAGE with NAVBAR on top */}
        <div className="relative w-full h-[369px]">
          <img
            src="/viz-bg1.jpg"
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
            <h1 className="text-[40px] font-inter font-bold text-white tracking-wide mt-10 animate-slideInTogether">3D Visualization</h1>
          </div>
        </div>
      </section>

      {/* 2 images + text */}
      <section
        ref={sectionRef1}
        className="bg-black pt-12 pb-28"
        style={{ fontFamily: "'Inter', sans-serif", paddingLeft: "123px", paddingRight: "123px" }}
      >
        {/* Top: Title + Description left aligned */}
        <div style={{ maxWidth: "500px" }} className={`mb-10 ${visible1 ? "animate-fadeLeft" : "opacity-0"}`}>
          <h2 className="text-white text-[22px] font-medium font-inter mb-3">
            Explore our 3D Visualization Projects
          </h2>
          <p className="text-[#B7B7B7] text-[16px] font-inter leading-relaxed">
            Bringing concepts to life through immersive visuals that capture
            depth, detail, and realism—offering a clear and compelling
            preview of the final design.
          </p>
        </div>

        {/* Bottom: 2 equal images side by side */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "56px",
          }}
        >
          {residentialProjects.map((project, index) => (
            <div key={index} style={{ overflow: "hidden" }}>
              <img
                src={project.image}
                alt={project.alt}
                className={`w-full h-[501px] object-cover hover:scale-105 transition-transform duration-300 ${visible1 ? "animate-slideInTogether" : "opacity-0"}`}
              />
            </div>
          ))}
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