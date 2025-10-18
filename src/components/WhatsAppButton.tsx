import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"; // Replace with actual number
    const message = encodeURIComponent("Hello! I'm interested in WELCOT Towels products.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 shadow-premium bg-[#25D366] hover:bg-[#20BA5A] text-white"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </Button>
  );
};

export default WhatsAppButton;
