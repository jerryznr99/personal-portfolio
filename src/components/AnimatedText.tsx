import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedTextProp = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  hidden?: boolean;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: { duration: 1 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once = true,
  hidden = false,
}: AnimatedTextProp) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: once });

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView && !hidden ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.05 }}
        variants={{
          hidden: { transition: { staggerChildren: 0.05 } },
          visible: { transition: { staggerChildren: 0.05, delayChildren: 3 } },
        }}
        aria-hidden
      >
        {text.split(" ").map((word) => (
          <span className="inline-block">
            {word.split("").map((char) => (
              <motion.span
                className="inline-block"
                variants={defaultAnimations}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
