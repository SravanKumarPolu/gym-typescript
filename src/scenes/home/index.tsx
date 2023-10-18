import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortun from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectPage: (value: SelectedPage) => void;
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
          <div>
              {/* mainheader */}
              <div>
                  {/* Heading */}
                  <div>
                      <div>
                          <div>
                          <img src={HomePageText}
                              alt="home-page-text"
                          />
                      </div>
                      </div>
                      <p className='text-primary-300'>Sharing inspirational health quotes is a great way to encourage your team to stay positive,
                          inspired, and healthy.</p>
                  </div>
                  {/* ACtion */}
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
              {/* Image */}
              <div>
                  <img src={ HomePageGraphic} alt='home-pageGraphic' />
              </div>
          </div>
          
    </section>
  )
}

export default Home;