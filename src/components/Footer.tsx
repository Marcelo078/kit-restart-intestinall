const Footer = () => {
  return (
    <footer className="mt-20 border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Saúde Intestinal Brasil. Todos os direitos reservados.</p>
          <p className="mt-2">
            Este site contém links de afiliados. Podemos receber comissão por compras realizadas através destes links.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
