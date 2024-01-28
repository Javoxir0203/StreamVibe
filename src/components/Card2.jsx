import React from 'react';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';
import image5 from '../assets/image5.svg';
import image6 from '../assets/image6.svg';

const Card = ({ button, title, description }) => (
    


  <div className="w-[450px] p-10 overflow-hidden border gap-4 border-[#262626] rounded-lg shadow-lg bg-gradient-to-tr from-[#0F0F0F] via-[#0F0F0F] to-[#e5000080]">
    <div className="flex items-center gap-4 ">
        <div>
      <button className='p-4 rounded-xl border border-[#1F1F1F] bg-[#141414]'>
        <img src={button} alt={title} />
      </button>
      </div>
      <div>
      <h4 className="font-bold text-[#999999] text-lg mb-2">{title}</h4>
      </div>
    </div>
    <div className="px-6 py-4">
      <p className="text-[#999999] text-base">{description}</p>
    </div>
  </div>
);

const Card2 = () => {
  const cardData = [
    { button: image1, title: 'Smartphones', description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store' },
    { button: image2, title: 'Tablet', description: 'StreamVibe is optimized for both Android and iOS tablets. Download our app from the Google Play Store or the Apple App Store' },
    { button: image3, title: 'Smart TV', description: 'StreamVibe is optimized for Smart TVs. Download our app from your TV app store.' },
    { button: image4, title: 'Laptops', description: 'StreamVibe is compatible with laptops. Access our platform from your favorite web browser.' },
    { button: image5, title: 'Gaming Consoles', description: 'Experience gaming on a new level. Download StreamVibe from your console store.' },
    { button: image6, title: 'VR Headsets', description: 'Immerse yourself in VR content. Download our VR app from the respective store.' },
  ];

  return (
    <>
     <div className=" container  mx-auto mt-32   ">
   <h3 className=' leading-[72px] text-[#FFFFFF] text-4xl font-bold'>We Provide you streaming experience across various devices.</h3>
        <p className='font-normal text-lg text-[#999999] mb-12 mt-2'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
    </div>
        


    <div className="container mx-auto flex flex-wrap justify-center mb-24 gap-8">
      {cardData.map((card, index) => (
        <Card key={index} button={card.button} title={card.title} description={card.description} />
      ))}
    </div>
    </>
  );
};

export default Card2;
