import Image from 'next/image';
import {useEffect, useState} from 'react';
import axios from 'axios';
import facebook from '../assets/social/facebook-purple.svg';
import instagram from '../assets/social/instagram-purple.svg';
import twitter from '../assets/social/twitter-purple.svg';

const ContactSection = () => {
  const [status, setStatus] = useState ({
    submitted: false,
    submitting: false,
    info: {error: false, msg: null},
  });

  const [inputs, setInputs] = useState ({
    email: '',
    message: '',
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus ({
        submitted: true,
        submitting: false,
        info: {error: false, msg: msg},
      });
      setInputs ({
        email: '',
        name: '',
        subject: '',
        message: '',
      });
    } else {
      setStatus ({
        info: {error: true, msg: msg},
      });
    }
  };

  const handleOnChange = e => {
    e.persist ();
    setInputs (prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus ({
      submitted: false,
      submitting: false,
      info: {error: false, msg: null},
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault ();
    setStatus (prevStatus => ({...prevStatus, submitting: true}));
    axios ({
      method: 'POST',
      url: process.env.NEXT_PUBLIC_FORMSPREE_URL,
      data: inputs,
    })
      .then (response => {
        handleServerResponse (
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch (error => {
        handleServerResponse (false, error.response.data.error);
      });
  };

  useEffect (
    () => {
      if (status.submitted === true) {
        let timer = setTimeout (
          () =>
            setStatus ({
              submitted: false,
              submitting: false,
              info: {error: false, msg: null},
            }),
          5 * 1000
        );

        return () => clearTimeout (timer);
      }
    },
    [status.submitted]
  );

  return (
    <section id="contact">
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="py-20 bg-gray-50 radius-for-skewed min-h-[60vh]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Contact
            </h2>
            <p className="text-gray-500 leading-loose">
              Got any question? Let’s talk about it.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full md:w-1/2 lg:w-1/2">
                  <h3 className="mb-2 text-3xl lg:text-4xl font-bold">
                    Location
                  </h3>
                  <p className="text-gray-400">Irvine, CA</p>
                </div>
                <div className="mb-12 w-full md:w-1/2">
                  <h3 className="mb-2 text-3xl lg:text-4xl font-bold">
                    Contacts
                  </h3>
                  <p className="text-gray-400">timtvo714@gmail.com</p>

                </div>
                <div className="w-full md:w-1/3 lg:w-full">
                  <h3 className="mb-2 text-3xl lg:text-4xl font-bold">
                    Socials
                  </h3>
                  <div className="flex">
                    <a className="mr-3">
                      <Image src={facebook} alt="" />
                    </a>
                    <a className="mr-3">
                      <Image src={twitter} alt="" />
                    </a>
                    <a>
                      <Image src={instagram} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="max-w-md lg:mx-auto">
                <form onSubmit={handleOnSubmit}>
                  <div className="mb-4">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                      type="text"
                      placeholder="Subject"
                      id="subject"
                      onChange={handleOnChange}
                      value={inputs.subject || ''}
                      name="subject"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                      type="text"
                      placeholder="Name"
                      id="name"
                      onChange={handleOnChange}
                      value={inputs.name || ''}
                      name="name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                      type="email"
                      placeholder="name@example.com"
                      id="email"
                      onChange={handleOnChange}
                      value={inputs.email || ''}
                      name="_replyto"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-white rounded outline-none"
                      type="text"
                      placeholder="Message..."
                      name="message"
                      onChange={handleOnChange}
                      required
                      value={inputs.message || ''}
                      id="message"
                    />
                  </div>
                  <div className="mb-4" />
                  <div className="flex justify-between items-center">
                    <label />
                    <button
                      className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-pink-600 hover:bg-pink-700 text-gray-50 font-bold leading-loose transition duration-200"
                      disabled={status.submitting}
                    >
                      {!status.submitting
                        ? !status.submitted ? 'Get Started' : 'Submitted'
                        : 'Submitting...'}
                    </button>
                  </div>
                </form>
                {/* {status.info.error &&
                  <div className="error">Error: {status.info.msg}</div>}
                {!status.info.error &&
                  status.info.msg &&
                  <p>{status.info.msg}</p>} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg>
      </div>
    </section>
  );
};

export default ContactSection;
