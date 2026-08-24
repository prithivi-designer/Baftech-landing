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
    <div className="content-stretch flex flex-col gap-[46px] items-center justify-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal h-[92px] leading-[normal] min-w-full relative shrink-0 text-[16px] text-center text-shadow-[0px_4px_7px_rgba(0,0,0,0.45)] text-white w-[min-content]">a generative AI platform that enables users to create content, answer questions, generate code, analyze documents, and automate workflows through natural language conversations powered by large language models.</p>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[33px] items-center left-[calc(50%-0.5px)] top-[143px] w-[403px]">
      <p className="[word-break:break-word] font-['Urbanist:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-white whitespace-nowrap">
        <span className="font-['Urbanist:SemiBold',sans-serif] font-semibold leading-[normal] text-[56px]">Open</span>
        <span className="font-['Urbanist:ExtraLight',sans-serif] font-extralight leading-[normal] text-[56px]">Chat</span>
      </p>
      <Frame1 />
    </div>
  );
}

export default function MobileResponsive() {
  return (
    <div className="bg-black relative size-full" data-name="mobile responsive">
      <div className="-translate-x-1/2 absolute flex h-[639px] items-center justify-center left-1/2 top-[384px] w-[440px]">
        <div className="flex-none rotate-90">
          <div className="h-[440px] relative w-[639px]" data-name="image 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[257.73%] left-[-0.22%] max-w-none top-[-78.86%] w-[99.71%]" src={imgImage2} />
            </div>
          </div>
        </div>
      </div>
      <Frame2 />
      <p className="[word-break:break-word] absolute font-['Montserrat_Alternates:Regular',sans-serif] leading-[normal] left-[18px] not-italic text-[32px] text-white top-[23px] whitespace-nowrap">BAFtech</p>
    </div>
  );
}