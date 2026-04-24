"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 90, suffix: "%", label: "Time Saved", sublabel: "on administrative tasks" },
  { value: 2000, suffix: "+", label: "Clinics", sublabel: "across India" },
  { value: 92, suffix: "%", label: "Satisfaction", sublabel: "from active users" },
  { value: 12, suffix: "+", label: "Specialities", sublabel: "natively supported" },
];

function CountUp({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-24 bg-gradient-to-br from-[#2563EB] to-blue-700 relative overflow-hidden"
    >
      {/* Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Numbers that speak for themselves
          </h2>
          <p className="text-blue-200 text-lg">
            Real results from real doctors using Medecro every day.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative text-center p-8 rounded-2xl bg-white/10 border border-white/10 backdrop-blur"
            >
              <div className="text-5xl font-bold text-white mb-2 tabular-nums">
                <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-blue-200">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
