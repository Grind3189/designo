import ContactForm from "../components/contact-us/ContactForm";
import Locations from "../components/shared/Locations";
import leafImg from "../assets/shared/desktop/bg-pattern-leaf.svg";

function ContactUs() {
  document.body.style.overflowX = "hidden"
  return (
    <main>
      <ContactForm />
      <div className="relative md:my-[120px] xl:my-[160px]">
        <Locations />
        <img src={leafImg} alt="leaf image" className="hidden absolute top-[90px] right-[-200px] -z-10 xl:block" />
      </div>
    </main>
  );
}

export default ContactUs;
