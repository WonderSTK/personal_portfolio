import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div>
          Hello! I&apos;m Mehul Kumar, a passionate Frontend Engineer with 1+ years of experience 
          building scalable web applications and user-centric interfaces. I specialize in the 
          **React** ecosystem with expertise in **Redux/Toolkit**, **TypeScript**, and **Next.js**, 
          focusing on performance optimization and delivering pixel-perfect responsive designs.
          <br className="sm:block hidden" />
          I excel at implementing UI designs from **Figma** with pixel-perfect accuracy and have 
          achieved **40% performance improvements** through architectural refactoring using modern 
          patterns like useRef and function-based flows. I&apos;m well-versed in **Tailwind CSS**, 
          **Ant Design**, **Material UI**, and modern libraries like **Zustand**, **Tanstack Query**, 
          and **Framer Motion**.
          <br className="sm:block hidden" />
          My experience includes full-stack development with **Node.js**, **Express.js**, payment 
          gateway integrations, and implementing comprehensive monitoring solutions with **Sentry** 
          and **Mixpanel**. I have a keen interest in **Web3** technologies and **Solidity** 
          development, constantly exploring the future of decentralized applications.
        </div>
        <div className="w-fit break-words">
          <Link
            href="mailto:mehulparmar9694@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
            mehulparmar9694@gmail.com
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          href="../document/Mehul_Kumar_FE-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
