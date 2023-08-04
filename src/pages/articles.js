import React, { use } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/animatedtext";
import Link from "next/link";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import { useRef } from "react";
import { useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover: underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{opacity:1,transition:{duration:0.2}}}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-10"
      />
    </Link>
  );
};

const FeaturedArticle = ({ title, img, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:border-light dark:bg-dark">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          priority 
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,50vw" 
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4 dark:text-light xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 dark:text-light">{summary}</p>
      <span className=" text-primary font-semibold dark:text-primaryDark">{time}</span>
    </li>
  );
};

const Article = ({ title, img, time, link }) => {
  return (
    <motion.li
        initial={{ y: 200 }}
        whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}}
        viewport={{once:true}}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark
        first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light 
        sm:flex-col sm:self=start"
    >
      <MovingImage title={title} link={link} img={img} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:pl-0 xs:text-sm sm:self-start">{time}</span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Utkarsh Rai| About Page</title>
        <meta name="description" content="description about articles" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout classname="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            classname="mb-16 lg:!text-xl md:!text-lg sm:!text-base xs:!text-xs "
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="5 min read"
              link="/"
              img={article1}
            />
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="5 min read"
              link="/"
              img={article1}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light">
            All Articles
          </h2>
          <ul>
            <Article
              title="Understanding the concept of world education system and how it is affecting the world"
              time="7 min read"
              link="/"
              img={article3}
            />
            <Article
              title="Testing the github potention on Iphone 6s plus and Iphone 7 plus " 
              time="7 min read"
              link="/"
              img={article3}
            />
            <Article
              title="beating the crap out of react js and next js with lama dev only on youtube  "
              time="7 min read"
              link="/"
              img={article1}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
