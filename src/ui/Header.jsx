import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 2.8rem;
  border-radius: 1px solid var(--color-grey-100);
`;

function Header() {
  return <StyledHeader>HEADER</StyledHeader>;
}

export default Header;
