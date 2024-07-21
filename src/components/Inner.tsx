import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Inner({ children }: { children: React.ReactNode }) {
  const expand = {
    initial: {
      top: 0,
    },

    enter: (i: number) => ({
      top: "100vh",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
      transitionEnd: { height: "0", top: "0" },
    }),

    exit: (i: number) => ({
      height: "100vh",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const opacity = {
    initial: {
      opacity: 0.5,
    },
    enter: {
      opacity: 0,
    },
    exit: {
      opacity: 0.5,
    },
  };

  const opacityLoading = {
    initial: {
      opacity: 1,
      y: 0,
    },
    enter: {
      opacity: 1,
      y: 15,
    }
  };

  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      return () => {
        clearTimeout(timeout);
      };
    }, 1000);
  }, []);
  const anim = (variants: Variants, custom?: number) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };
  const nbOfColumns = 5;
  return (
    <>
      {isLoading ? (
        <div className="flex fixed top-0 left-0 right-0 bottom-0 bg-black justify-center items-center text-lg text-white z-50">
          <motion.p key="loading-scene" {...anim(opacityLoading)}>Loading...</motion.p>
        </div>
      ) : (
        <div className="stairs" key="page">
          <motion.div {...anim(opacity)} className="transition-background" />
          <div className="transition-container">
            {[...Array(nbOfColumns)].map((_, i) => {
              return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
            })}
          </div>
          {children}
        </div>
      )}
    </>
  );
}
