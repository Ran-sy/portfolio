import { useState } from "react";
import { useTheme } from "../features/theme";
import "animate.css";

function NewsLetter() {
  const theme = useTheme();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing :D \n Your email is ${email}`);
    clearFields();
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <section
      className="absolute top-0 left-[12%] lg:left-[20%] xl:left-[25%] p-4 lg:p-8 mx-auto w-[76%] max-w-2xl rounded-xl translate-y-[-10vh] hover:animate__animated hover:animate__rubberBand hover:duration-500"
      style={{ background: theme.foreground, color: theme.text }}
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-5">
        <div className="xl:col-span-2 p-1">
          <h5 className="wrap font-thin">
            Leave here your email address<br></br>I wont spam you, I promise :D
          </h5>
        </div>
        <div className="xl:col-span-3 p-1 h-11 ">
          <form onSubmit={handleSubmit}>
            <div
              className="rounded-lg"
              style={{
                border: `1px solid ${theme.foreground}`,
                outline: `1px solid ${theme.background}`,
                background: theme.text,
                color: theme.background,
              }}
            >
              <input
                className="rounded-sm h-11 py-1 px-2 w-4/6 bg-transparent focus:border focus:border-green-400 focus:bg-gray-200 focus:text-black/70 focus:outline-none focus:font-sans text-sm focus:text-lg"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
              <button
                type="submit"
                className="text-center w-2/6 h-11 rounded-sm"
                style={{ background: theme.primary }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
