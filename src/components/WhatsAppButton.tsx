import { Button } from "@/components/ui/button";
import WhatsAppButtonImage from "@/assets/others/whatsapp.png";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919404947907"; // Replace with actual number
    const message = encodeURIComponent("Hello! I'm interested in WELCOT Towels products.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="group fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="icon"
        className="rounded-full h-12 w-12 shadow-premium bg-[#25D366] hover:bg-[#20BA5A] text-white transition-smooth hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <img
          src={WhatsAppButtonImage}
          alt="WhatsApp"
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
      </Button>
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-primary text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-smooth whitespace-nowrap pointer-events-none">
        Chat with us
      </div>
    </div>
  );
};

export default WhatsAppButton;
