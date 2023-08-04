import Layout from "@/components/Layout";
import AnimatedText from "@/components/animatedtext";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GithubIcon } from "@/components/icon";
import Image from "next/image";
import hackstory from "../../public/images/Projects/hackstory.png";
import expensage from "../../public/images/Projects/expensage.png";
import linkFy from "../../public/images/Projects/linkFy.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light dark:shadow-light"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover : underline-offset-2"
        >
          <h2 className="my-2 w-full text text-4xl font-bold dark:text-light">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            {" "}
            Visit Project{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col item justify-center rounded-2xl 
      border border-solid border-dark bg-light p-6 relative darl:bg-dark dark:border-light dark:shadow-light shadow-2xl dark:bg-dark
    "
    >
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
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover : underline-offset-2"
        >
          <h2 className="my-2 w-full text text-3xl font-bold dark:text-light">{title}</h2>
        </Link>

        <div className="mt-2 w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};
const Projects = () => {
  return (
    <>
      <Head>
        <title>Utkarsh Rai| Projects Page</title>
        <meta name="description" content="description about my Projects" />
      </Head>
      <main classnaem="w-full mb-16 flex flex-col items-center justife-center">
        <Layout classname="pt-16">
          <AnimatedText text="Innovation  Unleashed!" classname="mb-16" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Hackstory'23 website"
                summary="A one-stop website for hackathon enthusiasts, providing a vast repository of resources, 
                    and showcasing projects to amplify skills, spark creativity, and propel the
                     next generation of tech talent. Built for A hackathon event by ACM-VIT during Yantra’23."
                link="https://hackstory.in/"
                img={hackstory}
                github="https://github.com/skizzle010/hackstory"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Wallet App"
                title="ExpenSage"
                link="https://github.com/skizzle010/expensage"
                img={expensage}
                github="https://github.com/skizzle010/expensage"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="E-Website"
                title="EcoFY"
                link="https://github.com/skizzle010/EcoFy"
                img={hackstory}
                github="https://github.com/skizzle010/Yantra_hack-frontend"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="LinkTree"
                summary="Linktree is a personal project that allows users to create a single landing page with links to all of their social
                media profiles, websites, and other online assets."
                link="https://link-tree-front-end.vercel.app/apply"
                img={linkFy}
                github="https://github.com/skizzle010/Linkfyl"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
