import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import Container from "../common/Container";
import Tooltip from "../common/Tooltip";
import AuthLink from "./AuthLink";
import Logo from "./Logo";
import { Nav } from "./Nav";
import ToggleMode from "./ToggleMode";
import UserProfile from "./UserProfile";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="py-3 bg-gray-100 shadow text-neutral-700 dark:bg-[#1F2937] dark:text-neutral-300">
      <Container CS="flex justify-between items-center md:gap-1 ">
        <Logo />
        <Nav />
        <AuthLink />
        <ToggleMode />
        {user && (
          <Tooltip title={user.displayName}>
            <UserProfile />
          </Tooltip>
        )}
      </Container>
    </header>
  );
};

export default Header;
