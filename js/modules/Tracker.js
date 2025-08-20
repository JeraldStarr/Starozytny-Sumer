const tracker = {
  track() {
    if (!window.gtag) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-ZYQB3VN7V3";
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', 'G-ZYQB3VN7V3');
    } else {
      window.gtag('config', 'G-ZYQB3VN7V3', {
        page_path: window.location.pathname,
      });
    }
  }
};

export default tracker;


