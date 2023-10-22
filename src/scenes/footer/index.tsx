import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = (props: Props) => {
  return (
      <footer
      className="bg-primary-100 py-16"
      >
          <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
              <div className="mt-16 basis-1/2 md:mt-0">
                  <img alt='logo' src={Logo} />  
                  <p className="my-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium est voluptatem illum sunt veniam quia id ex nihil, debitis, nam facilis?
                      Officia voluptates quam cupiditate sequi. Magni maiores at porro.
                  </p>
                  <p> &#169; Evogym All Right Reserved. </p>
              </div> 
              <div className="mt-16 basis-1/4 md:mt-0">
                  <h4 className="font-bold">
                   Links   
                  </h4>
                  <p className="my-4"> Fitness goal </p>
                  <p className="my-4"> Workout for health</p>
                  <p className="my-4"> Yoga to get coolness</p>
              </div>   
              <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="font-bold">
                   Contact Us   
                  </h4>
                  <p className="my-4"> fitnnes@gmail.com </p>
                  <p className="my-4"> +91987651234</p>
                  
              </div>     
          </div>
          
   </footer>
  )
}

export default Footer