import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Logo and Description */}
        <div className="flex flex-col items-start space-y-4">
          <img alt="logo" src={Logo} className="w-32" />
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium est voluptatem illum sunt veniam quia id ex nihil, debitis, nam facilis? Officia voluptates quam cupiditate sequi. Magni maiores at porro.
          </p>
          <p className="text-gray-600 text-xs"> &#169; Evogym All Rights Reserved.</p>
        </div>
        
        {/* Center Column: Links */}
        <div className="flex flex-col items-start space-y-4">
          <h4 className="text-lg font-bold text-gray-800">Links</h4>
          <a href="#" className="text-sm text-gray-600 hover:text-primary-500 transition duration-300">Fitness Goal</a>
          <a href="#" className="text-sm text-gray-600 hover:text-primary-500 transition duration-300">Workout for Health</a>
          <a href="#" className="text-sm text-gray-600 hover:text-primary-500 transition duration-300">Yoga to Get Coolness</a>
        </div>
        
        {/* Right Column: Contact Information */}
        <div className="flex flex-col items-start space-y-4">
          <h4 className="text-lg font-bold text-gray-800">Contact Us</h4>
          <a href="#" className="text-sm text-gray-600 hover:text-primary-500 transition duration-300">fitnnes@gmail.com</a>
          <a href="#" className="text-sm text-gray-600 hover:text-primary-500 transition duration-300">+91987651234</a>
        </div>
      </div>

      {/* Divider (optional, to add some visual separation) */}
      <div className="mt-12 border-t border-gray-300"></div>
      
      {/* Bottom Copyright */}
      <div className="mt-6 text-center text-xs text-gray-500">
        &#169; Evogym All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;