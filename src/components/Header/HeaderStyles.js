import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-wrap: wrap;
  }
  @media ${(props) => props.theme.breakpoints.xsm} {
    flex-wrap: wrap;
  }
`;
export const Div1 = styled.div`
display: flex;
justify-content: center;
  @media ${(props) => props.theme.breakpoints.md} {
    flex: 6;
  }
  @media ${(props) => props.theme.breakpoints.xsm} {
    flex: 12;
  }
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  //flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  @media ${(props) => props.theme.breakpoints.md} {
    flex:12; 
    order: 3;
    
  }
  @media ${(props) => props.theme.breakpoints.xsm} {
    flex-wrap: wrap;
    
    flex: 12;
  }
`;
export const Div3 = styled.div`
  display: flex;
  @media ${(props) => props.theme.breakpoints.md} {
    flex: 6;
    justify-content: flex-end;
  }
  @media ${(props) => props.theme.breakpoints.xsm} {
    justify-content: center;
    flex: 12;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  /* font-size: 2rem; */
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    /* padding: 0.5rem; */
  }
`;


// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
