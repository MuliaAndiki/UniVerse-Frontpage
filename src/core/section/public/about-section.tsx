'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Netbox from '@/components/icon/netbox';
import { useRef } from 'react';
import { Label } from '@radix-ui/react-label';

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const fadeElement1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 0]);
  const yElement1 = useTransform(scrollYProgress, [30, 0.2, 0.3], [-100, 0, 100]);
  const fadeElement2 = useTransform(scrollYProgress, [0.2, 0.4, 0.5], [0, 1, 0]);
  const yElement2 = useTransform(scrollYProgress, [0.2, 0.4, 0.5], [-100, 0, 100]);
  const fadeElement3 = useTransform(scrollYProgress, [0.4, 0.6, 0.7], [0, 1, 0]);
  const yElement3 = useTransform(scrollYProgress, [0.4, 0.6, 0.7], [-100, 0, 100]);
  const fadeElement4 = useTransform(scrollYProgress, [0.6, 0.8, 0.9], [0, 1, 0]);
  const yElement4 = useTransform(scrollYProgress, [0.6, 0.8, 0.9], [-100, 0, 100]);

  return (
    <div ref={ref} className="relative h-[400vh] bg-[var(--shape-parent)]">
      <div className="sticky top-0 flex min-h-screen items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-background">
            <Label className="text-6xl font-extrabold ">Jelajahi</Label>
            <Label className="text-7xl font-extrabold text-center"> Peluang Tak Terbatas</Label>
          </div>

          <motion.div
            style={{ opacity: fadeElement1, y: yElement1 }}
            className="absolute top-50 left-30"
          >
            <div className="flex items-center relative">
              <h3 className="text-3xl font-extrabold max-w-[12rem] bg-clip-text bg-gradient-to-r from-[#F8F9EB] to-[#92938B]">
                Empowering Collaboration
              </h3>
              <div className="absolute scale-[0.4] translate-x-[120px] translate-y-7">
                <Netbox />
              </div>
              <div className="absolute scale-[0.4] -translate-x-[120px] -translate-y-7">
                <Netbox />
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: fadeElement2, y: yElement2 }}
            className="absolute top-40 right-15"
          >
            <div className="flex items-center gap-4">
              <Image alt="toa" src="/images/toa.png" width={200} height={200} />
              <h3 className="font-bold text-4xl max-w-[12rem] bg-clip-text bg-gradient-to-r from-[#F8F9EB] to-[#92938B]">
                Automated Reminders
              </h3>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: fadeElement3, y: yElement3 }}
            className="absolute bottom-30 left-15"
          >
            <div className="flex flex-col items-start max-w-[22rem]">
              <p className="font-light p-2 rounded-full border border-background bg-background/10">
                Seamless Experience
              </p>
              <h3 className="text-3xl font-extrabold bg-clip-text bg-gradient-to-r from-[#F8F9EB] to-[#92938B]">
                Easy registration and digital ticketing
              </h3>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: fadeElement4, y: yElement4 }}
            className="absolute bottom-30 right-10"
          >
            <div className="flex items-center gap-4">
              <Image alt="campus" src="/images/campus.svg" width={150} height={150} />
              <div className="bg-[#FBE87F]/80 p-4 rounded-lg max-w-[20rem]">
                <h3 className="font-extrabold text-3xl bg-clip-text bg-gradient-to-r from-[#F8F9EB] to-[#92938B]">
                  A Single hub for all university events
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
