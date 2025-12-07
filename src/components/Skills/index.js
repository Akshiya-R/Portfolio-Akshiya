import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
margin-bottom: 50px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const Skill = styled.div`
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: rgba(23, 92, 230, 0.3) 0px 8px 32px;
  }

  @media (max-width: 768px) {
    padding: 16px 16px;
  }
  @media (max-width: 500px) {
    padding: 16px 16px;
  }
`

const SkillTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 18px;
  text-align: center;
  background: linear-gradient(135deg, #854CE6 0%, #61DAFB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 14px;
  }
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 0px;
`

const SkillItem = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.text_primary + 10};
  border: 1px solid ${({ theme }) => theme.text_primary + 30};
  border-radius: 8px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.text_primary + 20};
    border-color: #854CE6;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 10px;
    gap: 4px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
    padding: 7px 9px;
  }
`

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Proficient in a variety of programming languages, frameworks, databases, and development tools. Here are the technologies I work with.
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, idx) => (
                  <SkillItem key={idx}>
                    <SkillImage src={item.image} alt={item.name}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills