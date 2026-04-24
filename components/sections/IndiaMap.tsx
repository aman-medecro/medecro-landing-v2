"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function IndiaMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full bg-white py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Label */}
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: 11,
              lineHeight: "17.6px",
              letterSpacing: "1.65px",
              textTransform: "uppercase",
              color: "#2563EB",
            }}
            className="mb-4"
          >
            Clinics Across India
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: 48,
              letterSpacing: "-1px",
              lineHeight: 1.15,
            }}
            className="mb-6"
          >
            <span style={{ fontWeight: 700, color: "#0F172A" }}>
              From Mumbai to
              <br />
              Chennai.
            </span>
            <span
              style={{ fontWeight: 400, color: "#2563EB" }}
              className="italic"
            >
              {" "}
              Medecro is everywhere.
            </span>
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 18,
              lineHeight: "27.2px",
              color: "#6C6C6C",
            }}
            className="mb-8"
          >
            2,000+ clinics across India trust Medecro with their clinical
            intelligence — in metro hospitals, standalone practices, and
            everything in between.
          </p>

          {/* CTA */}
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#0316FF" }}
          >
            Join 2,000+ Clinics →
          </Link>
        </motion.div>

        {/* Right: map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          className="relative w-full aspect-[4/5] max-w-sm mx-auto"
        >
          <Image
            src="/india-1.svg"
            alt="India map"
            fill
            className="object-contain"
          />

        </motion.div>
      </div>
    </section>
  );
}
