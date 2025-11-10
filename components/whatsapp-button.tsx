"use client";
import Link from "next/link";
function WhatsAppButton() {
  const phoneNumber = "573150000612"; 
  const message = "Hello! I'm interested in your services."; 
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Botón pequeño en el borde para mobile - solo visible en mobile */}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-18 right-0 md:hidden w-7 h-10 rounded-s-xl bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-end shadow-lg shadow-[#25d366]/40 transition-all duration-300 hover:scale-110 active:scale-95 z-[1001]"
        aria-label="Contact via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
      </Link>

      {/* Botón completo para desktop - solo visible en desktop */}
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 w-14 h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full items-center justify-center shadow-lg shadow-[#25d366]/40 hover:shadow-xl hover:shadow-[#25d366]/60 transition-all duration-300 hover:scale-110 active:scale-95 z-[1000] animate-pulse"
        aria-label="Contact via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
      </Link>
    </>
  );
}

export default WhatsAppButton;

