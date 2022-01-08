import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterPage = () => {
  return (
    <div color="blue" className="font-small pt-4 mt-4 bg-warning">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title">OnShop</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium asperiores aliquam provident numquam sunt reprehenderit molestiae alias? Dolor autem, aspernatur sit corporis eos quisquam repellendus numquam perferendis voluptate sed?
            </p>
            <FacebookOutlinedIcon />
            <YouTubeIcon />
            <TwitterIcon />
          </Col>
          <Col md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                +921 63579127
              </li>
              <li className="list-unstyled">
                abc@gmail.com
              </li>
              <li className="list-unstyled">
                www.onshop.com
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: Reeba
        </Container>
      </div>
    </div>
  );
}

export default FooterPage;