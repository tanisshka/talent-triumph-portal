import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { useNavigate } from "react-router-dom";
import { FileText, Brain, Target, TrendingUp, Zap, Shield } from "lucide-react";
import interviewHero from "@/assets/interview-hero.webp";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms analyze your resume to identify strengths and areas for improvement.",
      delay: 0,
    },
    {
      icon: Target,
      title: "Job Match Scoring",
      description: "Get precise match scores for job descriptions and optimize your resume accordingly.",
      delay: 100,
    },
    {
      icon: TrendingUp,
      title: "Career Insights",
      description: "Receive actionable insights to boost your career prospects and stand out to employers.",
      delay: 200,
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get real-time suggestions on formatting, keywords, and content optimization.",
      delay: 300,
    },
    {
      icon: Shield,
      title: "ATS Optimization",
      description: "Ensure your resume passes Applicant Tracking Systems with our smart optimization.",
      delay: 400,
    },
    {
      icon: FileText,
      title: "Multiple Formats",
      description: "Support for various resume formats and export options for maximum compatibility.",
      delay: 500,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={interviewHero}
            alt="Professional job interview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-4">
              <Zap className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Powered by Advanced AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              AI Resume Analyser
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Transform your resume with AI-powered insights. Get personalized feedback, 
              optimize for ATS systems, and land your dream job.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                onClick={() => navigate("/auth")}
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 shadow-glow animate-float"
              >
                <FileText className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create a winning resume that gets noticed by recruiters
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who have successfully landed their dream jobs 
            with our AI-powered resume analysis.
          </p>
          <Button
            onClick={() => navigate("/auth")}
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 shadow-glow"
          >
            <FileText className="mr-2 h-5 w-5" />
            Start Analyzing Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 AI Resume Analyser. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
