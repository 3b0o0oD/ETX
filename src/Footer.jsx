import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  FooterContainer,
  Row,
  FooterLink,
} from "./FooterStyle.js";

const Footer = () => {
  return (
    <Box>
      <FooterContainer>
        <Row>
          {/* Facebook */}
          <FooterLink href="#">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </FooterLink>

          {/* Instagram */}
          <FooterLink href="#">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </FooterLink>

          {/* Twitter (Now X) */}
          <FooterLink href="#">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </FooterLink>
        </Row>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
