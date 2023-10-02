import styled from "styled-components";
import { FaEarthAmericas } from "react-icons/fa6";

const Header = () => {
  return (
    <StyledHeader>
      <FaEarthAmericas style={{ fontSize: "30px" }} />
      <p>my travel journal.</p>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #f34f50;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 20px;
  color: #fff;
`;

export default Header;
