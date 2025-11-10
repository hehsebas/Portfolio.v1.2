"use client";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";

function WhatsAppButton() {
  const phoneNumber = "573150000612"; 
  const message = "Hello! I'm interested in your services."; 
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-8 md:bottom-8 md:right-8 w-14 h-14 md:w-14 md:h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25d366]/40 hover:shadow-xl hover:shadow-[#25d366]/60 transition-all duration-300 hover:scale-110 active:scale-95 z-[1000] animate-pulse"
      aria-label="Contact via WhatsApp"
    >
      <SiWhatsapp size={28} />
    </Link>
  );
}

export default WhatsAppButton;

