import React, { useState } from "react";
import ContactMusicIcon from "../../assets/images/contact-music-icon.svg";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [purpose, setPurpose] = useState("say_hi");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name,
          email,
          message,
          purpose,
        }).toString(),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <section  id="contact-us"  className="max-w-7xl mx-auto py-16 px-4">
      <div className="flex items-center mb-8 flex-col md:flex-row">
        <h2 className="text-3xl md:text-4xl font-bold bg-mm-blue inline-block px-4 py-2 rounded-lg mb-4 md:mb-1">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl text-mm-dark md:ml-6 text-center md:text-left">
          Connect with Us: Let's Discuss Any Questions or Concerns
        </p>
      </div>

      <div className="bg-[#f3f4f6] rounded-3xl p-8 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-2/3 pr-0 md:pr-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <div className="flex flex-col md:flex-row md:space-x-6 mb-6">
              <label className="flex items-center cursor-pointer mb-4 md:mb-0">
                <input
                  type="radio"
                  name="purpose"
                  value="say_hi"
                  checked={purpose === "say_hi"}
                  onChange={() => setPurpose("say_hi")}
                  className="sr-only"
                />
                <span
                  className={`w-5 h-5 border-2 border-[#191A23] rounded-full inline-block mr-2 relative`}
                >
                  {purpose === "say_hi" && (
                    <span className="absolute inset-1 bg-[#b8dcff] rounded-full"></span>
                  )}
                </span>
                Say Hi
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="purpose"
                  value="ask_question"
                  checked={purpose === "ask_question"}
                  onChange={() => setPurpose("ask_question")}
                  className="sr-only"
                />
                <span
                  className={`w-5 h-5 border-2 border-[#191A23] rounded-full inline-block mr-2 relative`}
                >
                  {purpose === "ask_question" && (
                    <span className="absolute inset-1 bg-[#b8dcff] rounded-full"></span>
                  )}
                </span>
                Ask a Question
              </label>
            </div>

            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full p-3 border border-[#191A23] rounded-lg bg-white"
              required
            />

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border border-[#191A23] rounded-lg bg-white"
              required
            />

            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                purpose === "ask_question"
                  ? "Ask your question here"
                  : "Say hello to the team"
              }
              className="w-full p-3 border border-[#191A23] rounded-lg bg-white"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#191A23] text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <p className="text-green-600">Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600">
                There was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0 flex justify-center hidden md:block">
          <img
            src={ContactMusicIcon}
            alt="Music Icon"
            className="w-full max-w-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
