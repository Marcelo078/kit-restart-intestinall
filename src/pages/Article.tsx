import { useParams, Navigate } from "react-router-dom";
import { getArticleBySlug } from "@/data/articles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock } from "lucide-react";
import { useEffect } from "react";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} de leitura</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {article.description}
            </p>

            {/* Top CTA */}
            <div className="flex justify-center mb-8">
              <CTAButton text="Clique Aqui e Garanta Já" />
            </div>

            <img
              src={article.image}
              alt={article.title}
              className="w-full rounded-2xl shadow-lg mb-8"
              loading="eager"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content.split('\n').map(line => {
              if (line.startsWith('## ')) {
                return `<h2 class="text-3xl font-bold mt-12 mb-6">${line.substring(3)}</h2>`;
              }
              if (line.startsWith('### ')) {
                return `<h3 class="text-2xl font-semibold mt-8 mb-4">${line.substring(4)}</h3>`;
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return `<p class="font-bold text-lg mb-4">${line.slice(2, -2)}</p>`;
              }
              if (line.startsWith('- ')) {
                return `<li class="ml-6 mb-2">${line.substring(2)}</li>`;
              }
              if (line.trim() === '') {
                return '<br />';
              }
              return `<p class="mb-4 leading-relaxed">${line}</p>`;
            }).join('')}}
          />

          {/* Middle CTA */}
          <div className="my-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Transforme Sua Saúde Intestinal Agora
            </h3>
            <p className="text-muted-foreground mb-6">
              Não perca esta oportunidade de cuidar do seu bem-estar
            </p>
            <CTAButton text="Aproveite Esta Oferta Agora" />
          </div>

          {/* FAQ Section */}
          {article.faq && article.faq.length > 0 && (
            <div className="my-16">
              <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="w-full">
                {article.faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 p-10 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 rounded-2xl text-center border-2 border-secondary/20">
            <h3 className="text-3xl font-bold mb-4">
              Pronto Para Dar o Próximo Passo?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Milhares de pessoas já transformaram sua saúde intestinal. Chegou a sua vez!
            </p>
            <CTAButton text="Comece Sua Transformação Hoje" />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Article;
