export enum SelectedPage {
 
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
  Home = "Home"
}
export interface BenefitType{
  icon: JSX.Element;
  title: string;
  description: string;
 
}
export interface ClassType{
  name: string;
  description?: string;
  image: string;
  }