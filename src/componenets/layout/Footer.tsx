import { FOOTER } from "../../utils/constants/contentConstant";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center border-t border-[#E5E7EB] bg-white px-5 py-5 text-center">
      <p className="text-xs leading-relaxed text-[#595C61] md:text-sm">
        {FOOTER.FOOTER_TEXT}
      </p>
    </footer>
  );
};

export default Footer;
