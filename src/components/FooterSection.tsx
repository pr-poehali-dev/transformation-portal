const FooterSection = () => {
  return (
    <footer className="py-10 bg-portal-dark text-portal-cream/40">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-heading text-2xl text-portal-cream/80 mb-2">ПОРТАЛ</p>
        <p className="font-body text-sm">
          Трансформационный практикум © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
