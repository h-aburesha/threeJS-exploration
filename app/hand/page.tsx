"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";

const HandAnimation = () => {
    const handControls = useAnimation();

    // Function to start the animation
    const startAnimation = async () => {
        await handControls.start({
            rotate: -20,
            scale: 10,
            transition: { duration: 0.3 },
        }); // Increase the scale
        await handControls.start({
            rotate: 20,
            scale: 10,
            transition: { duration: 0.3 },
        }); // Increase the scale
        await handControls.start({
            rotate: -20,
            scale: 5,
            transition: { duration: 0.3 },
        }); // Increase the scale
        await handControls.start({
            rotate: 20,
            scale: 5,
            transition: { duration: 0.3 },
        }); // Increase the scale
        await handControls.start({
            rotate: 0,
            scale: 5,
            transition: { duration: 0.3 },
        }); // Increase the scale
    };

    return (
        <div
            className="hand-animation"
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                marginTop: 100,
            }}
        >
            <motion.div
                className="hand"
                initial={{ x: "50%", y: "50%", rotate: 0, scale: 5 }}
                animate={handControls}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                }}
            >
                🖐️
            </motion.div>
            <button onClick={startAnimation}>Start Animation</button>
        </div>
    );
};

export default HandAnimation;
