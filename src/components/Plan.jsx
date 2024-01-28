import React from 'react';
import { ButtonGroup, Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';

const Plan = () => {
  return (

    <div className="container mx-auto mt-28">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-5xl font-semibold leading-[72px] text-white">
            Choose the plan that's right for you
          </h4>
          <p className="text-lg text-[#999999] font-normal mb-12 mt-2">
            Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
          </p>
        </div>
        <div>
          <div className="flex w-max flex-col gap-4">
            <ButtonGroup>
              <Button>Monthly</Button>
              <Button>Yearly</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <div className='flex justify-between gap-5'>
      <Card className="mt-6 w-[450px] bg-[#1A1A1A] p-3" >
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-[#FFF]">
           Basic Plan
          </Typography>
          <Typography className='text-[#999]'>
          Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
          </Typography>
          <Typography className='text-[#FFF] font-semibold mt-3'>
            $9.99
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 gap-5">
          <Button className='py-4 bg-[#000] mr-5'>Start Free Trial</Button>
          <Button className='py-4 bg-[#E50000]'>Choose Plan</Button>
        </CardFooter>
      </Card>
 <Card className="mt-6 w-[450px] bg-[#1A1A1A] p-3" >
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-[#FFF]">
           Basic Plan
          </Typography>
          <Typography className='text-[#999]'>
          Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
          </Typography>
          <Typography className='text-[#FFF] font-semibold mt-3'>
            $9.99
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 gap-5">
          <Button className='py-4 bg-[#000] mr-5'>Start Free Trial</Button>
          <Button className='py-4 bg-[#E50000]'>Choose Plan</Button>
        </CardFooter>
      </Card>
       <Card className="mt-6 w-[450px] bg-[#1A1A1A] p-3" >
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 text-[#FFF]">
           Basic Plan
          </Typography>
          <Typography className='text-[#999]'>
          Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
          </Typography>
          <Typography className='text-[#FFF] font-semibold mt-3'>
            $9.99
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 gap-5">
          <Button className='py-4 bg-[#000] mr-5'>Start Free Trial</Button>
          <Button className='py-4 bg-[#E50000]'>Choose Plan</Button>
        </CardFooter>
      </Card>
      </div>
    </div>
  );
};

export default Plan;
