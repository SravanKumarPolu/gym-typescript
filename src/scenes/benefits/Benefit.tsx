import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    icon: JSX.Element;
    title: String;
    description: String;
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
    return (
      <div className='mt-6 flex flex-col rounded-md border-2 border-gray-100 px-5 py-8'>
        <div className='mb-4 flex justify-center'>
          <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
            {icon}
          </div>
        </div>
        <h4 className='font-bold text-center'>{title}</h4>
        <p className='my-3'>{description}</p>
        <AnchorLink
          className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          Learn More
        </AnchorLink>
      </div>
    );
  }
  
  export default Benefit;
  
  
  
  
  
  
  