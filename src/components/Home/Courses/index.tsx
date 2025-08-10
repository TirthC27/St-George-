"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { courseData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";
import { motion } from "framer-motion";

const Courses = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
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

    const headerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="courses">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <motion.div
                    className="sm:flex justify-between items-center mb-20"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Academic Programs.
                    </motion.h2>
                    <motion.div
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Link href={'/'} className="text-primary text-lg font-medium hover:tracking-widest duration-500">
                            View all programs&nbsp;&gt;&nbsp;
                        </Link>
                    </motion.div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <Slider {...settings}>
                        {courseData.map((items, i) => (
                            <div key={i}>
                                <motion.div
                                    className='bg-white m-3 mb-12 px-3 pt-3 pb-12 shadow-course-shadow rounded-2xl h-full'
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    whileHover={{
                                        y: -10,
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div className="relative rounded-3xl">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image src={`${getImagePrefix()}${items.imgSrc}`} alt="course-image" width={389} height={262} className="m-auto clipPath" />
                                        </motion.div>
                                        <motion.div
                                            className="absolute right-5 -bottom-2 bg-secondary rounded-full p-6"
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5
                                            }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <h3 className="text-white uppercase text-center text-sm font-medium">top <br /> rated</h3>
                                        </motion.div>
                                    </div>

                                    <div className="px-3 pt-6">
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Link href="#" className='text-2xl font-bold text-black max-w-75% inline-block'>{items.heading}</Link>
                                        </motion.div>
                                        <h3 className='text-base font-normal pt-6 text-black/75'>{items.name}</h3>
                                        <div className="flex justify-between items-center py-6 border-b">
                                            <div className="flex items-center gap-4">
                                                <motion.h3
                                                    className="text-red-700 text-2xl font-medium"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    {items.rating}
                                                </motion.h3>
                                                <motion.div
                                                    className="flex"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    {renderStars(items.rating)}
                                                </motion.div>
                                            </div>
                                            <motion.h3
                                                className="text-lg font-medium text-success"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                Included
                                            </motion.h3>
                                        </div>
                                        <div className="flex justify-between pt-6">
                                            <motion.div
                                                className="flex gap-4"
                                                whileHover={{ x: 3 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <Icon
                                                    icon="solar:notebook-minimalistic-outline"
                                                    className="text-primary text-xl inline-block me-2"
                                                />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.classes} periods/year</h3>
                                            </motion.div>
                                            <motion.div
                                                className="flex gap-4"
                                                whileHover={{ x: -3 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <Icon
                                                    icon="solar:users-group-rounded-linear"
                                                    className="text-primary text-xl inline-block me-2"
                                                />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section>
    );
}

export default Courses;
