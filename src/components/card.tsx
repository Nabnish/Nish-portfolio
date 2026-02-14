import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";


const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({ title, details }) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -10);
    rotateY.set((offsetX / (rect.width / 2)) * 10);
  }

  function handleEnter() {
    scale.set(1.05);
  }

  function handleLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, scale }}
      className="bg-white w-72 p-6 rounded-2xl shadow-md cursor-pointer"
    >
      <h2 className="text-xl font-bold text-[#D2691E] mb-3 wrap-break-word">
        {title}
      </h2>
      <p className="text-gray-600 text-sm ">
        {details}
      </p>
    </motion.div>
  );
}
