/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShoppingCart, ArrowRight, Star } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-textured border-b-2 border-ink/5">
    <div className="text-3xl font-black tracking-tighter text-brand">
      KARAN AUJLA
    </div>
    <div className="flex items-center space-x-8">
      <button className="relative p-2">
        <ShoppingCart size={24} />
        <span className="absolute -top-1 -right-1 bg-brand text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full">0</span>
      </button>
    </div>
  </nav>
);

const ProductCard = ({ name, price, image, tag }: { name: string, price: string, image: string, tag?: string }) => (
  <div className="card-border p-8 group cursor-pointer h-full flex flex-col">
    <div className="aspect-square bg-ink/5 mb-6 overflow-hidden relative flex items-center justify-center">
      <img 
        src={image} 
        alt={name} 
        className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
      {tag && (
        <div className="absolute top-4 left-4 bg-brand text-white text-[10px] font-black px-2 py-1 uppercase">
          {tag}
        </div>
      )}
    </div>
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-2xl font-black uppercase leading-tight">{name}</h3>
      <div className="text-xl font-bold text-brand">{price}</div>
    </div>
    <div className="flex items-center space-x-1 mb-6">
      {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} className="fill-brand text-brand" />)}
      <span className="text-[10px] font-bold opacity-40 ml-2">(2.5K+ REVIEWS)</span>
    </div>
    <div className="mt-auto">
      <button className="w-full border-2 border-ink py-3 font-black uppercase text-sm hover:bg-ink hover:text-white transition-colors flex items-center justify-center space-x-2">
        <span>Add to Cart</span>
        <ArrowRight size={16} />
      </button>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen pt-24">
      <Navbar />

      {/* Hero Selection */}
      <section className="px-8 py-20 md:py-32 border-b-2 border-ink/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-[12rem] font-black leading-[0.85] tracking-tighter uppercase mb-12">
              GEET'AN <span className="text-brand">DI</span> <br />
              MACHINE.
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div>
                <p className="text-4xl md:text-6xl font-black uppercase leading-none mb-8">
                  ZERO-<span className="italic-serif">SUGAR</span>, <br />
                  ZERO-<span className="italic-serif">CALORIE</span>.
                </p>
                <p className="text-lg font-bold opacity-60 max-w-md mb-10">
                  The official ZYRO line by Karan Aujla. Experience the "Geet'an Di Machine" vibe in every sip. Pure, bold, and zero compromise.
                </p>
                <a href="#shop" className="btn-primary inline-block">
                  Shop the Drop
                </a>
              </div>
              <div className="hidden md:block">
                <div className="aspect-video bg-brand/10 p-1 border-2 border-brand/20 overflow-hidden">
                  <img 
                    src="https://storage.googleapis.com/ai-studio-static/6620586e-99e7-497d-947b-18015508828b.png" 
                    alt="Zyro Jeera Soda" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* E-commerce Section */}
      <section id="shop" className="px-8 py-24">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter">
              THE <span className="text-brand">AUJLA</span> DROP
            </h2>
            <div className="text-sm font-bold opacity-40 uppercase tracking-widest">
              Limited Edition
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProductCard 
              name="Zyro Jeera Soda" 
              price="$14.00" 
              image="https://storage.googleapis.com/ai-studio-static/6620586e-99e7-497d-947b-18015508828b.png" 
              tag="Karan's Choice"
            />
            <ProductCard 
              name="Zyro Berry Blast" 
              price="$14.00" 
              image="https://storage.googleapis.com/ai-studio-static/66847844-323a-4467-8975-690250780659.png" 
              tag="New Vibe"
            />
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="px-8 py-12 border-t-2 border-ink/5 text-ink">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[0.3em] uppercase">
          <div>© 2024 ZYRO BY KARAN AUJLA</div>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
