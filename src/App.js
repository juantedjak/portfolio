import { useState } from "react";
import { ConfigProvider, Row, Col, Button } from "antd";
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "./App.css";
import ModalFirstProject from "./components/modals/ModalFirstProject";
import ModalSecondProject from "./components/modals/ModalSecondProject";
import ModalThirdProject from "./components/modals/ModalThirdProject";
import ModalFourthProject from "./components/modals/ModalFourthProject";

function App() {
  // First Project Modal
  const [openFirstProject, setOpenFirstProject] = useState(false);
  const showFirstProjectModal = () => {
    setOpenFirstProject(true);
  };

  // Second Project Modal
  const [openSecondProject, setOpenSecondProject] = useState(false);
  const showSecondProjectModal = () => {
    setOpenSecondProject(true);
  };

  // Third Project Modal
  const [openThirdProject, setOpenThirdProject] = useState(false);
  const showThirdProjectModal = () => {
    setOpenThirdProject(true);
  };

  // Fourth Project Modal
  const [openFourthProject, setOpenFourthProject] = useState(false);
  const showFourthProjectModal = () => {
    setOpenFourthProject(true);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#eb2f96",
        },
        components: {
          Button: {
            colorLinkHover: "#f759ab",
            colorLinkActive: "#c41d7f",
          },
          Modal: {
            titleFontSize: "1.2vmax",
          },
        },
      }}
    >
      <div className="App">
        <div className="main">
          <Row className="row">
            <Col span={14} className="col main-left-col">
              <div className="main-title">Welcome.</div>
              <div className="main-self-description">
                <div style={{ marginBottom: "1vh" }}>
                  My name is Juan Tedja Kusmana. I'm a results-driven and
                  passionate Computer Science graduate with a bachelor's degree
                  and Summa Cum Laude honors. Proven expertise in IT support,
                  web development, and front-end development.
                </div>
                <div>
                  Currently employed as a Junior Front-end Developer at a vendor
                  company based in Kelapa Gading, Jakarta, Indonesia.
                  Experienced in designing and implementing web-based systems
                  with a strong foundation in both front-end and back-end
                  development.
                </div>
              </div>
            </Col>
            <Col span={7} className="col main-middle-col">
              <div className="main-subtitle">Projects</div>
              <div className="main-projects-container">
                <Button
                  type="link"
                  className="main-project-button"
                  onClick={showFirstProjectModal}
                >
                  <div className="main-projects">
                    Banking Terminal Management System
                  </div>
                </Button>
                <Button
                  type="link"
                  className="main-project-button"
                  onClick={showSecondProjectModal}
                >
                  <div className="main-projects">Banking Queue Form</div>
                </Button>
                <Button
                  type="link"
                  className="main-project-button"
                  onClick={showThirdProjectModal}
                >
                  <div className="main-projects">
                    Queue Management System (TV Display)
                  </div>
                </Button>
                <Button
                  type="link"
                  className="main-project-button"
                  onClick={showFourthProjectModal}
                >
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
            <Col span={3} className="col main-right-col">
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
      <ModalFirstProject
        openFirstProject={openFirstProject}
        setOpenFirstProject={setOpenFirstProject}
      />
      <ModalSecondProject
        openSecondProject={openSecondProject}
        setOpenSecondProject={setOpenSecondProject}
      />
      <ModalThirdProject
        openThirdProject={openThirdProject}
        setOpenThirdProject={setOpenThirdProject}
      />
      <ModalFourthProject
        openFourthProject={openFourthProject}
        setOpenFourthProject={setOpenFourthProject}
      />
    </ConfigProvider>
  );
}

export default App;
