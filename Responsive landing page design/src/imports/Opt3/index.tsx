import imgImage2 from "./892cce75da75fe6488d611647a6c86faed6b4ee0.png";

function Frame() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-[50px] shrink-0">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap">Learn More</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px relative">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal h-[92px] leading-[normal] min-w-full relative shrink-0 text-[24px] text-shadow-[0px_4px_7px_rgba(0,0,0,0.45)] text-white w-[min-content]">a generative AI platform that enables users to create content, answer questions, generate code, analyze documents, and automate workflows through natural language conversations powered by large language models.</p>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[73px] h-[195px] items-start left-[88px] top-[216px] w-[1552px]">
      <p className="[word-break:break-word] font-['Urbanist:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[136px] text-white whitespace-nowrap">
        <span className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[normal]">Open</span>
        <span className="font-['Urbanist:ExtraLight',sans-serif] font-extralight leading-[normal]">Chat</span>
      </p>
      <Frame1 />
    </div>
  );
}

export default function Opt() {
  return (
    <div className="bg-black relative size-full" data-name="opt 3">
      <div className="-translate-x-1/2 absolute flex h-[589px] items-center justify-center left-1/2 top-[464px] w-[1552px]">
        <div className="flex-none rotate-90">
          <div className="h-[1552px] relative rounded-[77px] w-[589px]" data-name="image 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[77px]">
              <img alt="" className="absolute h-full left-[-21.26%] max-w-none top-0 w-[148.17%]" src={imgImage2} />
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Montserrat_Alternates:Regular',sans-serif] leading-[normal] left-[88px] not-italic text-[32px] text-white top-[37px] whitespace-nowrap">BAFtech</p>
      <Frame2 />
    </div>
  );
}