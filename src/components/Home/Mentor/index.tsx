"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";
import { motion } from "framer-motion";

const Mentor = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const titleVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section className="bg-deepSlate" id="mentor" >
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative'>
                <motion.h2
                    className="text-midnight_text text-5xl font-semibold"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Meet our <br /> faculty.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <Slider {...settings}>
                        {MentorData.map((items, i) => (
                            <div key={i}>
                                <motion.div
                                    className='m-3 py-14 md:my-10 text-center'
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    whileHover={{
                                        y: -15,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="relative">
                                        <motion.div
                                            whileHover={{
                                                scale: 1.05,
                                                rotate: 2
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                duration: 0.3
                                            }}
                                        >
                                            <Image src={`${getImagePrefix()}${items.imgSrc}`} alt="user-image" width={306} height={0} className="inline-block m-auto" />
                                        </motion.div>
                                        <motion.div
                                            className="absolute right-[84px] bottom-[102px] bg-white rounded-full p-4"
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 360,
                                                backgroundColor: "#3b82f6"
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                duration: 0.5
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Image src={`${getImagePrefix()}images/mentor/linkedin.svg`} alt="linkedin-image" width={25} height={24} />
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        className="-mt-10"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                    >
                                        <motion.h3
                                            className='text-2xl font-semibold text-lightblack'
                                            whileHover={{
                                                scale: 1.05,
                                                color: "#3b82f6"
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {items.name}
                                        </motion.h3>
                                        <motion.h4
                                            className='text-lg font-normal text-lightblack pt-2 opacity-50'
                                            whileHover={{
                                                opacity: 0.8,
                                                y: -2
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {items.profession}
                                        </motion.h4>
                                    </motion.div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section>
    );
}

export default Mentor