import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lh8c7sh",
        "template_hji68ou",
        form.current,
        "YETHnX_peNZlOoZ5w"
      )
      .then((response) => {
        console.log("Email sent successfully:", response.text);
        form.current.reset(); // Reset the form after successful submission
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000); // Clear the success message after 5 seconds
        toast.success("Submitted successfully!"); // Show a success toast
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div>
      <div className="banner">
        <h1 className="text-center text-white font-extrabold py-36 md:px-96 text-6xl">
          Contact Us
        </h1>
      </div>
      <div className="main-header-texts">
        <h1 className="text-3xl mb-5 font-semibold text-center text-BlueBlackColor">
          What Can We help you?
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          alias expedita provident voluptas eum deleniti dicta beatae assumenda
          tenetur exercitationem.
        </p>
      </div>

      <div className="contact-us-form">
        <div className="left">
          <h1 className="text-2xl mb-5 font-semibold text-center">
            Working hours
          </h1>
          <p>Monday – Sunday</p>
          <p>8:00AM – 8:00PM</p>
        </div>
        <div className="right">
          <form ref={form} onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="from_name" />
            </label>
            <label>
              Email:
              <input type="email" name="from_email" />
            </label>
            <label>
              Subject:
              <input type="text" name="from_subject" />
            </label>
            <label>
              Message:
              <textarea name="message" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
