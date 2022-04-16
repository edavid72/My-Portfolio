import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#2F333F] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/1780fd1a-9d24-402e-b543-4cce899ca2c8"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#2FA4FF] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 text-lg lg:text-xl">
            Submit the form below or shoot me an email -
            <span className="text-[#2FA4FF] font-bold">david.cervellon72@gmail.com</span>
          </p>
        </div>
        <input
          className="bg-[#e7e9ef] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[##e7e9ef]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[##e7e9ef] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#2FA4FF] hover:border-[#2FA4FF] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
