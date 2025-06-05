"use client";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/523511212843?text=Hola,%20quiero%20más%20información%20por%20favor"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2A9.94 9.94 0 002 11.99c0 1.76.46 3.47 1.34 4.98L2 22l5.15-1.31a9.93 9.93 0 004.89 1.25h.03A9.94 9.94 0 0022 11.99 9.94 9.94 0 0012.04 2zm5.68 14.52c-.24.67-1.39 1.28-1.93 1.36-.5.08-1.1.11-1.77-.12-.4-.13-.91-.29-1.56-.57a9.63 9.63 0 01-3.42-2.7 8.71 8.71 0 01-1.8-3.17c-.19-.52-.02-1.15.26-1.5.27-.34.6-.43.93-.43h.67c.26 0 .39.02.56.44.24.59.83 2.04.9 2.19.07.15.12.33.02.52-.1.19-.15.31-.3.48-.15.17-.31.37-.44.5-.15.15-.3.3-.13.59.17.28.77 1.26 1.64 2.04 1.12 1.01 2.06 1.33 2.33 1.48.26.15.41.12.56-.07.15-.19.65-.75.83-1 .17-.26.34-.22.56-.15.23.07 1.47.7 1.72.83.26.12.43.19.5.3.08.12.08.67-.15 1.34z" />
      </svg>
    </Link>
  );
}
