"use client";
import { useRef, useEffect, useState } from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
export default function OurServices() {

  const projects = [
    {
      id: 1,
      image: "/Commercial1.png", // apni image ka path daalein
      alt: "Interior space",
    },
    {
      id: 2,
      image: "/Commercial2.png",
      alt: "Commercial building exterior",
    },
    {
      id: 3,
      image: "/Commercial3.png",
      alt: "Landscape and lawn",
    },
    {
      id: 4,
      image: "/Commercial4.png",
      alt: "Office interior",
    },
  ];

  const projects1 = [
    {
      id: 1,
      image: "/Interior2.png",
      alt: "Bar and lounge interior",
      className: "row-span-1",
    },
    {
      id: 2,
      image: "/Interior1.png",
      alt: "Arch doorway interior",
      className: "row-span-2", // tall image in middle
    },
    {
      id: 3,
      image: "/Interior3.png",
      alt: "Living room with chandelier",
      className: "row-span-1 col-span-2", // wide image top right
    },
    {
      id: 4,
      image: "/Interior4.png",
      alt: "Modern kitchen",
      className: "row-span-1",
    },
    {
      id: 5,
      image: "/Interior5.png",
      alt: "Bedroom with wooden panels",
      className: "row-span-1",
    },
    {
      id: 6,
      image: "/Interior6.png",
      alt: "Luxury entrance hall",
      className: "row-span-1",
    },
  ];

  const elevationProjects = [
    { id: 1, image: "/Elevation1.png", alt: "Classic white villa" },
    { id: 2, image: "/Elevation2.png", alt: "Modern apartment building" },
    { id: 3, image: "/Elevation3.png", alt: "Contemporary house night" },
    { id: 4, image: "/Elevation4.png", alt: "Modern villa street view" },
  ];

  const visualizationProjects = [
    { image: "/viz1.jpg", alt: "Modern tower building visualization" },
    { image: "/viz2.jpg", alt: "Luxury villa with pool visualization" },
    { image: "/viz3.png", alt: "Contemporary house with solar panels" },
    { image: "/viz4.jpg", alt: "Modern house with pool side view" },
  ];

  {/* Crafted Works */ }
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

  {/* Residential */ }
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

  {/* Commercial */ }
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

  {/* Interior */ }
  const sectionRef4 = useRef(null);
  const [visible4, setVisible4] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible4(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef4.current) {
      observer.observe(sectionRef4.current);
    }

    return () => {
      if (sectionRef4.current) {
        observer.unobserve(sectionRef4.current);
      }
    };
  }, []);

  {/* Elevation */ }
  const sectionRef5 = useRef(null);
  const [visible5, setVisible5] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible5(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef5.current) {
      observer.observe(sectionRef5.current);
    }

    return () => {
      if (sectionRef5.current) {
        observer.unobserve(sectionRef5.current);
      }
    };
  }, []);

  {/* 3D Visualization */ }
  const sectionRef6 = useRef(null);
  const [visible6, setVisible6] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible6(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef6.current) {
      observer.observe(sectionRef6.current);
    }

    return () => {
      if (sectionRef6.current) {
        observer.unobserve(sectionRef6.current);
      }
    };
  }, []);

  return (
    <div className="bg-black">
      <section className="bg-black text-white">

        {/* TOP BANNER IMAGE with NAVBAR on top */}
        <div className="relative w-full h-[369px]">
          <img
            src="/services-bg.jpg"
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
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-[40px] font-inter font-bold text-white tracking-wide mt-10">Our Projects</h1>
          </div>
        </div>
      </section>

      {/* Crafted Works */}
      <section ref={sectionRef1} className="bg-black text-white py-16 px-[123px]">
        <div className="flex items-center justify-between gap-16">

          {/* LEFT CONTENT */}
          <div className={`flex-1 max-w-[480px] ${visible1 ? "animate-fadeLeft" : "opacity-0"}`}>
            <h2 className="text-[60px] font-bold font-inter leading-tight mb-6">
              Crafted Works
            </h2>

            <p className="text-[22px] text-white font-inter font-medium leading-snug mb-6 max-w-[500px]">
              A reflection of our design philosophy across diverse spaces
            </p>

            <p className="text-[16px] text-[#B7B7B7] font-inter leading-relaxed max-w-[500px] mb-10">
              From thoughtfully designed homes to dynamic commercial
              environments, our projects reflect a seamless blend of creativity,
              functionality, and attention to detail.
            </p>

            {/* <div className="w-[533px] h-[1px] bg-[#868686]" /> */}
          </div>

          {/* RIGHT IMAGE */}
          <div className={`flex-1 flex justify-end ${visible1 ? "animate-fadeRight" : "opacity-0"}`}>
            <img
              src="/crafted.png"
              alt="Crafted Works"
              className="w-[640px] h-[338px] object-cover rounded-[10px]"
            />
          </div>
        </div>
      </section>

      {/* Interior */}
      <section ref={sectionRef4} className="bg-black py-20">
        {/* Heading */}
        <div className={`relative flex items-center justify-center mb-6 ${visible4 ? "animate-slideInTogether" : "opacity-0"}`}>
          <div className="absolute left-0 h-px bg-[#868686] w-[300px] ml-[123px] mt-10" />
          <h2 className="text-white text-[28px] font-medium font-inter tracking-wide whitespace-nowrap">
            Interior
          </h2>
          <div className="absolute right-0 h-px bg-[#868686] w-[300px] mr-[123px] mt-10" />
        </div>

        {/* Description */}
        <p className={`text-[#B7B7B7] text-[16px] text-center font-inter leading-relaxed max-w-[400px] mx-auto mb-8 ${visible4 ? "animate-slideInTogether" : "opacity-0"}`}>
          Crafting refined interiors through careful selection of
          materials, lighting, and spatial harmony.
        </p>

        {/* Button */}
        <div className={`flex justify-center mb-16 ${visible4 ? "animate-slideInTogether" : "opacity-0"}`}>
          <a href="/interior">
            <button className="flex items-center gap-2 border border-white text-black text-[16px] bg-white font-bold font-inter px-6 py-2.5 hover:bg-white hover:text-black transition-colors duration-200">
              View All Projects <BiSolidRightArrow className="text-[15px]" />
            </button>
          </a>
        </div>

        {/* Grid */}
        <div
          style={{
            paddingLeft: "123px",
            paddingRight: "123px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridTemplateRows: "300px 300px",
            gap: "12px",
          }}
        >
          {/* Col 2: Tall image spanning both rows - MIDDLE */}
          <div
            style={{ gridColumn: "2", gridRow: "1 / span 2", overflow: "hidden" }}
          >
            <img
              src={projects1[0].image}
              alt={projects1[0].alt}
              className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${visible4 ? "animate-fadeUp" : "opacity-0"}`}
            />
          </div>

          {/* Row 1, Col 1: Bar - LEFT TOP */}
          <div
            style={{ gridColumn: "1", gridRow: "1", overflow: "hidden" }}
          >
            <img
              src={projects1[1].image}
              alt={projects1[1].alt}
              className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${visible4 ? "animate-fadeLeft" : "opacity-0"}`}
            />
          </div>

          {/* Row 1, Col 3+4: Wide living room - same rehega */}
          <div
            style={{ gridColumn: "3 / span 2", gridRow: "1", overflow: "hidden" }}
          >
            <img
              src={projects1[2].image}
              alt={projects1[2].alt}
              className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${visible4 ? "animate-fadeRight" : "opacity-0"}`}
            />
          </div>

          {/* Row 2, Col 1: Sofa - LEFT BOTTOM */}
          <div
            style={{ gridColumn: "1", gridRow: "2", overflow: "hidden" }}
          >
            <img
              src={projects1[3].image}
              alt={projects1[3].alt}
              className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${visible4 ? "animate-fadeLeft" : "opacity-0"}`}
            />
          </div>

          {/* Row 2, Col 3: Kitchen - same rehega */}
          <div
            style={{ gridColumn: "3", gridRow: "2", overflow: "hidden" }}
          >
            <img
              src={projects1[4].image}
              alt={projects1[4].alt}
              className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${visible4 ? "animate-fadeUp" : "opacity-0"}`}
            />
          </div>

          {/* Row 2, Col 4: Bedroom - same rehega */}
          <div
            style={{ gridColumn: "4", gridRow: "2", overflow: "hidden" }}
          >
            <img
              src={projects1[5].image}
              alt={projects1[5].alt}
              className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${visible4 ? "animate-fadeUp" : "opacity-0"}`}
            />
          </div>
        </div>
      </section>

      {/* Residential */}
      <section ref={sectionRef3} className="bg-black text-white py-20 px-[123px]">
        <div className="grid grid-cols-[auto_1fr] gap-[49px] items-center">

          {/* LEFT GRID */}
          <div className={`grid grid-cols-[auto_1fr] gap-[14px] ${visible3 ? "animate-fadeLeft" : "opacity-0"}`}>

            {/* Card 1 */}
            <div className="relative group">
              <img
                src="/Residential1.png"
                className="w-[424px] h-[266px] object-cover"
              />
            </div>

            {/* Card 2 */}
            <div className="relative group">
              <img
                src="/Residential2.png"
                className="w-[424px] h-[266px] object-cover"
              />
            </div>

            {/* Card 3 */}
            <div className="relative group">
              <img
                src="/Residential3.png"
                className="w-[424px] h-[266px] object-cover"
              />
            </div>

            {/* Card 4 (TALL) */}
            <div className="relative group">
              <img
                src="/Residential4.png"
                className="w-[424px] h-[266px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className={`-ml-8 ${visible3 ? "animate-fadeRight" : "opacity-0"}`}>
            <h2 className="text-[28px] font-inter font-medium mb-4 ml-16">
              Residential Elevation
            </h2>

            <p className="text-[#B7B7B7] text-[16px] font-inter mb-6 max-w-md ml-16">
              Designing homes that reflect personal lifestyles with a balance of comfort, functionality, and timeless aesthetics.
            </p>

            <a href="/residential">
              <button className="bg-white text-black text-[16px] font-inter font-bold px-5 py-2 rounded flex items-center gap-2 mb-12 ml-16">
                View All Projects <BiSolidRightArrow className="text-[15px]" />
              </button>
            </a>

            {/* Bottom Image */}
            <div className="mt-10 relative">
              <img
                src="/Residential5.png"
                className="w-[424px] h-[293px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial */}
      <section ref={sectionRef2} className="bg-black px-[123px] py-20">
        {/* Header Row */}
        <div className="flex items-start justify-between mb-8">
          {/* Left: Title + Description */}
          <div className={`max-w-xl ${visible2 ? "animate-fadeLeft" : "opacity-0"}`}>
            <h2 className="text-white text-[28px] font-medium font-inter mb-2">
              Commercial and Interior Elevation
            </h2>
            <p className="text-[#B7B7B7] text-[16px] font-inter leading-relaxed">
              Creating dynamic spaces that enhance productivity and <br />presence through thoughtful planning and impactful design.
            </p>
          </div>

          {/* Right: Button */}
          <a href="/commercial">
            <button className={`flex items-center gap-2 border border-white text-black bg-white text-[16px] font-bold font-inter px-5 py-3 hover:bg-white hover:text-black transition-colors duration-200 whitespace-nowrap ${visible2 ? "animate-fadeRight" : "opacity-0"}`}>
              View All Projects <BiSolidRightArrow className="text-[15px]" />
            </button>
          </a>
        </div>

        {/* Image Grid */}
        <div className={`grid grid-cols-4 gap-3 ${visible2 ? "animate-fadeUp" : "opacity-0"}`}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="aspect-square overflow-hidden group"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Elevation */}
      {/* <section
        ref={sectionRef5}
        className="bg-black py-20"
        style={{ fontFamily: "'Inter', sans-serif", paddingLeft: "123px", paddingRight: "123px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "404px 305px 514px",
            gridTemplateRows: "250px 182px",
            gap: "12px",
          }}
        > */}
      {/* Row 1, Col 1: Text + Button */}
      {/* <div
            style={{ gridColumn: "1", gridRow: "1", paddingRight: "24px" }}
            className={`flex flex-col justify-start mt-6 ${visible5 ? "animate-fadeLeft" : "opacity-0"}`}
          >
            <h2 className="text-white text-[28px] font-medium font-inter mb-3">Elevation</h2>
            <p className="text-[#B7B7B7] text-[16px] font-inter leading-relaxed mb-6">
              Shaping distinctive exteriors that define character through proportion, detail, and visual appeal.
            </p>
            <a href="/elevation">
              <button className="flex items-center gap-2 border border-white text-black text-[16px] font-bold font-inter bg-white px-5 py-2.5 w-fit hover:bg-white hover:text-black transition-colors duration-200">
                View All Projects <BiSolidRightArrow className="text-[15px]" />
              </button>
            </a>
          </div> */}

      {/* Row 1, Col 2: Top middle image — 305×250 */}
      {/* <div style={{ gridColumn: "2", gridRow: "1", overflow: "hidden", width: "305px", height: "250px" }}>
            <img
              src={elevationProjects[1].image}
              alt={elevationProjects[1].alt}
              className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${visible5 ? "animate-fadeRight" : "opacity-0"}`}
            />
          </div> */}

      {/* Col 3: Tall right image spanning both rows — 514×451 */}
      {/* <div style={{ gridColumn: "3", gridRow: "1 / span 2", overflow: "hidden", width: "514px", height: "465px" }}>
            <img
              src={elevationProjects[3].image}
              alt={elevationProjects[3].alt}
              className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${visible5 ? "animate-fadeRight" : "opacity-0"}`}
            />
          </div> */}

      {/* Row 2, Col 1: Bottom left image — 404×244 */}
      {/* <div style={{ gridColumn: "1", gridRow: "2", overflow: "hidden", width: "404px", height: "244px" }}>
            <img
              src={elevationProjects[0].image}
              alt={elevationProjects[0].alt}
              className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 -mt-10 ${visible5 ? "animate-fadeLeft" : "opacity-0"}`}
            />
          </div> */}

      {/* Row 2, Col 2: Bottom middle image — 305×182 */}
      {/* <div style={{ gridColumn: "2", gridRow: "2", overflow: "hidden", width: "305px", height: "204px" }}>
            <img
              src={elevationProjects[2].image}
              alt={elevationProjects[2].alt}
              className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${visible5 ? "animate-fadeRight" : "opacity-0"}`}
            />
          </div>
        </div> */}
      {/* </section> */}

      {/* 3D visualization */}
      <section
        ref={sectionRef6}
        className="bg-black pt-20 pb-28"
        style={{ fontFamily: "'Inter', sans-serif", paddingLeft: "123px", paddingRight: "123px" }}
      >
        {/* Top row: Button left, Title + Description right */}
        <div className="flex justify-between items-start mb-6">
          {/* Left: Button */}
          <a href="/visualization">
            <button className={`flex items-center gap-2 mt-16 border border-white text-black text-[16px] font-bold font-inter bg-white px-5 py-2.5 hover:bg-white hover:text-black transition-colors duration-200 ${visible6 ? "animate-fadeLeft" : "opacity-0"}`}>
              View All Projects <BiSolidRightArrow className="text-[15px]" />
            </button>
          </a>

          {/* Right: Title + Description */}
          <div className={`text-right ${visible6 ? "animate-fadeRight" : "opacity-0"}`} style={{ maxWidth: "500px" }}>
            <h2 className="text-white text-[28px] font-medium font-inter mb-6">
              3D visualization
            </h2>
            <p className="text-[#B7B7B7] text-[16px] font-inter leading-relaxed mb-6">
              Creating dynamic spaces that enhance productivity and <br />
              presence through thoughtful planning and impactful design.
            </p>
          </div>
        </div>

        {/* Bottom row: 4 equal images */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
          }}
        >
          {visualizationProjects.map((project, index) => (
            <div key={index} style={{ overflow: "hidden" }}>
              <img
                src={project.image}
                alt={project.alt}
                className={`w-full h-[301px] object-cover transition-transform duration-300 ${visible6 ? "animate-fadeUp" : "opacity-0"}`}
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