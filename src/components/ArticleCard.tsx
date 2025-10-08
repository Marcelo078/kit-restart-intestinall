import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  readTime: string;
}

const ArticleCard = ({ title, description, image, slug, readTime }: ArticleCardProps) => {
  return (
    <Link to={`/artigo/${slug}`} className="group">
      <Card className="h-full overflow-hidden transition-all hover:shadow-xl">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardHeader>
          <div className="text-xs text-muted-foreground mb-2">{readTime} de leitura</div>
          <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-3">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-primary font-semibold">
            Ler artigo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
