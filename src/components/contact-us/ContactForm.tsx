import {useRef, useState} from "react";
import emailjs from '@emailjs/browser'
import FormInput from "./FormInput";
import twoCircleImg from '../../assets/shared/desktop/bg-pattern-two-circles.svg'
import singleCircleImg from '../../assets/shared/desktop/bg-pattern-small-circle.svg'

interface ContactDetailsState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface IsEmptyState {
  name: boolean;
  email: boolean;
  phone: boolean;
}

const ContactForm = () => {
  const contactFormRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [contactDetails, setContactDetails] = useState<ContactDetailsState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isEmpty, setIsEmpty] = useState<IsEmptyState>({
    name: false,
    email: false,
    phone: false,
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContactDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setIsEmpty((prev) => {
      return {
        ...prev,
        [e.target.name]: false,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !contactDetails.name && setIsEmpty((prev) => ({ ...prev, name: true }));
    !contactDetails.email && setIsEmpty((prev) => ({ ...prev, email: true }));
    !contactDetails.phone && setIsEmpty((prev) => ({ ...prev, phone: true }));

    if (contactDetails.email && contactDetails.name && contactDetails.phone) {
      setIsSubmitting(true);
      submitForm();
    }
  };

  const submitForm = async () => {
    try {
      const result = await emailjs.sendForm(
        "contact_service",
        "contact_form",
        contactFormRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC,
      );
      if (result.text === "OK") {
        setContactDetails({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      ref={contactFormRef}
      className={`relative z-0 flex flex-col gap-12 overflow-hidden bg-peach-200 px-6 py-[72px]
        text-[#FFFFFF] md:rounded-[15px] md:px-[58px] xl:flex-row xl:gap-[95px] xl:px-[96px] xl:py-[54px]`}
    >
      <div className="flex flex-col gap-6 text-center md:text-left xl:w-[55%] xl:justify-center">
        <h1 className="text-[32px] font-medium md:text-[48px]">Contact Us</h1>
        <p className="text-[15px] leading-[25px] md:text-[16px] max-xl:md:w-[573px]">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <div className="flex flex-col gap-[25px] xl:w-[45%]">
        <FormInput
          handleChange={handleChange}
          inputName="name"
          value={contactDetails.name}
          isEmpty={isEmpty.name}
        />
        <FormInput
          handleChange={handleChange}
          inputName="email"
          value={contactDetails.email}
          isEmpty={isEmpty.email}
        />
        <FormInput
          handleChange={handleChange}
          inputName="phone"
          value={contactDetails.phone}
          isEmpty={isEmpty.phone}
        />
        <div className="flex items-center justify-between border-b border-b-[#fff] px-[14px] py-[11px] focus-within:border-b-2">
          <textarea
            placeholder="Your Message"
            className="h-[102px] w-full resize-none bg-transparent text-inherit outline-none placeholder:text-white-200"
            onChange={handleChange}
            name="message"
            value={contactDetails.message}
          />
        </div>
        <button
          className={`mt-10 h-[56px] w-[152px] self-center rounded-lg bg-[#fff] font-medium leading-[1px] text-black-200
         md:self-end lg:hover:bg-peach-100 lg:hover:text-[#fff] xl:mt-0`}
        >
          {isSubmitting ? "LOADING..." : "SUBMIT"}
        </button>
      </div>

      <img
        src={twoCircleImg}
        alt="two circle image"
        className="absolute left-[0] top-0 scale-125 md:hidden"
      />
      <img
        src={singleCircleImg}
        alt="circle image"
        className="absolute bottom-[-190px] right-[-80px] -z-10 scale-150 md:bottom-[450px] md:left-[70px] md:rotate-[-90deg] md:scale-[3.2] xl:bottom-[200px] xl:left-[225px]"
      />
    </form>
  );
};

export default ContactForm;
