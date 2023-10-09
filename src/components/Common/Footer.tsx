import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const FooterUnOrderList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      <FooterUnOrderList>
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ysonbrian@gmail.com"
            target="_blank"
          >
            <SiGmail size="30px" />
          </a>
        </li>
        <li>
          <a href="https://github.com/ysonbrian" target="_blank">
            <FaGithub size="30px" />
          </a>
        </li>
      </FooterUnOrderList>
      <br />
      <div> ©Youngduk Son • {new Date().getFullYear()}</div>
    </FooterWrapper>
  )
}

export default Footer
