import { Link } from "react-router-dom";
import { RouteConstants } from "../../../app/constants/route.constants";
function Header() {
  return (
    <div className="flex justify-start items-center py-5 px-4 md:px-24 bg-blue-chakra text-white">
      <Link className="font-semibold" to={RouteConstants.ROOT}>
        Tasks
      </Link>
    </div>
  );
}

export default Header;
