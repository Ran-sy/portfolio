import React from "react";
import { send } from "emailjs-com";
import "animate.css";
import flying from "../assets/flying.png";

function Contact() {
  const form = React.useRef();
  const inputFirstName = React.useRef();
  const inputLastName = React.useRef();
  const inputNumber = React.useRef();
  const inputEmail = React.useRef();
  const inputMessage = React.useRef();

  React.useEffect(() => {
    let formData = {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      message: "",
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      formData.firstName = inputFirstName?.current?.value || "";
      formData.lastName = inputLastName?.current?.value || "";
      formData.number = inputNumber?.current?.value || "";
      formData.email = inputEmail?.current?.value || "";
      formData.message = inputMessage?.current?.value || "";

      send("service_gibnqoa", "template_fbykht9", formData, "A6Y4mKhcdcOPf1Lvz")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          inputFirstName.current.value = "";
          inputLastName.current.value = "";
          inputNumber.current.value = "";
          inputEmail.current.value = "";
          inputMessage.current.value = "";
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    };
    form?.current?.addEventListener("submit", (e) => handleSubmit(e));
    return form.current.removeEventListener("submit", (e) => handleSubmit(e));
  }, []);

  return (
    <section
      id="contact"
      className="w-full pb-[10vh] md:h-screen contact-bg-gradient"
    >
      <div className="max-w-6xl m-auto px-2 py-16 w-full">
        <div className="grid md:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 md:col-span-2 w-full rounded-xl p-4">
            <h2 className="uppercase text-3xl font-sans tracking-wider font-extrabold">
              .Get In Touch.
            </h2>
            <img
              src={flying}
              alt=""
              className="w-full block mx-auto animate__animated animate__pulse"
            />
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 bg-gray-300 rounded-xl md:p-2">
            <div className="p-2">
              <form ref={form} action="post">
                <div className="grid md:grid-cols-2 gap-4 w-full py-1">
                  <div className="flex flex-col">
                    <label htmlFor="fName" className="uppercase text-md py-2">
                      First Name:
                    </label>
                    <input
                      id="fName"
                      ref={inputFirstName}
                      type="text"
                      name="Name"
                      placeholder="First Name"
                      required
                      className="border-2 rounded-lg p-1 border-gray-400 bg-gray-100 focus:border-green-400 focus:bg-gray-200 focus:text-black/70 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lName" className="uppercase text-md py-2">
                      Last Name:
                    </label>
                    <input
                      id="lName"
                      ref={inputLastName}
                      type="text"
                      name="Name"
                      placeholder="First Name"
                      required
                      className="border-2 rounded-lg p-1 border-gray-400 bg-gray-100 focus:border-green-400 focus:bg-gray-200 focus:text-black/70 outline-none"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 w-full py-1">
                  <div className="flex flex-col">
                    <label htmlFor="number" className="uppercase text-md py-2">
                      Phone Number:
                    </label>
                    <input
                      id="number"
                      ref={inputNumber}
                      type="text"
                      inputMode="numeric"
                      name="Number"
                      required
                      placeholder="+201111111111"
                      className="border-2 rounded-lg p-1 border-gray-400 bg-gray-100 focus:border-green-400 focus:bg-gray-200 focus:text-black/70 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="uppercase text-sm py-1">
                      Email:
                    </label>
                    <input
                      id="email"
                      ref={inputEmail}
                      type="email"
                      inputMode="email"
                      name="Email"
                      placeholder="Email@somthing.com"
                      required
                      className="border-2 rounded-lg p-1 border-gray-400 bg-gray-100 focus:border-green-400 focus:bg-gray-200 focus:text-black/70 outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-1">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    ref={inputMessage}
                    name="Message"
                    required
                    placeholder="Your message"
                    className="border-2 rounded-lg p-1 border-gray-400 bg-gray-100 focus:border-green-400 focus:bg-gray-200 focus:text-black/70 outline-none"
                    rows={5}
                  />
                </div>
                <button
                  type="submit"
                  className="relative w-full p-4 font-bold bg-green-200 text-gray-900 mt-4 before:absolute before:contents before:bg-[#22504e] before:inset-0 before:scale-0 before:opacity-0 hover:before:scale-100 before:hover:opacity-40 before:transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
