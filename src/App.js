import { Row, Col, Button } from "antd";
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Row className="row">
          <Col span={14} className="col main-left-col">
            <div className="main-title">Welcome.</div>
            <div className="main-self-description">
              <div style={{ marginBottom: "1vh" }}>
                My name is Juan Tedja Kusmana. I'm a results-driven and
                passionate Computer Science graduate with a bachelor's degree
                and Summa Cum Laude honors. Proven expertise in IT support, web
                development, and front-end development.
              </div>
              <div>
                Currently employed as a Junior Front-end Developer at a vendor
                company based in Kelapa Gading, Jakarta, Indonesia. Experienced
                in designing and implementing web-based systems with a strong
                foundation in both front-end and back-end development.
              </div>
            </div>
          </Col>
          <Col span={6} className="col main-middle-col">
            <div className="main-subtitle">Projects</div>
            <div className="main-projects-container">
              <Button type="link" className="main-project-button">
                <div className="main-projects">
                  Banking Terminal Management System
                </div>
              </Button>
              <Button type="link" className="main-project-button">
                <div className="main-projects">Banking Queue Form</div>
              </Button>
              <Button type="link" className="main-project-button">
                <div className="main-projects">
                  Queue Management System (TV Display)
                </div>
              </Button>
              <Button type="link" className="main-project-button">
                <div className="main-projects">
                  Banking Form Management System
                </div>
              </Button>
              <Button
                type="link"
                className="main-project-button"
                onClick={() => {
                  window.location.href =
                    "https://ieeexplore.ieee.org/document/10127723";
                }}
              >
                <div className="main-projects">
                  Web Based Inventory Management System
                </div>
                <div className="main-projects">With Predictive Modelling</div>
              </Button>
            </div>
          </Col>
          <Col span={4} className="col main-right-col">
            <div className="main-icons-container">
              <Button
                type="link"
                className="main-icon-button"
                icon={
                  <MailOutlined
                    style={{ fontSize: "2vmax" }}
                    onClick={() => {
                      window.location.href = "mailto:juantedjak@gmail.com";
                    }}
                  />
                }
              />
              <Button
                type="link"
                className="main-icon-button"
                icon={
                  <GithubOutlined
                    style={{ fontSize: "2vmax" }}
                    onClick={() => {
                      window.location.href = "https://github.com/juantedjak";
                    }}
                  />
                }
              />
              <Button
                type="link"
                className="main-icon-button"
                icon={
                  <LinkedinOutlined
                    style={{ fontSize: "2vmax" }}
                    onClick={() => {
                      window.location.href =
                        "https://www.linkedin.com/in/juantedjak";
                    }}
                  />
                }
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
