const Footer = () => {
  return (
    <footer className="bg-black text-yellow-500 text-center py-6 mt-10 border-t border-gray-800">
      <div className="mb-3">
        <h2 className="font-bold text-lg">About Us</h2>
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          We provide premium event services including catering, photography, decoration,
          and more.
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="hover:text-yellow-400">Facebook</a>
        <a href="#" className="hover:text-yellow-400">Instagram</a>
        <a href="#" className="hover:text-yellow-400">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
