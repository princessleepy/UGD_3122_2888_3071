'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { robotoMono } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      {/* 🔥 NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[99fixed top-0 left-0 w-full z-[999] bg-[#02060E] border-b border-white/109] bg-gradient-to-r from-[#02060E]/80 to-[#5D1B7C]/70 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-between items-center px-6 md:px-20 py-4 text-white">

          {/* LOGO */}
          <a className="flex items-center">
            <Image 
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </a>

          {/* MENU */}
          <div className= {`${robotoMono.className} flex items-center gap-6 md:gap-40 text-2xl`}>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#vision" className="nav-link">Vision & Mission</a>
            <a href="#service" className="nav-link">Our Service</a>
          </div>

          {/* LOGIN */}
          <a href="/login" className="bg-blue-500 px-5 py-2 rounded-full">
            LOGIN
          </a>
        </div>
      </nav>

      {/* 🔥 MAIN */}
      <main className="relative flex flex-col overflow-hidden bg-[#02060E]">

        {/* ================= HERO ================= */}
        <section id="home" className="h-screen scroll-mt-24 relative flex flex-col">

          {/* BACKGROUND */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/kapal.jpg"
              fill
              className="object-cover opacity-50 scale-105"
              alt="Background Kapal"
              priority
            />
          </div>

          {/* RECTANGLE SATU WARNA (Solid Overlay) */}
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundColor: 'rgba(16, 0, 17, 0.5)',
            }}
          />

          {/* GLOW*/}
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_70%_50%,rgba(16, 0, 17, 0.2),transparent_70%)]" />

          {/* CONTENT */}
          <div className="relative z-20 flex grow flex-col gap-8 md:gap-10 md:flex-row md:items-center px-6 md:px-20 pt-24">

            {/* LEFT */}
            <div className="relative z-20 flex items-center min-h-screen px-6 md:px-24">
              <h1 className={`${robotoMono.className} flex flex-col font-bold bg-gradient-to-r from-purple-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent`}>
  
                {/* Baris Atas */}
                <span className="text-[40px] md:text-[80px] leading-tight tracking-tight">
                  PT. Samudra 
                </span>
                
                {/* Baris Bawah: Pakai nilai manual [] agar beneran raksasa */}
                <span className="text-[60px] md:text-[80px] leading-[0.9] leading-tight">
                 Technology Nusantara
                </span>

              </h1>
            </div>
          </div>
        </section>

       {/* ================= ABOUT ================= */}
          <section id="about" className="relative min-h-screen flex items-center scroll-mt-20 overflow-hidden">
            
            {/* BACKGROUND GRADIENT*/}
            <div 
              className="absolute inset-0 z-0 opacity-40" 
                style={{
                  background: 'linear-gradient(180deg, rgba(2, 6, 14, 1) 0%, rgba(93, 27, 124, 1) 50%, rgba(88, 23, 111, 1) 100%)'
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20 py-20">
              <div className="flex flex-col md:flex-row items-center gap-12">

                {/*KIRI: TEKS*/}
                <div className="flex-1">
                  <h2 className={`${robotoMono.className} text-4xl md:text-6xl font-bold mb-8 text-white`}>
                    ABOUT US
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-gray-200 text-lg leading-[1.8]">
                      PT. Samudra Technology Nusantara is a forward-thinking technology company specializing in digital solutions for the maritime industry. Through its flagship platform, PrimeLog Fleet, the company transforms how fleet operations are monitored, managed, and optimized.
                    </p>
                    <p className="text-gray-200 text-lg leading-[1.8]">
                      By integrating real-time tracking, predictive maintenance, and centralized data systems, PrimeLog empowers shipping companies to gain full visibility over their fleet—anytime, anywhere. Our solution is designed to reduce operational risks, improve efficiency, and support smarter decision-making.
                    </p>
                    <p className="text-gray-200 text-lg leading-[1.8]">
                      We believe that the future of maritime operations lies in digital transformation, and we are committed to becoming a key enabler in that journey.
                    </p>
                  </div>
                </div>

                {/*KANAN: GAMBAR*/}
                <div className="md:w-[50%] w-full mt-12 md:mt-0">
                  <div className="relative aspect-video md:aspect-square w-full max-w-md  md:translate-x-36 md:translate-y-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src="/ab.png" 
                      alt="Logistics"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

         {/* ================= VISION & MISSION ================= */}
          <section id="vision" className="min-h-screen scroll-mt-24 flex flex-col md:flex-row">

            {/* ===== LEFT: VISION ===== */}
            <div className="flex-1 flex flex-col justify-start px-8 md:px-20 py-16 text-white pt-24"
              style={{
                background: 'rgba(113, 8, 210, 0.8)'
              }}
            >
              <h2 className={`${robotoMono.className} text-5xl md:text-6xl font-bold mb-8`}>
                VISION
              </h2>

              <p className="text-lg leading-[1.8] max-w-md">
                To become a leading maritime technology company that revolutionizes fleet management through intelligent, real-time, and data-driven solutions.
              </p>
            </div>

            {/* ===== RIGHT: MISSION ===== */}
            <div className="flex-1 flex flex-col justify-start px-8 md:px-20 py-16 text-white pt-24"
              style={{
                background: 'rgba(84, 10, 152, 0.8)'
              }}
            >
              <h2 className={`${robotoMono.className} text-5xl md:text-6xl font-bold mb-8`}>
                MISSION
              </h2>

              <ol className="space-y-4 text-lg leading-[1.8] max-w-md list-decimal pl-5">
                <li>To deliver innovative and reliable digital platforms that simplify fleet monitoring and management</li>
                <li>To provide accurate, real-time insights that support faster and better decision-making</li>
                <li>To enhance operational efficiency and reduce downtime through smart maintenance systems</li>
                <li>To ensure safety and transparency across all maritime operations</li>
                <li>To continuously evolve our technology in response to industry needs and global trends</li>
              </ol>
            </div>

          </section>
          
          {/* ================= SERVICES ================= */}
{/* ================= SERVICES ================= */}
<section 
  id="service" 
  className="min-h-screen scroll-mt-24 flex flex-col items-center justify-center px-6 md:px-20 py-20 text-white relative overflow-hidden"
>

  {/* BACKGROUND GRADIENT */}
  <div 
    className="absolute inset-0 z-0"
    style={{
      background: 'linear-gradient(180deg, rgba(2,6,14,1) 0%, rgba(93,27,124,0.9) 50%, rgba(2,6,14,1) 100%)'
    }}
  />

  {/* GLOW EFFECT */}
  <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_70%)]" />

  <div className="relative z-10 w-full max-w-6xl mx-auto">

    {/* TITLE */}
    <h2 className={`${robotoMono.className} text-5xl md:text-6xl font-bold text-center mb-16`}>
      OUR SERVICES
    </h2>

    {/* GRID */}
    <div className="flex flex-col items-center gap-12">

      {/* TOP ROW (2) */}
      <div className="flex justify-center gap-10">

        {/* CARD 1 */}
        <div className="card">
          <div className="image-wrapper">
            <Image src="/1.png" alt="tracking" fill className="object-cover rounded-xl" />
          </div>
          <p className="card-title">REAL-TIME VESSEL TRACKING</p>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <div className="image-wrapper">
            <Image src="/2.png" alt="map" fill className="object-cover rounded-xl" />
          </div>
          <p className="card-title">LIVE MAP MONITORING</p>
        </div>

      </div>

      {/* MIDDLE ROW (3) */}
      <div className="flex justify-center gap-10">

        {/* CARD 3 */}
        <div className="card">
          <div className="image-wrapper">
            <Image src="/3.png" alt="alert" fill className="object-cover rounded-xl" />
          </div>
          <p className="card-title">ALERT SYSTEM</p>
        </div>

        {/* CENTER CARD (HIGHLIGHT) */}
        <div className="card scale-105 border-purple-400">
          <div className="image-wrapper">
            <Image src="/5.png" alt="maintenance" fill className="object-cover rounded-xl" />
          </div>
          <p className="card-title">MAINTENANCE MANAGEMENT</p>
        </div>

        {/* CARD 5 */}
        <div className="card">
          <div className="image-wrapper">
            <Image src="/4.png" alt="notification" fill className="object-cover rounded-xl" />
          </div>
          <p className="card-title">ALERT & NOTIFICATION SYSTEM</p>
        </div>

      </div>

    </div>
  </div>
</section>

              {/* ================= CONTACT ================= */}
          <section 
            id="contact" 
            className="relative min-h-screen flex items-center overflow-hidden"
          >

            {/* BACKGROUND FULL */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                background: 'rgba(95, 28, 127, 1)'
              }}
            />

            {/* IMAGE FULL KANAN */}
            <div className="absolute right-0 top-0 h-full w-[60%] z-10">
              <Image
                src="/ctt.jpeg"
                alt="contact"
                fill
                className="object-cover"
              />

            </div>

            {/* CONTENT */}
            <div className="relative z-20 w-full max-w-7xl px-6 md:px-20 text-white flex">

              <div className="w-[40%]"> 

                <h2 className={`${robotoMono.className} text-7xl md:text-8xl font-bold mb-10`}>
                  CONTACT <span className="text-purple-400">US</span>
                </h2>

                <div className="space-y-6 text-2xl ">

                  <p>📷 @samudratech.nusantara</p>
                  <p>📱 (0728) 345-253</p>
                  <p>✉️ samudratech.nusantara@gmail.com</p>
                  <p>📍 Jakarta, Indonesia</p>
                  <p>⏰ Mon–Fri 09–17a, Indonesia</p>

                </div>

              </div>
            </div>

          </section>



      </main>
    </>
  );
}