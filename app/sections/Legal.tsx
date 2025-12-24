"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Legal() {
  return (
    <>
      <section className="flex flex-col gap-3 md:gap-4 xl:gap-5 m-[2vw] md:m-[1.5vw] xl:m-[1vw]">
        <div className="flex flex-col gap-3 md:gap-4 xl:gap-5">
          <Link href="/legal/mentions-legales">
            <motion.div
              className="pointer-events-auto bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border border-bordercolor hover:border-white transition-all cursor-pointer"
            >
              <h3 className="text-lg font-medium my-1">Mentions Légales</h3>
            </motion.div>
          </Link>

          <Link href="/legal/conditions-utilisation">
            <motion.div
              className="pointer-events-auto bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border border-bordercolor hover:border-white transition-all cursor-pointer"
            >
              <h3 className="text-lg font-medium my-1">Conditions d'Utilisation</h3>
            </motion.div>
          </Link>
        </div>
      </section>
    </>
  );
}
