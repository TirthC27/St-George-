"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TestimonialData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";
import { motion } from "framer-motion";

const Testimonial = () => {

    const settings = {
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        return (
            <>
                {Array(fullStars).fill(<Icon icon="tabler:star-filled" className="text-yellow-500 text-xl inline-block" />)}
                {halfStars > 0 && <Icon icon="tabler:star-half-filled" className="text-yellow-500 text-xl inline-block" />}
                {Array(emptyStars).fill(<Icon icon="tabler:star-filled" className="text-gray-400 text-xl inline-block" />)}
            </>
        );
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="testimonial">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <Slider {...settings}>
                        {TestimonialData.map((items, i) => (
                            <div key={i}>
                                <motion.div
                                    className={`bg-white rounded-2xl m-4 p-5 my-20 relative ${i % 2 ? 'shadow-testimonial-shadow2' : 'shadow-testimonial-shadow1'}`}
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <motion.div
                                        className="absolute top-[-45px]"
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 5
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            duration: 0.3
                                        }}
                                    >
                                        <Image src={`${getImagePrefix()}${items.imgSrc}`}
                                            alt={items.name} width={100} height={100} className="inline-block" />
                                    </motion.div>
                                    
                                    <motion.h4
                                        className='text-base font-normal text-darkgray my-4'
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                    >
                                        {items.comment}
                                    </motion.h4>
                                    
                                    <div className="flex justify-between items-center">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3, duration: 0.5 }}
                                        >
                                            <motion.h3
                                                className='text-lg font-medium text-darkbrown pt-4 pb-2'
                                                whileHover={{
                                                    color: "#3b82f6",
                                                    x: 5
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {items.name}
                                            </motion.h3>
                                            <motion.h3
                                                className='text-sm font-normal text-lightgray pb-2'
                                                whileHover={{
                                                    opacity: 0.8,
                                                    x: 5
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {items.profession}
                                            </motion.h3>
                                        </motion.div>
                                        
                                        <motion.div
                                            className="flex"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4, duration: 0.5 }}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5
                                            }}
                                        >
                                            {renderStars(items.rating)}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonial;
