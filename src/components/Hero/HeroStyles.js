import styled from 'styled-components';


export const RightSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const ImgContainer = styled.div`
height: 400px;
width: 400px;
border-radius: 50%;
overflow: hidden;
object-fit: cover;
display: flex;
align-items: center;
justify-content: center;
`

export const Img = styled.img`

height: 100%;

`

export const CenterSection = styled.div`
  max-width: 100%;
  margin-left:60px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    
    width: 100%;
    display: flex;
    flex-direction: column;
    
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

  }
`;

export const HeroSectionTitle = styled.h2`
  font-weight: 700;
  font-size: 4rem;
  line-height: 4rem;
  
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding:58px 0 16px;

  @media ${props => props.theme.breakpoints.md}{
    text-align: center;
    font-size: 56px;
    line-height:56px;
    margin-bottom: 12px;
    padding:40px 0 12px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: 28px;
    line-height:32px;
    margin-bottom: 8px;
    padding:16px 0 8px;
    max-width: 100%;
  }
`





export const HeroSection = styled.section`
  display: flex;
  
  padding: 32px 48px 0 ;
  margin: 0 auto;
  min-height: 80vh;
  max-width: 1400px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
    
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0"} ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`