"use client";
import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
import Mentor from "@/components/Home/Mentor";
import Testimonial from "@/components/Home/Testimonials";
import { motion } from "framer-motion";

export default function Home() {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Companies />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Courses />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Mentor />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Testimonial />
      </motion.div>
    </motion.main>
  );
}