import { motion } from "framer-motion";

export default function SectionTitle({
  firstPart,
  spanText,
  secondPart,
  isCenter,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: false }}
      className={`flex flex-col ${
        isCenter && "justify-center items-center text-center"
      }`}
    >
      <h2
        className={`text-4xl font-semibold text-primary ${
          isCenter && "text-center"
        }`}
      >
        {firstPart}
        {spanText && (
          <span className="text-4xl font-semibold text-secondary">
            {spanText}
          </span>
        )}
        {secondPart}
      </h2>
    </motion.div>
  );
}
