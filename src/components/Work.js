import React from "react";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//image
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-10"
          >
            {/* text  */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work{" "}
              </h2>
              <p className="max-w-sm mb-16">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias in blanditiis fugit ad aliquam accusantium libero.
              </p>
              <button className="btn btn-sm" type="button">
                View all projects
              </button>
            </div>
            {/* image  */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay  */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
              {/* img  */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt="portfolio"
              />
              {/* pretitle  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-gradient"> UI/UX Design</span>
              </div>
              {/* title  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>

          {/* second layer  */}

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image  */}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay  */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
              {/* img  */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt="portfolio"
              />
              {/* pretitle  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-gradient"> UI/UX Design</span>
              </div>
              {/* title  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            {/* image  */}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay  */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
              {/* img  */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt="portfolio"
              />
              {/* pretitle  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                <span className="text-gradient"> UI/UX Design</span>
              </div>
              {/* title  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
