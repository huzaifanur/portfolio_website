import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: 0;
  margin: 0 auto;
  max-width: 1280px;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 60%;
`;

export const GridContainer = styled.section`
  display: flex;
  justify-content: center;
 gap: 2rem;
 row-gap: 3rem;
  flex-wrap: wrap;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  flex-basis: 90%;  
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-basis: 100%;  
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  font-size: 34px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 600;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const Stack = styled.div`
  z-index: 20;
  font-size: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 600;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 26px;
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 80%;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  font-size: 1.5rem;
  padding: 3rem ;
  padding-bottom: 1rem;
  color: #e4e6e7;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 2rem;
`;
