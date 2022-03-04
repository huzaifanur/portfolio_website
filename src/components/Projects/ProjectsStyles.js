import styled from "styled-components";

export const GridContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  margin-bottom: 2rem;
  flex-basis: 48%;
  height: 900px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  height: 280px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  font-size: 34px;
  padding-top: 20px;
  font-weight: 600;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
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
  word-spacing: 0.2rem;
  padding: 0 2rem;
  color: #e4e6e7;
  line-height: 2.5rem;

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
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-wrap: wrap;
  }
`;

export const ExternalLinks = styled.a`
  flex-basis: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem;
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
