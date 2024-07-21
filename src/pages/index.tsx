import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full min-h-dvh bg-[#D6BD98] text-black">
      <div className=" gap-12 container flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.35 },
          }}
          exit={{ opacity: 0, y: -15 }}
          className="font-bold text-3xl"
        >
          Home Page
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.65, duration: 0.35 },
          }}
          exit={{ opacity: 0, y: -15 }}
          className="flex flex-wrap [&>*]:flex-1 lg:[&>*]:min-w-0 [&>*]:min-w-fit gap-5"
        >
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Layout Pattern</h4>
            <div>
              The React model allows us to deconstruct a page into a series of
              components. Many of these components are often reused between
              pages. For example, you might have the same navigation bar and
              footer on every page.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Single Shared Layout with Custom App</h4>
            <div>
              If you only have one layout for your entire application, you can
              create a Custom App and wrap your application with the layout.
              Since the {"<Layout />"} component is re-used when changing pages,
              its component state will be preserved (e.g. input values).
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Layout Pattern</h4>
            <div>
              The React model allows us to deconstruct a page into a series of
              components. Many of these components are often reused between
              pages. For example, you might have the same navigation bar and
              footer on every page.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Single Shared Layout with Custom App</h4>
            <div>
              If you only have one layout for your entire application, you can
              create a Custom App and wrap your application with the layout.
              Since the {"<Layout />"} component is re-used when changing pages,
              its component state will be preserved (e.g. input values).
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
