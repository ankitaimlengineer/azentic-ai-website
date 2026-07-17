"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PreLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ૨.૫ સેકન્ડ પછી લોડર બંધ થશે
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#030712]"
        >
          <div className="flex flex-col items-center">
            
            {/* ૧. કંપનીનો લોગો - લખાણની બરાબર ઉપર */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-8" // લખાણ અને લોગો વચ્ચે જગ્યા
            >
              {/* લોગોની પાછળ હળવો ગ્લો ઇફેક્ટ */}
              <div className="absolute inset-0 bg-[#6366F1]/20 blur-2xl rounded-full" />
              
              <Image 
                src="/Azentic-Final-Brand1.png" // ખાતરી કરજો કે પબ્લિક ફોલ્ડરમાં આ જ નામ છે
                alt="Azentic AI Logo" 
                width={150} // સાઈઝ તારી જરૂરત મુજબ બદલી શકે છે
                height={150} 
                className="relative z-10"
                priority
              />
            </motion.div>

            {/* ૨. કંપનીનું નામ - એનિમેશન સાથે */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 text-center"
            >
              AZENTIC <span className="text-[#6366F1]">AI</span>
            </motion.div>

            {/* ૩. સ્મૂથ પ્રોગ્રેસ બાર */}
            <div className="w-48 h-[2px] bg-white/5 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-[#6366F1]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}