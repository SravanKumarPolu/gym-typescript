import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectPage: (value: SelectedPage) => void
}

const Home = ({ setSelectPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    
  return (
      <section
          id='home'
          className='gap-16 bg-gray-20 py-10 md:h-full
          md:pb-0'
      >
          {/* Image and mainheader */}
          <div className='md:flex mx-auto w-5/6 items-center
          justify-center md:h-6/6'
          >
              {/* mainheader */}
              <div className='z-10 mt-32 md:basis-3/5'>
                  {/* Heading */}
                  <div className='md:-mt-20'>
                      <div className='relative'>
                          <div className='before:absolute before:-top-20
                          before:-left-20 before:z-[-1]
                         md:before:content-evolvetext'
                          > 
                          <img src={HomePageText}
                              alt="home-page-text"
                          />
                      </div>
                      </div>
                      <p className='text-primary-600 mt-8 text-sm'>Sharing inspirational health quotes is a great way to encourage your team to stay positive,
                          inspired, and healthy.</p>
                  </div>
                  {/* ACtion */}
                  <div className='mt-8 flex items-center gap-8 '>
                  <ActionButton setSelectedPage={setSelectPage}
                  >
                      Join Now
                  </ActionButton>
                  <AnchorLink
                      className='text-sm font-bold text-primary-500 underline
                  hover:text-secondary-500'
                      onClick={() => setSelectPage(SelectedPage.ContactUs)}
                      href={`#${SelectedPage.ContactUs}`}
                  >
                   <p>Learn More</p>   
                  </AnchorLink>
               </div>
              </div>
              {/* Image */}
              <div className='flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-item-end'
              >
                  <img src={ HomePageGraphic} alt='home-pageGraphic' />
              </div>
          </div>
          {/* Sponsors */}
          {isAboveMediumScreens &&(
          <div>
              <div>
                  <div>
                  <img alt="redbull-sponsor"
                              src={SponsorRedBull} />
                           <img alt="forbes-sponsor"
                              src={SponsorForbes} />
                           <img alt="fortune-sponsor"
                      src={SponsorFortune} />
                  </div>
              </div>
          </div>
)}

    </section>
  )
}

export default Home;