import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kit Restart Intestinal - Saúde Digestiva e Bem-Estar</title>
        <meta 
          name="description" 
          content="Descubra como melhorar sua saúde intestinal naturalmente. Guia completo sobre digestão, probióticos, detox e suplementos para o intestino." 
        />
        <meta 
          name="keywords" 
          content="saúde intestinal, probióticos, detox, digestão, intestino preso, flora intestinal, suplementos digestivos, gases, inchaço abdominal" 
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <Hero />
          
          {/* Articles Section */}
          <section id="artigos" className="container mx-auto px-4 py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Artigos Sobre Saúde Intestinal
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Conteúdo baseado em evidências científicas para transformar sua saúde digestiva
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  description={article.description}
                  image={article.image}
                  slug={article.slug}
                  readTime={article.readTime}
                />
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Por Que a Saúde Intestinal é Tão Importante?
                </h2>
                <div className="grid gap-8 md:grid-cols-3 mt-12">
                  <div className="p-6 bg-card rounded-xl shadow-md">
                    <div className="text-4xl mb-4">🧠</div>
                    <h3 className="text-xl font-semibold mb-3">Segundo Cérebro</h3>
                    <p className="text-muted-foreground">
                      O intestino abriga trilhões de neurônios e produz 90% da serotonina do corpo
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-xl shadow-md">
                    <div className="text-4xl mb-4">🛡️</div>
                    <h3 className="text-xl font-semibold mb-3">Imunidade Forte</h3>
                    <p className="text-muted-foreground">
                      70% do sistema imunológico está localizado no intestino
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-xl shadow-md">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold mb-3">Mais Energia</h3>
                    <p className="text-muted-foreground">
                      Intestino saudável = melhor absorção de nutrientes e mais disposição
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
