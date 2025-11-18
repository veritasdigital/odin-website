import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Video, Users, BarChart3 } from "lucide-react";
import odinLogo from "@/assets/odin-digital-logo.png";

// Declare custom element for Wistia player
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'media-id': string;
        aspect?: string;
      }, HTMLElement>;
    }
  }
}

const FreeTrainingsThankYou = () => {
  useEffect(() => {
    const fbq = (window as any).fbq;
    if (typeof fbq === "function") {
      fbq("track", "Schedule");
    }
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/player.js";
    script.async = true;
    document.head.appendChild(script);

    const moduleScript = document.createElement("script");
    moduleScript.src = "https://fast.wistia.com/embed/rg5p77crh0.js";
    moduleScript.async = true;
    moduleScript.type = "module";
    document.head.appendChild(moduleScript);

    const style = document.createElement("style");
    style.textContent = `
      wistia-player[media-id='rg5p77crh0']:not(:defined) {
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/rg5p77crh0/swatch');
        display: block;
        filter: blur(5px);
        padding-top: 56.25%;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(moduleScript);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>You Are Booked! | Odin Digital</title>
        <meta name="description" content="Your meeting is confirmed. Follow these important steps to ensure you can attend your scheduled call with Odin Digital." />
        <meta name="keywords" content="booking confirmation, sales call, Odin Digital meeting" />
        <link rel="canonical" href="https://odindigital.com.au/free-trainings-thank-you" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <img src={odinLogo} alt="Odin Digital" className="h-16 mx-auto mb-8" />
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              You Are Booked!
            </h1>
            <p className="text-xl text-muted-foreground">
              Follow The Steps Below,<br />
              Or You Won't Be Able To Attend The Meeting!
            </p>
          </div>
          
          {/* Video Section */}
          <div className="mt-12 max-w-3xl mx-auto">
            <wistia-player 
              media-id="rg5p77crh0" 
              aspect="1.7777777777777777" 
              style={{
                width: '100%',
                borderRadius: '0.5rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }} 
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Step 1 */}
          <Card className="bg-card border-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-foreground">
                <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">1</span>
                Confirm Your Meeting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground mb-2">
                    I have sent you an email as well as a calendar invite.
                  </p>
                  <p className="text-muted-foreground mb-2">
                    Please check your inbox, primary folder or spam folder since it may have landed in there.
                  </p>
                  <p className="text-muted-foreground">
                    Please tick "I know the sender" since Google likes to send out this notification for people who haven't emailed you before.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="bg-card border-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-foreground">
                <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">2</span>
                What Our Zoom Meeting Will Include
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Video className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    We sent you a calendar invite, email confirmation, SMS confirmation and Zoom Link.
                  </p>
                  <p className="text-muted-foreground">
                    Please email <a href="mailto:hello@odindigital.com" className="text-accent hover:text-accent/80 underline">matteo@odindigital.com</a> if you didn't receive that email.
                  </p>
                  <p className="text-muted-foreground">
                    Please be in a quiet area with a good internet connection.
                  </p>
                  <p className="text-muted-foreground">
                    We may show a visual presentation and a bad internet connection will make it a waste of everyone's time.
                  </p>
                  <p className="text-muted-foreground">
                    If you need to reschedule, we understand! Just give us some notice so we respect each other's time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="bg-card border-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-foreground">
                <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">3</span>
                Learn About Our Team
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">
                Learn about our team and what to expect from your consultation. Discover who we are and how we work with our client partnerships.
              </p>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-accent" />
                <a href="/about" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    About Our Team
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="bg-card border-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-foreground">
                <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">4</span>
                Check Out Our Case Studies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-4">
                See real results from our clients across multiple industries. These case studies showcase the growth we've helped businesses achieve.
              </p>
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-6 w-6 text-accent" />
                <a href="/our-clients" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    View Case Studies
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default FreeTrainingsThankYou;
