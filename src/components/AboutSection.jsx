"use client";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="about-image"
          src="/images/about-image.png"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Frontend Developer with 2 years of hands-on experience in
            building fast, scalable, and user-friendly web interfaces using
            React.js, Next.js, and modern JavaScript. I specialize in developing
            responsive UIs, managing component-based architectures, and
            integrating REST APIs. I’ve collaborated with cross-functional teams
            to deliver production-ready features, handle live issues, and
            enhance user experience through clean, maintainable code. I’m
            continuously exploring the latest in frontend development to stay
            updated and sharpen my skill set.
          </p>
          <p className="mt-4 text-sm text-[#ADB7BE]">
            <strong>Tech Stack:</strong> React.js, Next.js, JavaScript (ES6+),
            Tailwind CSS, Redux, Node.js, Express.js, MongoDB, Git
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
