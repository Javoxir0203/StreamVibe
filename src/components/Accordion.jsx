import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
<div className=" container  mx-auto   ">
    <div className=" mx-6   flex items-center mt-40 justify-between">
        <div>
            <h3 className=' leading-[72px] text-[#FFFFFF] text-5xl font-bold'>Frequently Asked Questions</h3>
        <p className='font-normal text-lg text-[#999999] mb-12 mt-2'>Got questions? We've got answers! Check out our FAQ section to the most commonStreamVibe.</p>
        </div>
        <div>
             <button className="bg-[#E50000]  text-white   py-4 px-10 rounded ">Ask a Question</button>
        </div>
    </div>
    </div>
<div className=" container  mx-auto   ">
    
    <div className="flex mt-16 justify-between">
    <div>
        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">01</button></div>
      <Accordion className="w-[600px] p-8"  open={open === 1} icon={<Icon id={1} open={open} />}>
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(1)}>What is StreamVibe??</AccordionHeader>
        <AccordionBody className='text-[#999]'>
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>

        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">02</button></div>
      <Accordion className="w-[600px] p-8" open={open === 2} icon={<Icon id={2} open={open} />}>
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(2)}>How much does StreamVibe cost?</AccordionHeader>
        <AccordionBody className='text-[#999]'>
         StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>

        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">03</button></div>
      <Accordion className="w-[600px] p-8" open={open === 3} icon={<Icon id={3} open={open} />}>
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(3)}>What content is available on StreamVibe?</AccordionHeader>
        <AccordionBody className='text-[#999]'>
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>

        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">04</button></div>
      <Accordion className="w-[600px] p-8" open={open === 4} icon={<Icon id={4} open={open} />}>
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(4)}>How can I watch StreamVibe?</AccordionHeader>
        <AccordionBody className='text-[#999]'>
         StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>
     
    </div>
     <div>
        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">05</button></div>
      <Accordion className="w-[600px] p-8" open={open === 5} icon={<Icon id={5} open={open} />}>
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(5)}>How do I sign up for StreamVibe?</AccordionHeader>
        <AccordionBody className='text-[#999]'>
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>

        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">06</button></div>
      <Accordion className="w-[600px] p-8" open={open === 6} icon={<Icon id={6} open={open} />}>
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(6)}>What is the StreamVibe free trial?</AccordionHeader>
        <AccordionBody className='text-[#999]'>
         StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>

        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">07</button></div>
      <Accordion className="w-[600px] p-8" open={open === 7} icon={<Icon id={7} open={open} />}>
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(7)}>How do I contact StreamVibe customer support?</AccordionHeader>
        <AccordionBody className='text-[#999]'>
        StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>

        <div className="flex items-center gap-5">
        <div><button className="p-5  border-[#262626] border-2 text-[#FFF] rounded-lg">08</button></div>
      <Accordion className="w-[600px] p-8" open={open === 8} icon={<Icon id={8} open={open} />}>
       <AccordionHeader className="text-[#FFF] text-xl border-b-[#E50000] hover:text-red-900" onClick={() => handleOpen(8)}>What are the StreamVibe payment methods?</AccordionHeader>
        <AccordionBody className='text-[#999]'>
         StreamVibe is a streaming service that allows you to watch movies and shows on demand.
        </AccordionBody>
      </Accordion>
      </div>
     
    </div>
</div>
</div>
    </>
  );
}