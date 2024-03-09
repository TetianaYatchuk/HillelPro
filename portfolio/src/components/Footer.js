import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/image/logo.svg";
import navIcon1 from "../assets/image/Telegram.webp";
import navIcon2 from "../assets/image/git.png";
import navIcon3 from "../assets/image/linkedin.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href=" https://t.me/Sonysa15"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/TetianaYatchuk"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/tetiana-yatchuk-58a92a273/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}