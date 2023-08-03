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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout classname="pt-0">
          <div className="flex items-center justify-between w-full ">
            <div className="w-1/2">
              <Image src={profilePic} alt="Utkarsh" className="w-full h-auto" />
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
                  border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div>
          <Image src={} alt="Utkarsh" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
