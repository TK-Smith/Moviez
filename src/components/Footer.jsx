import "../styles/footer.css";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer">
      <p>
        Copyright &copy; {today.getFullYear()}. Designed by{" "}
        <b className="font-extrabold">Torkuma Moses</b>
      </p>
    </footer>
  );
};

export default Footer;
