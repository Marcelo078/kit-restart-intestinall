import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface CTAButtonProps {
  text?: string;
  className?: string;
}

const CTAButton = ({ text = "Aproveite Esta Oferta Agora", className = "" }: CTAButtonProps) => {
  const affiliateLink = "https://app.monetizze.com.br/r/ACN25503403";

  return (
    <Button
      variant="cta"
      size="lg"
      className={className}
      onClick={() => window.open(affiliateLink, '_blank', 'noopener,noreferrer')}
    >
      {text}
      <ExternalLink className="ml-2 h-5 w-5" />
    </Button>
  );
};

export default CTAButton;
