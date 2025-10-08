import heroImage from "@/assets/hero-wellness.jpg";
import CTAButton from "./CTAButton";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              Transforme Sua Saúde Intestinal Naturalmente
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubra métodos comprovados para melhorar sua digestão, eliminar o desconforto abdominal e conquistar mais energia e disposição no dia a dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton text="Comece Sua Transformação" />
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Mulher saudável praticando exercícios e cuidando da saúde intestinal"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-video"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
