import { NavbarBrand } from "reactstrap";
import logoImg from "../../image/logo.png";

const BrandLogo = () => {
  return (
    <NavbarBrand className="text-muted">
      <img
        className="ml-2 ml-sm-3"
        src={logoImg}
        width="80"
        height="30"
        alt="Image"
      />
    </NavbarBrand>
  );
};

export default BrandLogo;
