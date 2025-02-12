import React from 'react'
import './Home.css'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { ref, inView } = useInView({
    rootMargin: '0px',
    triggerOnce: true,
  });

  return (
    <>
      <Header />
      {/* Social media information */}
      <section>
        <div className="infoContainer">
          <img className="dogImg" src="../../img/dogImg1.jpg" alt="dog" />
          <div className="infoBox">
            <div className="information">
              <h2 className="header2">Pets &amp; Me</h2>
            </div>
            <div className="catchCopy">
              <p>Our voice
                Adventure for every paw that is what we believe your furry pet pal
                should have when we take care of them!</p>
              <p>Our passion and love for
                your pet moves us to provide them with fun and safe adventures
                that all can enjoy. There happiness is our number one priority!</p>
            </div>
            <div className="socialMedia">
              <p>Social Media</p>
              <p>Follow us!</p>
            </div>
            <div className="icon">
              <a href="https://www.instagram.com/petsandme2/"> <i className="fa-brands fa-square-instagram"></i></a>
              <a href="https://www.instagram.com/petsandme2/"> <p className='instagram'>Instagram</p></a>
              <a href="https://www.tiktok.com/@petsandme2022"> <i className="fa-brands fa-tiktok"></i></a>
              <a href="https://www.tiktok.com/@petsandme2022"> <p className='instagram'>TicTok</p></a>
              <a href="https://www.facebook.com/profile.php?id=61572289251287"> <i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61572289251287"> <p className='instagram'>Facebook</p></a>
            </div>
            <div className="finger"></div>
            <div className="finger2"></div>
            <div className="finger3"></div>
            <div className="palm"></div>
          </div>
        </div>

        {/* reasons to choose Pets & Me */}
        <div className="reasonHeader">
          <h2 className="header">How Pets & Me Started</h2>
        </div>

        <div ref={ref} id='slide1' className="exampleContainer">
          {inView && (
            <>
              <div className="images">
                <img className="dogImg2" src="../../img/ownerImg.jpg" alt="dog" />
              </div>
              <div className="ExplainContainer">
                <div className="example">
                  <h3 className="header2">Our History</h3>
                </div>
                <div className="explain">
                  <p>Pets & Me began with a significant turning point in my life. I
                    was seeking a fresh start after leaving a toxic work environment
                    that had taken a toll on my well-being. I knew I wanted
                    something better—something more fulfilling and aligned with
                    my passions. At the time, I had just gotten a puppy, and one
                    look into those loving, trusting eyes sparked something deep
                    within me. You know what they say—the rest is history. Well,
                    almost...</p>
                  <p>That spark drove me to take action and make a meaningful
                    change. I enrolled in a CPR course, determined to equip myself
                    with the skills I needed to pursue this newfound passion.
                    Shortly after, I began applying to dog walking companies, and I
                    was fortunate enough to land a role with one of the best in the
                    industry. Working with them taught me the ins and outs of the
                    business, and it solidified my love for working with animals.</p>
                  <p>Now, nearly two years later, I&#39;m proud to say I&#39;ve turned that
                    initial inspiration into a thriving career. Pets & Me isn&#39;t just
                    about providing services; it&#39;s about creating meaningful
                    connections with pets and their owners. Every day, I&#39;m
                    reminded of why I started this journey, and I look forward to
                    continuing to do what I love for many more years to come.</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* our service */}
        <h2 className="header">Brand Message</h2>
        <div className="serviceContainer">
          <div className="serviceBox">
            <div className="service">
              <span className='serviceImg'></span>
            </div>
            <div className="serviceExplain">
              <p>
                At Pets and Me, we believe every pet deserves a life full of tailwagging adventures. With our tagline, "Adventures for Every Paw,"
                we&#39;re dedicated to bringing joy, safety, and enrichment to every
                walk and every stay. Whether it&#39;s an energetic romp around the
                park or a cozy boarding experience while you&#39;re away, we treat every
                pet like family.
              </p>
              <p>
                Because pets aren&#39;t just animals—they&#39;re companions, confidants,
                and the heart of every home. Let us be your partner in creating a life
                of happiness, health, and adventure for your furry friend.
              </p>
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>
  )
}
