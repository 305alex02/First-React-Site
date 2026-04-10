function Footer() {
  return (
    <footer>
      <div className="fixed flex w-full bottom-0 items-center justify-center py-1 text-white bg-slate-600">
        <p>&copy; {new Date().getFullYear()} Precision Contractors</p>
      </div>
    </footer>
  );
}

export default Footer;