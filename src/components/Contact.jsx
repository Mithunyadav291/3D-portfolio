import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Send,
  Facebook,
  Twitter,
  X,
  Linkedin,
  Github,
} from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import toast from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "f689a24b-59f9-407c-9a8d-b004ec5fae77");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    // console.log(json);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        toast.success("Message sent successfully!");
        // console.log("Success", res);

        form.reset(); // ✅ Clear the form after successful submission
      } else {
        toast.error("Submission failed", res);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="h-[90vh] overflow-y-auto w-full bg-gray-900 text-white rounded-2xl px-4 pt-16 pb-6 sm:px-10">
      {/* Left Contact Info */}

      <div className="mx-auto">
        {/* ----- Heading ----- */}
        <h2 className="text-4xl font-bold text-center  mb-8">
          Contact <span className="text-blue-600">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10  items-center w-full  ">
          <div className="flex flex-col gap-8 md:w-1/3">
            <div className="flex items-center gap-4">
              <a
                href="tel:+9779815041051"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 "
              >
                <Phone className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="font-semibold">Mobile No</p>
                  <p className="text-gray-300">+977-9815041051</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-300">Dharan, Nepal.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="mailto:yadavmithun291@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 "
              >
                <Mail className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">yadavmithun291@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 "
              >
                <Globe className="text-blue-600 w-6 h-6" />
                <div>
                  <p className="font-semibold">Website</p>
                  <p className="text-gray-300">www.abc123.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex-1 w-full md:w-1/3">
            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/mithun.yadav.909848"
                target="_blank"
                className="p-2 bg-gray-700 rounded-full hover:bg-blue-500"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-700 rounded-full hover:bg-blue-500"
              >
                <BsTwitterX />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-full hover:bg-blue-500"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/Mithunyadav291"
                className="p-2 bg-gray-700 rounded-full hover:bg-blue-500"
              >
                <Github />
              </a>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="md:w-1/2 p-3 w-full bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="w-full md:w-1/2 p-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <textarea
                placeholder="Type your message here..."
                name="message"
                required
                className="p-3 h-40 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-32 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-6 h-6 rounded-full border-3 border-t-blue-600 border-gray-300 animate-spin"></div>
                ) : (
                  <>
                    Send <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
