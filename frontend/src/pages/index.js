import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Courses from '../components/sections/Courses';
import Features from '../components/sections/Features';
import Scholarship from '../components/sections/Scholarship';
import Dashboard from '../components/sections/Dashboard';
import Cart from '../components/sections/Cart';
import Footer from '../components/Footer/Footer';

export default function Home() {
  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>EduPlatform — Your Future Starts Here</title>
        <meta
          name="description"
          content="Immersive digital education for Class 6–12 students across India. AI-powered tools, live classes, and scholarships."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <div className="section-divider" />

        <Courses />
        <div className="section-divider" />

        <Features />
        <div className="section-divider" />

        <Scholarship />
        <div className="section-divider" />

        <Dashboard />
        <div className="section-divider" />

        <Cart />

        <Footer />
      </Layout>
    </>
  );
}
