import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="w-full min-h-dvh bg-[#1A3636] text-white">
      <div className="gap-12 container flex flex-col items-center justify-center">
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
          Contact Page
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
            <h4 className="font-bold">Per-Page Layouts</h4>
            <div>
              If you need multiple layouts, you can add a property getLayout to
              your page, allowing you to return a React component for the
              layout. This allows you to define the layout on a per-page basis.
              Since we&apos;re returning a function, we can have complex nested
              layouts if desired.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">With TypeScript</h4>
            <div>
              When using TypeScript, you must first create a new type for your
              pages which includes a getLayout function. Then, you must create a
              new type for your AppProps which overrides the Component property
              to use the previously created type.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Data Fetching</h4>
            <div>
              When you don&apos;t know the exact segment names ahead of time and want
              to create routes from dynamic data, you can use Dynamic Segments
              that are filled in at request time or prerendered at build time.
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
