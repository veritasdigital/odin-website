import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";

interface RelatedArticle {
  title: string;
  description: string;
  path: string;
  topic: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookOpen className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-black text-center">Related Articles</h2>
        </div>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Continue learning with these related resources
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link key={index} to={article.path} className="group">
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                  {article.topic}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
