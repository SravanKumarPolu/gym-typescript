
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon }
    from '@heroicons/react/24/solid';
import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Benefit from '@/scenes/benefits/Benefit';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import ActionButton from '@/shared/ActionButton';

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
const container = {
    hidden: {},
    visible: {
        transition:{staggerChildren:0.2}
    }
}
    
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
   
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
      <section
          id='benefits'
          className='mx-auto min-h-full w-5/6 py-20 my-auto '
      >
          <motion.div
           onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
          >
              {/* Header */}
              <motion.div
                  className='md:my-5 md:w-3/5'
                  initial="hidden"
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible:{opacity:1,x:0},
                  }}
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
              </motion.div> 
              {/* Benefits */}
              <motion.div
                  className=' md:flex items-center justity-between
               gap-8 mt-5 '
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               variants={container}
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
              </motion.div>

              {/* Graphics and Description */}
              <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'
              >
              <img className='mx-auto'
                  alt='benefits-page-graphic'
                  src={BenefitsPageGraphic}
              />

              {/* Description */}
              <div>
                  {/* Title */}
                  <div className='relative'>
                      <div className='before:absolute before:-top-20
                       before:-left-20 before:z-[1] before:content-abstractwaves'>
                              <motion.div
                                  initial="hidden"
                                  whileInView='visible'
                                  viewport={{ once: true, amount: 0.5 }}
                                  transition={{ duration: 0.5 }}
                                  variants={{
                                      hidden: { opacity: 0, x: 50 },
                                      visible:{opacity:1,x:0},
                                  }}
                              >
                              <HText>
                                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                  <span className='text-primary-500'>
                                      FIT
                                  </span>.
                              </HText>
                          </motion.div>    
                      </div>
                  </div>

                  {/* Descript */}
                      <motion.div
                            
                            initial="hidden"
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay:0.2,duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x:- 50 },
                                visible:{opacity:1,x:0},
                            }}
                      >
                      <p>It’s a misconception that you need to go to the gym or spend thousands of dollars on equipment to get a good workout.
                          Thousands of my 28ers have achieved fantastic results working out in the comfort of their own home using little to
                           no equipment at all</p>
                      <p>Need some training structure? Our plans will get you back on track, and keep you there.
                          Explore the Plans tab for training plans based on your goals and training days - there's a plan for everyone</p>
                  </motion.div>
                  
                  {/* Button */}
                  <div className='relative mt-16'>
                      <div className='before:absolute before:-bottom-20
                       before:right-40 before:z-[-1] before:content-sparkles'
                      >
                          <ActionButton setSelectedPage={setSelectedPage} >
                              Join Now
                          </ActionButton>  
                      </div>
                  </div>
              </div>
             </div>
          </motion.div>
      </section>
  )
}

export default Benefits