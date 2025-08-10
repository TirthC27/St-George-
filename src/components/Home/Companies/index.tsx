"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TruestedCompanies } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";
import { motion } from "framer-motion";

// CAROUSEL SETTINGS
const Companies = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const sliderVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.3
            }
        }
    };

    return (
        <section className='text-center' >
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <motion.h2
                    className="text-midnight_text text-2xl font-semibold"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    whileHover={{
                        scale: 1.05,
                        color: "#3b82f6"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Trusted by companies of all sizes
                </motion.h2>
                
                <motion.div
                    className="py-14 border-b"
                    variants={sliderVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Slider {...settings}>
                        {TruestedCompanies.map((item, i) =>
                            <div key={i}>
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        y: -5
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        duration: 0.2
                                    }}
                                    className="flex justify-center items-center h-20"
                                >
                                    <Image
                                        src={`${getImagePrefix()}${item.imgSrc}`}
                                        alt={item.imgSrc}
                                        width={116}
                                        height={36}
                                        className="filter grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </motion.div>
                            </div>
                        )}
                    </Slider>
                </motion.div>
            </div>
        </section>
    )

}

export default Companies;