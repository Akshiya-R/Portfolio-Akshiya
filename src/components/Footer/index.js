// import styled from 'styled-components';
// import { Bio } from '../../data/constants';

// const FooterContainer = styled.div`
//   width: 100%;
//   padding: 2rem 0;
//   display: flex;
//   justify-content: center;
//   //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
// `;


// const FooterWrapper = styled.footer`
//   width: 100%;
//   max-width: 1200px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   align-items: center;
//   padding: 1rem;
//   color: ${({ theme }) => theme.text_primary};
// `;

// const Logo = styled.h1`
//   font-weight: 600;
//   font-size: 20px;
//   color: ${({ theme }) => theme.primary};
// `;

// const Nav = styled.nav`
//   width: 100%;
//   max-width: 800px;
//   margin-top: 0.5rem;
//   display: flex;
//   flex-direction: row;
//   gap: 2rem;
//   justify-content: center;
//   @media (max-width: 768px) {
//     flex-wrap: wrap;
//     gap: 1rem;
//     justify-content: center;
//     text-align: center;
//     font-size: 12px;
//   }
// `;

// const NavLink = styled.a`
// color: ${({ theme }) => theme.text_primary};
//   text-decoration: none;
//   font-size: 1.2rem;
//   transition: color 0.2s ease-in-out;
//   &:hover {
//     color: ${({ theme }) => theme.primary};
//   }
//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const SocialMediaIcons = styled.div`
//   display: flex;
//   margin-top: 1rem;
// `;

// const SocialMediaIcon = styled.a`
//   display: inline-block;
//   margin: 0 1rem;
//   font-size: 1.5rem;
//   color: ${({ theme }) => theme.text_primary};
//   transition: color 0.2s ease-in-out;
//   &:hover {
//     color: ${({ theme }) => theme.primary};
//   }
// `;

// const Copyright = styled.p`
//   margin-top: 1.5rem;
//   font-size: 0.9rem;
//   color: ${({ theme }) => theme.soft2};
//   text-align: center;
// `;

// function Footer() {
//   return (
//     <FooterContainer>
//       <FooterWrapper>
//         <Logo>Akshiya</Logo>
//         <Nav>
//           <NavLink href="#about">About</NavLink>
//           <NavLink href="#skills">Skills</NavLink>
//           <NavLink href="#education">Education</NavLink>
//         </Nav>
//         <SocialMediaIcons>
          
//           <SocialMediaIcon href={Bio.linkedin} target="display"></SocialMediaIcon>
//         </SocialMediaIcons>
//         <Copyright>
//           &copy; 2024 Akshiya. All rights reserved.
//         </Copyright>

//       </FooterWrapper>
//     </FooterContainer>
//   );
// }

// export default Footer;

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

const FooterContainer = styled.div`
  width: 100%;
  background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const ContactInfo = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactItem = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.2rem;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Akshiya</Logo>
        <ContactInfo>
          <ContactItem>
            <FontAwesomeIcon icon={faPhone} /> +94 773162569
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon icon={faEnvelope} /> 
            <ContactLink href="mailto:akshiya.raveendiran@gmail.com">akshiya.raveendiran@gmail.com</ContactLink>
          </ContactItem>
          <ContactItem>
          <FontAwesomeIcon icon={faLinkedin} />
            <ContactLink href="https://www.linkedin.com/in/akshiya-raveendiran/">linkedin.com/in/akshiya-raveendiran</ContactLink>
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 15, Puthuththoddam- veethy, Nelliady-East, Karaveddy
          </ContactItem>
        </ContactInfo>
        <Copyright>
          &copy; 2024 Akshiya. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;


