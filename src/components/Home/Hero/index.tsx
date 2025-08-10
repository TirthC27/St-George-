'use client';
import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from '@/utils/util';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const imageVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const featureVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: 0.8
            }
        }
    };

    return (
        <section id="home-section" className='bg-slateGray'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center'>
                    <motion.div
                        className='col-span-6 flex flex-col gap-8'
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className='flex gap-2 mx-auto lg:mx-0'
                            variants={itemVariants}
                        >
                            <Icon
                                icon="solar:verified-check-bold"
                                className="text-success text-xl inline-block me-2"
                            />
                            <p className='text-success text-sm font-semibold text-center lg:text-start'>Admissions Open for 2025-26</p>
                        </motion.div>
                        
                        <motion.h1
                            className='text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0'
                            variants={itemVariants}
                        >
                            Excellence in Education at St George High School
                        </motion.h1>
                        
                        <motion.h3
                            className='text-black/70 text-lg pt-5 lg:pt-0'
                            variants={itemVariants}
                        >
                            Nurturing young minds with quality education, modern facilities, and experienced faculty.
                        </motion.h3>
                        
                        <motion.div
                            className="relative rounded-full pt-5 lg:pt-0"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <input type="text" name="q" className="py-6 lg:py-8 pl-8 pr-20 text-lg w-full text-black rounded-full focus:outline-none shadow-input-shadow" placeholder="Search programs, activities..." autoComplete="off" />
                            <motion.button
                                className="bg-secondary p-5 rounded-full absolute right-2 top-2"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon
                                    icon="solar:magnifer-linear"
                                    className="text-white text-4xl inline-block"
                                />
                            </motion.button>
                        </motion.div>
                        
                        <motion.div
                            className='flex items-center justify-between pt-10 lg:pt-4'
                            variants={featureVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div
                                className='flex gap-2'
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Quality Education</p>
                            </motion.div>
                            <motion.div
                                className='flex gap-2'
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Modern Facilities</p>
                            </motion.div>
                            <motion.div
                                className='flex gap-2'
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image src={`${getImagePrefix()}images/banner/check-circle.svg`} alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Expert Faculty</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div
                        className='col-span-6 flex justify-center'
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Image src={`${getImagePrefix()}images/banner/mahila.png`} alt="nothing" width={1000} height={805} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
