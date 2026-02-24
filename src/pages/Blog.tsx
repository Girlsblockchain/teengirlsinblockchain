import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Insights, updates, and stories from the Teen Girls In Blockchain community.
            </p>
          </div>
          <div className="text-center text-muted-foreground py-20">
            <p className="text-lg">Coming soon — stay tuned for articles and updates!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
