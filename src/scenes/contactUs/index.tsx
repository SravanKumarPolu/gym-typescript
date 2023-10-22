import { useForm } from "react-hook-form"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import HText from "@/shared/HText";
// import ContactUsPageGraphic form "@/assets/ContactUsPageGraphic.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({setSelectedPage}: Props) => {
  return (
      <section id="contactus"
      className="mx-auto w-5/6 pt-24 pb-32"
      >
          <motion.div
              onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}
  
          >
              {/* Header */}
              <motion.div
                      className="mx-auto w-5/6"
                      initial="hidden"
                      whileInView='visible'
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                          hidden: { opacity: 0, x:- 50 },
                          visible:{opacity:1,x:0},
                      }}
              >
                  <HText>
                      <span
                          className="text-primary-500"
                      >JOIN NOW</span> TO GET IN SHAPE
                  </HText>
                  <p className="text-primary-700 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nam asperiores est libero explicabo itaque reiciendis molestias, magni officia corporis pariatur quo totam accusantium animi fugiat molestiae, delectus, nihil alias!
                  </p>
              </motion.div>
          </motion.div>
      </section>
  )
}

export default ContactUs