

import React from 'react';

import Header from '../partials/Header';
import ContactView from '../partials/ContactView';
import Footer from '../partials/Footer';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Stack from '../partials/Stack';
import Join from '../partials/Join';

function Contact() {
  return (
    <div  className="flex flex-col min-h-screen overflow-hidden bg-blitblue-100">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow mt-20">

        {/*  Page sections */}
        <ContactView />
        <Newsletter/>



      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Contact;