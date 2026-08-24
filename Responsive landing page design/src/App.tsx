import heroDesktop from "@/imports/desktop.png";
import heroMobile from "@/imports/mobile.png";

export default function App() {
  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden relative">
      {/* Background image — desktop */}
      <div className="hidden md:block absolute inset-0 pointer-events-none select-none">
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            overflow: "hidden",
            borderRadius: "77px 77px 0 0",
          }}
        >
          <img
            alt=""
            src={heroDesktop}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Background image — mobile */}
      <div className="md:hidden absolute inset-0 pointer-events-none select-none">
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "58%",
            overflow: "hidden",
          }}
        >
          <img
            alt=""
            src={heroMobile}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center px-4 md:px-14 py-5 md:py-6">
        <span
          className="text-white text-[28px] md:text-[32px] whitespace-nowrap"
          style={{ fontFamily: "'Montserrat Alternates:Regular', sans-serif" }}
        >
          BAFtech
        </span>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-4 md:px-14 pt-8 md:pt-20 pb-[340px] md:pb-[420px]">
        {/* Mobile: stacked full-width. Desktop: side-by-side */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-[73px]">
          {/* Title */}
          <h1
            className="shrink-0 text-white leading-none text-[clamp(52px,14vw,136px)] w-full md:w-auto"
            style={{ fontFamily: "'Urbanist:Medium', sans-serif" }}
          >
            <span style={{ fontWeight: 600 }}>Open</span>
            <span style={{ fontWeight: 200 }}>Chat</span>
          </h1>

          {/* Description + CTA */}
          <div className="flex flex-col items-start gap-8 md:gap-[46px] mt-5 md:mt-4 w-full md:flex-1">
            <p
              className="text-white text-[16px] md:text-[20px] leading-relaxed w-full"
              style={{
                fontFamily: "'Geist:Regular', sans-serif",
                textShadow: "0px 4px 7px rgba(0,0,0,0.45)",
              }}
            >
              a generative AI platform that enables users to create content,
              answer questions, generate code, analyze documents, and automate
              workflows through natural language conversations powered by large
              language models.
            </p>
            <a
              href="#"
              className="bg-white text-black text-[16px] px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
              style={{ fontFamily: "'Geist:Medium', sans-serif", fontWeight: 500 }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
