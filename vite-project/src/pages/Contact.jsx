// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <div className="relative bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center overflow-hidden">
//       {/* Background Gradient Effect */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 opacity-90"></div>

//       {/* Contact Header */}
//       <motion.div 
//         className="relative z-10 text-center max-w-3xl px-6"
//         initial={{ opacity: 0, y: 20 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-5xl font-extrabold text-green-400 mb-4">
//           📬 Get in Touch
//         </h1>
//         <p className="text-lg text-gray-300 mb-6">
//           Have questions or suggestions? Contact us for collaborations, inquiries, or support.
//         </p>
//       </motion.div>

//       {/* Contact Form */}
//       <motion.div 
//         className="relative z-10 bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full"
//         initial={{ opacity: 0, y: 20 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 1.2 }}
//       >
//         <form className="space-y-4">
//           <div>
//             <label className="block text-green-300 text-sm font-semibold mb-2">Name</label>
//             <input type="text" className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none" placeholder="Your Name" />
//           </div>
//           <div>
//             <label className="block text-green-300 text-sm font-semibold mb-2">Email</label>
//             <input type="email" className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none" placeholder="Your Email" />
//           </div>
//           <div>
//             <label className="block text-green-300 text-sm font-semibold mb-2">Message</label>
//             <textarea className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none" rows="4" placeholder="Your Message"></textarea>
//           </div>
//           <button type="submit" className="w-full bg-green-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-green-400 transition">
//             Send Message
//           </button>
//         </form>
//       </motion.div>

//       {/* Contact Info Section */}
//       <div className="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//         {[
//           { icon: "📍", title: "Our Location", detail: "New Delhi, India" },
//           { icon: "📧", title: "Email Us", detail: "support@climatewatch.com" },
//           { icon: "📞", title: "Call Us", detail: "+1 234 567 890" },
//         ].map((item, index) => (
//           <motion.div 
//             key={index}
//             className="p-6 bg-gray-800 rounded-lg shadow-lg"
//             whileHover={{ scale: 1.05 }}
//           >
//             <h3 className="text-xl font-semibold text-green-300">{item.icon} {item.title}</h3>
//             <p className="text-lg font-bold">{item.detail}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Wave Background Effect */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
//         <svg className="relative block w-[calc(100%+1.3px)] h-[90px]" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
//           <path 
//             d="M0,100 C300,50 600,150 1200,100 L1200,120 L0,120 Z" 
//             fill="#1a202c"
//           ></path>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4xstd2b", // Replace with your Service ID
        "template_kzsdnjl", // Replace with your Template ID
        formData,
        "dGg0v02TNAylqznV1" // Replace with your Public Key
      )
      .then(() => {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" }); // Clear form after sending
      })
      .catch((error) => console.error("Email sending failed:", error));
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 opacity-90"></div>

      <motion.div 
        className="relative z-10 text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-green-400 mb-4">📬 Get in Touch</h1>
        <p className="text-lg text-gray-300 mb-6">
          Have questions or suggestions? Contact us for collaborations, inquiries, or support.
        </p>
      </motion.div>

      <motion.div 
        className="relative z-10 bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }}
      >
        {isSent ? (
          <p className="text-green-400 text-center text-lg">✅ Message Sent Successfully!</p>
        ) : (
          <form onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-green-300 text-sm font-semibold mb-2">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required 
                className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-green-300 text-sm font-semibold mb-2">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required 
                className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-green-300 text-sm font-semibold mb-2">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required 
                className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-green-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-green-400 transition">
              Send Message
            </button>
          </form>
        )}
      </motion.div>

      <div className="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          { icon: "📍", title: "Our Location", detail: "New Delhi, India" },
          { icon: "📧", title: "Email Us", detail: "support@climatewatch.com" },
          { icon: "📞", title: "Call Us", detail: "+1 234 567 890" },
        ].map((item, index) => (
          <motion.div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold text-green-300">{item.icon} {item.title}</h3>
            <p className="text-lg font-bold">{item.detail}</p>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[90px]" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 C300,50 600,150 1200,100 L1200,120 L0,120 Z" fill="#1a202c"></path>
        </svg>
      </div>
    </div>
  );
};

export default Contact;
