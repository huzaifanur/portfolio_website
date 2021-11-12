import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMobile, AiFillMail,AiOutlineCloudServer } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
        
      <LinkList>
        <LinkColumn>
          <LinkTitle><SocialIcons href="https://google.com">
            <AiFillMobile size="3rem" />
          </SocialIcons></LinkTitle>
          <LinkItem href="tel:314-343-3432">92-331-234-7038</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle><SocialIcons href="https://google.com">
            <AiFillMail size="3rem" />
          </SocialIcons></LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            huzaifa98nur@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        
        <SocialContainer>
        <SocialIcons href="https://github.com/huzaifanur">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/huzaifa98nur">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
          
          
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
