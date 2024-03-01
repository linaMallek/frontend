import React, { useRef } from "react";
import { motion, useDragControls } from "framer-motion";
import boxName from "@/settings/boxName";

export default function Hero() {
  const parentRef = useRef(null);
  const controls = useDragControls();
  return (
    <div
      className="yesflex yespt-20 yesjustify-between yesitems-center yespl-32 yespr-12"
      id="Home"
    >
      <div className="yesflex yesflex-col yesitems-start yesgap-8 yesmb-24">
        <h1 className="yesfont-bold yestext-black yestext-6xl ">
          A Great Place To
          <br />
          Receive Care
        </h1>
        <p className="  yestext-2xl yestext-slate-400">
          Take control of your health journey <br />
          all in one place.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" yesrounded-3xl yesfont-semibold yesbg-docblue yestext-white yespy-4 yespx-6 "
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          Learn More
        </motion.button>
      </div>
      <div className="yesrelative " ref={parentRef}>
        {boxName.map((item, idx) => (
          <motion.div
            key={idx}
            className={`yesabsolute ${item.pos} yesw-24 yeshover:cursor-move`}
            drag
            dragConstraints={parentRef}
            dragElastic={0.5}
            dragSnapToOrigin="true"
            dragMomentum={false}
            whileHover={{ scale: 1.1 }}
            whileTap={{ rotate: "-3deg", cursor: "grabbing" }}
            dragControls={controls}
          >
            <div onPointerDown={(e) => controls.start(e)}>
              <img draggable="false" src={item.urlIcon} />
            </div>
          </motion.div>
        ))}
        <img className="yesh-[34rem] yesw-[36rem]" src="/Group 8885.svg" />
      </div>
    </div>
  );
}
