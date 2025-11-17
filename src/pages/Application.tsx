import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ApplicationForm from "@/components/ApplicationForm";

const Application = () => {
  useEffect(() => {
    // Initialize Facebook Pixel
    (function(f: any, b: any, e: string, v: string, n: any, t: any, s: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null, null, null);
    
    (window as any).fbq('init', '1094095235822634');
    (window as any).fbq('track', 'PageView');

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = 'https://www.facebook.com/tr?id=1094095235822634&ev=PageView&noscript=1';
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    return () => {
      // Cleanup noscript element on unmount
      const noscripts = document.getElementsByTagName('noscript');
      for (let i = 0; i < noscripts.length; i++) {
        const ns = noscripts[i];
        if (ns.querySelector('img[src*="facebook.com/tr"]')) {
          ns.remove();
          break;
        }
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Free Growth Session | Odin Digital</title>
        <meta name="description" content="Claim a free zero-obligation A.I Performance Marketing Plan for your business valued at $2,500." />
        <meta name="keywords" content="growth session, marketing audit, Odin Digital" />
        <link rel="canonical" href="https://odindigital.com.au/application" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://qrpyukrdkajotbjlaacg.supabase.co" />
        <link rel="dns-prefetch" href="https://qrpyukrdkajotbjlaacg.supabase.co" />
      </Helmet>
      
      <ApplicationForm />
    </>
  );
};

export default Application;
