"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { useCallback } from "react";

export default function Index() {

  const [phase, setPhase] = useState("hero");
  const [heroOpacity, setHeroOpacity] = useState(1);
  const [heroY, setHeroY] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [groupX, setGroupX] = useState(0);
  const [groupScale, setGroupScale] = useState(10);
  const [groupOpacity, setGroupOpacity] = useState(0);
  const [showHeroSpace, setShowHeroSpace] = useState(false);
  const [groupFadeUp, setGroupFadeUp] = useState(false);

  const animatingRef = useRef(false);
  const blockAnimation = useRef(false);
  const phaseRef = useRef("hero");

  const easeInOut = (t: number) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
  const easeIn = (t: number) => t * t * t;

  const updatePhase = (p) => {
    phaseRef.current = p;
    setPhase(p);
  };

  const resetToHero = useCallback(() => {
    animatingRef.current = false;
    blockAnimation.current = false;
    document.body.style.overflow = "hidden";

    window.scrollTo({ top: 0, behavior: "auto" });

    requestAnimationFrame(() => {
      setHeroOpacity(1);
      setHeroY(0);
      setGroupX(0);
      setGroupScale(10);
      setGroupOpacity(0);
      setOverlayOpacity(0);
      setShowHeroSpace(false);
      setGroupFadeUp(false);
      requestAnimationFrame(() => {
        updatePhase("hero");
      });
    });
  }, []);

  const runAnimation = useCallback(() => {
    if (animatingRef.current || blockAnimation.current) return;
    animatingRef.current = true;
    updatePhase("animating");

    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;

      if (elapsed < 300) {
        const t = easeIn(elapsed / 300);
        setHeroOpacity(1 - t);
        setHeroY(-t * 50);
        setOverlayOpacity(t);
        setGroupOpacity(easeOut(elapsed / 300));
      } else {
        setHeroOpacity(0);
        setOverlayOpacity(1);
        setGroupOpacity(1);
      }

      if (elapsed < 2000) {
        const t = easeInOut(elapsed / 2000);
        setGroupX(0);
        setGroupScale(10 - t * 9);
      } else if (elapsed < 2600) {
        setGroupX(0);
        setGroupScale(1);
      }

      if (elapsed >= 2600 && elapsed < 3000) {
        // fadeOut hatao - groupOpacity 1 rakhो
        setGroupOpacity(1);
        setOverlayOpacity(1);
      }

      if (elapsed < 3000) {
        requestAnimationFrame(animate);
      } else {
        blockAnimation.current = true;
        animatingRef.current = false;

        // Ab yahan fadeUp trigger karo
        setGroupFadeUp(true);

        setTimeout(() => {
          updatePhase("done");
          setShowHeroSpace(true);
          document.body.style.overflow = "auto";
          setTimeout(() => {
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
          setTimeout(() => {
            setVisible1(true);
          }, 800);
        }, 500); // fadeUp complete hone ka wait
      }
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0 && phaseRef.current === "hero" && !animatingRef.current) {
        e.preventDefault();
        runAnimation();
      }

      if (e.deltaY < 0 && phaseRef.current === "done") {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop <= 10) {
          e.preventDefault();
          resetToHero();
        }
      }
    };

    const handleKey = (e) => {
      if (
        ["ArrowDown", "PageDown", " "].includes(e.key) &&
        phaseRef.current === "hero" &&
        !animatingRef.current
      ) {
        e.preventDefault();
        runAnimation();
      }

      if (
        ["ArrowUp", "PageUp"].includes(e.key) &&
        phaseRef.current === "done"
      ) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop <= 200) {
          e.preventDefault();
          resetToHero();
        }
      }
    };

    if (phaseRef.current === "hero") {
      document.body.style.overflow = "hidden";
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, [runAnimation, resetToHero]);

  {/* Design Timeless Spaces */ }

  const [isLandscape, setIsLandscape] = useState(true);
  const [landscapeIndex, setLandscapeIndex] = useState(0);
  const [portraitIndex, setPortraitIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const isLandscapeRef = useRef(true);

  const landscapeImages = ["/design1.jpg", "/design2.png", "/design3.png", "/design4.jpg"];
  const portraitImages = ["/portrait1.jpg", "/portrait2.jpg", "/portrait3.jpg", "/portrait4.jpg"];

  // Sabhi images preload karo — landscape + portrait dono
  useEffect(() => {
    [...landscapeImages, ...portraitImages].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pehle fade out
      setOpacity(0);

      setTimeout(() => {
        // Index update karo jab screen blank ho
        isLandscapeRef.current = !isLandscapeRef.current;
        setIsLandscape(isLandscapeRef.current);

        if (isLandscapeRef.current) {
          setLandscapeIndex(prev => (prev + 1) % landscapeImages.length);
        } else {
          setPortraitIndex(prev => (prev + 1) % portraitImages.length);
        }

        // Phir fade in
        setTimeout(() => {
          setOpacity(1);
        }, 50);

      }, 800); // fade out duration

    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const renderGrid = (img) =>
    Array.from({ length: 12 }).map((_, i) => {
      const row = Math.floor(i / 4);
      const col = i % 4;

      return (
        <div
          key={i}
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "400% 300%",
            backgroundPosition: `${(col / 3) * 100}% ${(row / 2) * 100}%`,
          }}
        />
      );
    });

  {/* Our Work */ }
  const Overlay = ({ title, desc }) => {
    return (
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center
        opacity-0 group-hover:opacity-100
        translate-y-6 group-hover:translate-y-0
        transition-all duration-700 ease-in-out">

        <h3 className="text-[36px] font-bold
        translate-y-6 opacity-0
        group-hover:translate-y-0 group-hover:opacity-100
        transition-all duration-700 delay-100">
          {title}
        </h3>

        <p className="text-[16px] mt-2 px-4
        translate-y-6 opacity-0
        group-hover:translate-y-0 group-hover:opacity-100
        transition-all duration-700 delay-200">
          {desc}
        </p>

        <button className="mt-4 px-3 py-1 bg-white text-black rounded-full text-[14px]
        translate-y-6 opacity-0
        group-hover:translate-y-0 group-hover:opacity-100
        transition-all duration-700 delay-300">
          View More
        </button>

      </div>
    );
  };

  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filters = ["All Projects", "Residential", "Commercial", "Interior", "Elevation", "3D Visualization"];

  const projects = [
    { id: 1, src: "/work1.jpg", title: "Residential", desc: "Elegant interiors crafted for refined urban living.", category: "Residential" },
    { id: 2, src: "/work2.jpg", title: "Interior", desc: "A modern living space balancing style and comfort.", category: "Interior" },
    { id: 3, src: "/work3.jpg", title: "Exterior", desc: "A natural retreat designed for peace and balance.", category: "Elevation" },
    { id: 4, src: "/work4.jpg", title: "Interior", desc: "A modern living space balancing style and comfort.", category: "Interior" },
    { id: 5, src: "/work5.jpg", title: "Residential", desc: "Elegant interiors crafted for refined urban living.", category: "Residential" },
  ];

  const isVisible = (id: number) => {
    if (activeFilter === "All Projects") return true;
    return projects.find(p => p.id === id)?.category === activeFilter;
  };

  {/* Tesimonials */ }
  const testimonials = [
    {
      quote: "From the first meeting to final execution, everything was handled with clarity and professionalism. The design quality truly stands out.",
      name: "- Neha Kulkarni",
      role: "Residential Client",
      leftImage: "/quote.png",
      rightImage: "/quote1.png",
    },
    {
      quote: "The team brought our vision to life beautifully. Every detail was thoughtfully executed beyond our expectations.",
      name: "- Rahul Mehta",
      role: "Commercial Client",
      leftImage: "/quote.png",
      rightImage: "/quote1.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  {/* About Us */ }
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

  {/* Designing Timeless Spaces */ }
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

  {/* What we Do */ }
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

  {/* Our Work */ }
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

  {/* Why Choose Us */ }
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

  {/* Testimonials */ }
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

  const [isReturning, setIsReturning] = useState(false); // ⭐ NEW

  useEffect(() => {
    const handleScrollUp = (e) => {
      if (e.key === "PageUp" || e.key === "ArrowUp") {
        const about = document.getElementById("about");
        if (!about) return;

        if (about.getBoundingClientRect().top >= -50) {
          window.scrollTo({ top: 0, behavior: "auto" });

          // ⭐ NEW: trigger fadeUp
          setIsReturning(true);
          setHeroOpacity(0);
          setHeroY(50);

          // ⭐ animate after small delay
          setTimeout(() => {
            setHeroOpacity(1);
            setHeroY(0);
          }, 50);
        }
      }
    };

    window.addEventListener("keydown", handleScrollUp);
    return () => window.removeEventListener("keydown", handleScrollUp);
  }, []);

  return (
    <div className="bg-black text-white">

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative"
        style={{ height: phase === "done" ? "auto" : "0px" }}
      >

        {/* ===== HERO / ANIMATION SECTION ===== */}
        <div
          className="fixed inset-0 z-50 overflow-hidden"
          style={{
            background: "#0a0a0a",
            opacity: phase === "done" ? 0 : 1,
            pointerEvents: phase === "done" ? "none" : "auto",
            transition: "none",
          }}
        >
          {/* Hero background image */}
          <div className="absolute inset-0">
            <img
              src="/hero-bg.jpg"
              alt="background"
              className="w-full h-full object-cover"
              style={{ opacity: heroOpacity * 0.6 }}
            />
            <div
              className="absolute inset-0 bg-black/40"
              style={{
                opacity: heroOpacity,
                transition: isReturning ? "all 0.8s ease" : "none",
              }}
            />
          </div>

          {/* Navbar */}
          <div className="absolute top-0 left-0 w-full flex items-center justify-between px-[123px] py-6 z-50">
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

          {/* Hero content */}
          <div
            className="absolute inset-0 flex items-center px-[123px] z-20"
            style={{
              opacity: heroOpacity,
              transform: `translateY(${heroY}px)`,
              transition: isReturning ? "all 0.8s ease" : "none",
            }}
          >
            <div className="max-w-2xl text-white mt-20">
              <h1 className="text-[60px] font-bold font-inter leading-tight">
                Designing Spaces <br />That Define Tomorrow
              </h1>
              <p className="mt-6 text-[18px] font-inter max-w-lg">
                We create timeless architecture and functional interiors that
                balance beauty, purpose, and innovation.
              </p>
              <button className="mt-8 bg-black text-[#C9C9C9] text-[18px] font-inter font-bold px-6 py-3 flex items-center gap-2">
                Get a Consultation
                <BiSolidRightArrow className="text-[15px]" />
              </button>
            </div>
          </div>

          {/* Black overlay */}
          <div
            className="absolute inset-0 z-25"
            style={{
              background: "black",
              opacity: overlayOpacity * 0.92,
              transition: "none",
            }}
          />

          {/* Logo + SHREENDA */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center z-30"
            style={{
              transform: groupFadeUp
                ? `scale(${groupScale}) translateY(-90px)`
                : `scale(${groupScale})`,
              opacity: groupFadeUp ? 0 : groupOpacity,
              transition: groupFadeUp
                ? "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.7s ease"
                : "none",
              willChange: "transform, opacity",
            }}
          >
            <img
              src="/logo.png"
              className="h-[200px]"
              style={{ marginBottom: "24px" }}
            />
            <h1
              className="font-extrabold font-inter tracking-wide"
              style={{
                fontSize: "230px",
                lineHeight: 1,
                backgroundImage: "url('/hero-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              SHREENDA
            </h1>
          </div>
        </div>

        {/* Rest of page */}
        <div style={{ paddingTop: phase === "done" ? "28px" : "100vh" }}>

          {phase === "done" && (
            <div className="fixed top-0 left-0 w-full flex items-center justify-between px-[123px] py-6 z-50">
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
          )}
        </div>
      </section>

      {/* 🔥 ABOUT SECTION */}
      <section ref={sectionRef1} id="about" className="bg-black text-white pt-32 pb-20 px-[123px] scroll-mt-0">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${visible1 ? "animate-fadeUp" : "opacity-0"}`}>

          {/* LEFT CONTENT */}
          <div className="mb-64">
            <h2 className="text-[60px] font-inter font-bold mb-8">
              About
            </h2>

            <p className="text-[22px] font-medium font-inter mb-6 max-w-md leading-[1.2]">
              A studio driven by design excellence and practical innovation.
            </p>

            <p className="text-[16px] text-[#B7B7B7] font-inter max-w-xl leading-[1.2]">
              We are an architecture and design firm specializing in residential,
              commercial, and interior spaces. Our approach blends creativity,
              technical expertise, and sustainable thinking to deliver meaningful
              environments that stand the test of time.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end">
            <img
              src="/about-us.jpg"
              alt="about"
              className="w-[471px] h-[676px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Design Timeless Spaces */}
      <section ref={sectionRef2} className="bg-black text-white px-[123px] py-20">

        {/* 🔹 TOP TEXT */}
        <div className="flex justify-between mb-12">
          <h1 className={`text-[60px] font-bold font-inter leading-tight ${visible2 ? "animate-fadeLeft" : "opacity-0"}`}>
            Designing Timeless <br /> Spaces
          </h1>

          <p className={`text-[22px] font-medium font-inter max-w-xs text-white ${visible2 ? "animate-fadeRight" : "opacity-0"}`}>
            Where functionality meets aesthetic to shape the <br />future architecture
          </p>
        </div>

        {/* 🔥 GRID CONTAINER */}
        <div className={`flex items-center justify-center min-h-screen bg-black ${visible2 ? "animate-slideInTogether" : "opacity-0"}`}>
          <div className="relative w-full h-[700px] overflow-hidden">

            {/* GRID IMAGE EFFECT */}
            <div
              className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-2 p-4"
              style={{
                opacity: opacity,
                transition: "opacity 0.8s ease-in-out",
              }}
            >
              {Array.from({ length: 12 }).map((_, i) => {
                const row = Math.floor(i / 4);
                const col = i % 4;

                // Portrait mode mein left & right columns black
                if (!isLandscape && (col === 0 || col === 3)) {
                  return <div key={i} className="rounded-2xl" style={{ background: 'black' }} />;
                }

                const portraitCol = col - 1; // sirf col 1 aur 2 use hoga portrait mein
                const bgSize = isLandscape ? "400% 300%" : "200% 300%";
                const bgPosX = isLandscape ? `${(col / 3) * 100}%` : `${(portraitCol / 1) * 100}%`;
                const bgPosY = `${(row / 2) * 100}%`;

                return (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden transition-all duration-1000"
                    style={{
                      backgroundImage: `url(${isLandscape
                        ? landscapeImages[landscapeIndex]
                        : portraitImages[portraitIndex]
                        })`,
                      backgroundSize: bgSize,
                      backgroundPosition: `${bgPosX} ${bgPosY}`,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section ref={sectionRef3} className="bg-black text-white py-16 px-[123px]">
        <div className="flex gap-16 items-center max-w-[1400px] mx-auto">

          {/* LEFT SIDE (NO GRID) */}
          <div className={`flex flex-wrap gap-6 ${visible3 ? "animate-fadeLeft" : "opacity-0"}`}>

            {/* Card 1 */}
            <div className="relative group w-[378px]">
              <img
                src="/do1.jpg"
                className="w-full h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <p className="absolute bottom-3 left-4 text-white text-[24px] font-inter font-medium">
                Residential Design
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative group w-[378px]">
              <img
                src="/do8.jpg"
                className="w-full h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <p className="absolute bottom-3 left-4 text-white text-[24px] font-inter font-medium">
                Commercial Design
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative group w-[378px]">
              <img
                src="/do7.jpg"
                className="w-full h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <p className="absolute bottom-3 left-4 text-white text-[24px] font-inter font-medium">
                Interior Design
              </p>
            </div>

            {/* Card 4 */}
            <div className="relative group w-[378px]">
              <img
                src="/do4.jpg"
                className="w-full h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <p className="absolute bottom-3 left-4 text-white text-[24px] font-inter font-medium">
                Elevation Design
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={`${visible3 ? "animate-fadeRight" : "opacity-0"} flex flex-col justify-center`}>

            <h2 className="text-[50px] font-inter font-bold mb-6">
              What We Do
            </h2>

            <p className="text-white text-[16px] font-inter font-medium mb-6 max-w-md">
              Complete architectural solutions from concept to completion.
            </p>

            <button className="bg-white text-black text-[16px] font-inter font-bold px-5 py-2 rounded flex items-center gap-2 mb-12 w-fit">
              View All Services <BiSolidRightArrow className="text-[15px]" />
            </button>

            {/* Bottom Image */}
            <div className="relative w-[422px]">
              <img
                src="/do9.jpg"
                className="w-full h-[286px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <p className="absolute bottom-3 left-4 text-white text-[24px] font-inter font-medium">
                3D Visualization
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Our Work */}
      <section ref={sectionRef4} className="bg-black text-white py-20 px-[123px]">

        <h2 className="text-[60px] font-bold font-inter text-center mb-6">
          Our Work
        </h2>

        <p className="text-center text-white text-[16px] font-inter font-medium mb-10">
          Projects that reflect our commitment to <br />quality and detail.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-5 mb-14 flex-wrap">
          {filters.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(item)}
              className={`px-4 py-1.5 rounded-full text-[16px] font-inter transition duration-300 ${activeFilter === item
                ? "bg-[#FFFFFF]/40 text-white font-bold"
                : "bg-[#FFFFFF]/40 text-[#D4D4D4]"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex gap-6">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 w-1/3">
            {isVisible(1) && (
              <div className="relative group overflow-hidden" style={{ height: '333px', width: '519px' }}>
                <img src="/work1.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-800" />
                <Overlay title="Residential" desc="Elegant interiors crafted for refined urban living." />
              </div>
            )}
            {isVisible(4) && (
              <div className="relative group overflow-hidden" style={{ height: '789px', width: '519px' }}>
                <img src="/work4.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-900" />
                <Overlay title="Interior" desc="A modern living space balancing style and comfort." />
              </div>
            )}
          </div>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col gap-6">
            {/* MIDDLE COLUMN */}
            {isVisible(2) && (
              <div className="flex flex-col gap-6">
                <div className="relative group overflow-hidden ml-24" style={{ height: '455px', width: '294px' }}>
                  <img src="/work2.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-900" />
                  <Overlay title="Interior" desc="A modern living space balancing style and comfort." />
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className={`flex flex-col gap-6 ${isVisible(2) ? '' : 'ml-[50px]'}`}>
            {isVisible(3) && (
              <div className="relative group overflow-hidden" style={{ height: '455px', width: '400px' }}>
                <img src="/work3.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-900" />
                <Overlay title="Elevation" desc="A natural retreat designed for peace and balance." />
              </div>
            )}
            {isVisible(5) && (
              <div
                className="relative group overflow-hidden"
                style={{
                  height: '667px',
                  marginLeft: activeFilter === 'All Projects' ? '-318px' : '24px',
                  width: activeFilter === 'All Projects' ? 'calc(100% + 312px)' : '400px',
                }}
              >
                <img src="/work5.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-900" />
                <Overlay title="Residential" desc="Elegant interiors crafted for refined urban living." />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={sectionRef5} className="bg-black text-white px-[30px]">

        {/* Heading */}
        <div className={`pt-20 pb-10 px-[93px] ${visible5 ? "animate-fadeLeft" : "opacity-0"}`}>
          <h2 className="text-[60px] font-bold font-inter">Why Choose Us</h2>
          <p className="text-white text-[16px] font-inter font-medium mt-3">
            Where vision, quality, and precision <br /> come together.
          </p>
        </div>

        {/* Image Grid with Hover Overlay */}
        <div className={`relative w-full ${visible5 ? "animate-fadeUp" : "opacity-0"}`} style={{ height: '664px' }}>

          {/* Single Background Image */}
          <img src="/Choose-bg.jpg" className="absolute inset-0 w-full h-full object-cover" />

          {/* 4 Columns on top of image */}
          <div className="absolute inset-0 flex">

            {/* Column 1 */}
            <div className="relative group flex-1 cursor-pointer">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
                style={{ background: 'linear-gradient(to bottom, #66666600, #000000b3)' }}
              />
              <div className="absolute bottom-0 left-0 p-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <h3 className="text-[23px] font-bold font-inter">Design Excellence</h3>
                <p className="text-[16px] text-white font-inter mt-1 max-w-[250px]">
                  Thoughtful, creative designs crafted with precision and detail.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[10px] bg-black" />

            {/* Column 2 */}
            <div className="relative group flex-1 cursor-pointer">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                style={{ background: 'linear-gradient(to bottom, #66666600, #000000b3)' }}
              />
              <div className="absolute bottom-0 left-0 p-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <h3 className="text-[23px] font-bold font-inter">On-Time Delivery</h3>
                <p className="text-[16px] text-white font-inter mt-1 max-w-[250px]">
                  Reliable planning and execution to meet every deadline.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[10px] bg-black" />

            {/* Column 3 */}
            <div className="relative group flex-1 cursor-pointer">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                style={{ background: 'linear-gradient(to bottom, #66666600, #000000b3)' }}
              />
              <div className="absolute bottom-0 left-0 p-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <h3 className="text-[23px] font-bold font-inter">Client Collaboration</h3>
                <p className="text-[16px] text-white font-inter mt-1 max-w-[250px]">
                  A transparent, collaborative process built around your vision.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-[10px] bg-black" />

            {/* Column 4 */}
            <div className="relative group flex-1 cursor-pointer">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                style={{ background: 'linear-gradient(to bottom, #66666600, #000000b3)' }}
              />
              <div className="absolute bottom-0 left-0 p-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <h3 className="text-[23px] font-bold font-inter">Sustainable Thinking</h3>
                <p className="text-[16px] text-white font-inter mt-1 max-w-[250px]">
                  Smart, eco-conscious solutions that respect the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={sectionRef6} className="bg-black text-white py-24 px-[123px]">

        <style>{`
          @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* Heading */}
        <div className={`text-center mb-16 ${visible6 ? "animate-slideInTogether" : "opacity-0"}`}>
          <h2 className="text-[60px] font-bold font-inter">Testimonials</h2>
          <p className="text-white text-[16px] font-medium font-inter mt-3">
            What our clients say about <br /> working with us
          </p>
        </div>

        {/* Testimonial Card */}
        <div className={`relative flex items-center justify-center gap-6 min-h-[220px] ${visible6 ? "animate-fadeUp" : "opacity-0"}`}>

          {/* Left Image */}
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0 mb-40">
            <img
              src={testimonials[current].leftImage}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote Text */}
          <div
            key={current}
            className="max-w-[750px] text-center"
            style={{ animation: 'fadeSlide 0.7s ease forwards' }}
          >
            <p className="text-[28px] font-inter italic text-white/90 leading-snug">
              {testimonials[current].quote}
            </p>
            <p className="text-[20px] font-bold font-inter mt-6">
              {testimonials[current].name}
            </p>
            <p className="text-[14px] text-white/50 font-inter mt-1">
              {testimonials[current].role}
            </p>
          </div>

          {/* Right Image */}
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0">
            <img
              src={testimonials[current].rightImage}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[10px] rounded-full transition-all duration-500 ${i === current ? "w-[28px] bg-white" : "w-[10px] bg-white/30"
                }`}
            />
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
  );
}