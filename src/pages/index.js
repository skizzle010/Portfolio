import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/animatedtext";
import Link from "next/link";
import { LinkArrow } from "@/components/icon";
import HireMe from "@/components/HireMe";
import catface from "../../public/images/svgs/catface.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout classname="pt-0">
          <div className="flex items-center justify-between w-full ">
            <div className="w-1/2">
              <Image src={profilePic} alt="Utkarsh" className="w-full h-auto" priority 
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,50vw" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Crafting digital experiences thatleave  a  lasting    impression."
                classname="!text-5xl !text-left font-bold "
              />
              <p className="my-4 text-base font-medium ">
                As a full-stack developer, I revel in the art of turning
                concepts into tangible digital experiences, blending front-end
                creativity with back-end ingenuity for seamless web
                applications.
              </p>
              <div className="flex items-center self-start mt-2 ">
                <Link
                  href="/Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light  hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light
                  dark:hover:border-light"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image
            src={catface}
            alt="Utkarsh"
            className="w-full h-auto animate-bounce"
          />
        </div>
      </main>
    </>
  );
}
