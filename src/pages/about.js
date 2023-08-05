import React, { use } from "react";
import Head from "next/head";
import AnimatedText from "@/components/animatedtext";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/profile.jpeg";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimateNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Utkarsh Rai | About Page</title>
        <meta name="description" content="description about me" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center !tracking-tightest dark:text-light ">
        <Layout classname="pt-16">
          <AnimatedText
            text="Boundless Tech Pursuit."
            classname="mb-16 lg:!text-3xl sm:!text-lg xs:!text-xs sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justofy-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                Hey there! I am Utkarsh Rai, a passionate self-taught Full Stack
                developer with a passion for learning and creating beautiful,
                functional and user-centered digital experiences.
              </p>
              <p className="font-medium my-4">
                I am a pre final year student pursuing B.Tech in Computer
                Science and Engineering from Vellore Institute of Technology,
                Vellore.
              </p>
              <p className="font-medium">
                Passionate about programming since my earliest encounter with a
                computer, I found solace in the art of coding. From the sheer
                joy of solving puzzles to the fulfillment of creating meaningful
                software, I knew this was my calling. Driven by curiosity and
                inspired by the endless possibilities technology offers, I
                continue to explore, learn, and evolve in this ever-evolving
                field. Programming isn't just a career; it's a way of life, an
                endless journey of discovery and growth. I relish every moment
                spent crafting elegant solutions and transforming ideas into
                reality.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="profile pic"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end  justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:-4xl">
                  <AnimateNumber value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:-4xl">
                  <AnimateNumber value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  Ongoing Projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:-4xl">
                  <AnimateNumber value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
