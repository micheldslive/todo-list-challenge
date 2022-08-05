import { IChildren } from "core/types"
import { motion } from "framer-motion"

export const MotionAnimated = ({ children }: IChildren) => {
  return (
    <motion.div
      className="animate-fadeIn"
      transition={{
        y: {
          duration: 0.5,
          ease: "easeIn",
        },
      }}
      animate={{ y: ["100px", "0px"] }}
    >
      {children}
    </motion.div>
  )
}
