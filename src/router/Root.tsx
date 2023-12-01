import { Box } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

type MenuType = {
  url: string;
  label: string;
};

const constmenu: MenuType[] = [
  { label: "HOME", url: "/home" },
  { label: "BOOKMARK", url: "/bookmark" },
];

const Root = () => {
  const navigate = useNavigate();

  const handleClickMenu = (url: string) => {
    navigate(url);
  };

  return (
    <Wrap>
      <StyledAside>
        {constmenu.map((menu) => (
          <Box
            px={4}
            h="40px"
            lineHeight="40px"
            _hover={{ cursor: "pointer", backgroundColor: "whiteAlpha.300" }}
            key={menu.label}
            onClick={() => handleClickMenu(menu.url)}
          >
            {menu.label}
          </Box>
        ))}
      </StyledAside>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const StyledAside = styled.aside`
  width: 240px;
  height: 100%;
  background-color: black;
  color: white;
`;

const StyledMain = styled.main`
  width: calc(100% - 240px);
  height: 100%;
  padding: 0 30px;
`;

export default Root;
