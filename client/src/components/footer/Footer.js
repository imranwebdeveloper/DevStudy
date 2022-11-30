import About from "./About";
import CustomerCare from "./CustomerCare";
import EarnWith from "./EarnWith";
import Container from "../common/Container";
import Download from "./Download";

const Footer = () => {
  return (
    <footer className="py-14 bg-slate-200 dark:bg-[#1F2937] text-neutral-700  dark:text-neutral-300">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <CustomerCare />
          <EarnWith />
          <About />
          <Download />
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
