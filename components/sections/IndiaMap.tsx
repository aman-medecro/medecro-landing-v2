"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const cities = [
  { name: "Mumbai", x: "28%", y: "52%" },
  { name: "Delhi", x: "38%", y: "22%" },
  { name: "Bangalore", x: "35%", y: "72%" },
  { name: "Chennai", x: "40%", y: "77%" },
  { name: "Kolkata", x: "62%", y: "38%" },
  { name: "Hyderabad", x: "40%", y: "62%" },
  { name: "Pune", x: "30%", y: "57%" },
  { name: "Ahmedabad", x: "22%", y: "42%" },
  { name: "Jaipur", x: "30%", y: "30%" },
  { name: "Lucknow", x: "48%", y: "28%" },
  { name: "Surat", x: "23%", y: "50%" },
  { name: "Coimbatore", x: "36%", y: "80%" },
];

export default function IndiaMap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-100 text-xs font-semibold text-[#16A34A] uppercase tracking-wide mb-4">
              Pan-India presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              From Mumbai to Chennai,{" "}
              <span className="text-[#2563EB]">Medecro is everywhere.</span>
            </h2>
            <p className="text-[#64748B] text-lg mb-6">
              With clinics in 50+ cities, Medecro is the most widespread
              clinical intelligence platform in India. Join the network of
              doctors who already think smarter.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Dedicated onboarding in your city",
                "Local language support (Hindi, Tamil, Telugu, more)",
                "GST-compliant billing for every state",
                "24/7 support in Indian time zones",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#0F172A]">
                  <MapPin size={16} className="text-[#16A34A] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] text-white font-semibold hover:bg-blue-700 transition-colors text-sm shadow-lg shadow-blue-500/20"
            >
              Find a clinic in your city →
            </a>
          </motion.div>

          {/* Right: SVG India map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              {/* Simplified India outline */}
              <svg
                viewBox="0 0 400 520"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background shape approximating India */}
                <path
                  d="M160 20 L240 15 L290 40 L330 80 L350 140 L360 200 L340 260 L310 310 L280 360 L260 400 L240 440 L220 480 L200 510 L185 480 L170 440 L155 400 L135 360 L110 320 L80 280 L60 240 L50 190 L55 140 L75 90 L110 50 Z"
                  fill="#EFF6FF"
                  stroke="#BFDBFE"
                  strokeWidth="2"
                />
                {/* North East */}
                <path
                  d="M290 40 L320 30 L360 50 L380 90 L360 110 L330 100 L300 80 Z"
                  fill="#EFF6FF"
                  stroke="#BFDBFE"
                  strokeWidth="2"
                />
                {/* Gujarat peninsula */}
                <path
                  d="M55 190 L30 200 L20 220 L30 240 L60 240"
                  fill="#EFF6FF"
                  stroke="#BFDBFE"
                  strokeWidth="2"
                />
              </svg>

              {/* City dots */}
              {cities.map((city, i) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.3 }}
                  className="absolute"
                  style={{ left: city.x, top: city.y, transform: "translate(-50%,-50%)" }}
                >
                  <div className="relative group cursor-default">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full bg-[#2563EB]/30 animate-ping scale-150" />
                    <div className="w-3 h-3 rounded-full bg-[#2563EB] border-2 border-white shadow-sm" />
                    {/* Tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-8 bg-[#0F172A] text-white text-[10px] font-medium px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {city.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
