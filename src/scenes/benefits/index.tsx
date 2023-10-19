
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon }
    from '@heroicons/react/24/solid';
import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Benefit from '@/scenes/benefits/Benefit';

const benefits: Array<BenefitType> = [

    {
        icon: <HomeModernIcon className='h-6 w-6 ' />,
        title: "State of the Art Facilities",
        description: 'We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide ture care into each and every member'
    },
    {
        icon: <UserGroupIcon className='h-6 w-6 ' />,
        title: "100's of Diverse Classes",
        description: 'We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide ture care into each and every member'
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6 ' />,
        title: 'Expert and Pro Trainers',
        description: 'We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide ture care into each and every member'
    },
];
    
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
   
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
      <section
          id='benefits'
          className='mx-auto min-h-full w-5/6 py-20'
      >
          <motion.div
           onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
          >
              {/* Header */}
              <div
              className='md:my-5 md:w-3/5'
              >
                  <HText> 
                      MORE THAN JUST GYM.
                  </HText>
                  <p
                  className='my-5 text-sm text-primary-700'
                  >
                      We provide world class fitness equipment, trainers
                      and classes to get you to your ultimate
                      fitness goals with ease. We provide ture care into
                      each and every member
                  </p>
              </div> 
              {/* Benefits */}
              <div
              className=' md:flex items-center justity-between gap-8 mt-5 '
              >
                  {benefits.map((benefit:BenefitType,index:number) => (
                    <Benefit
                    key={index}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                  />
                      ))}   
              </div>

          </motion.div>
      </section>
  )
}

export default Benefits