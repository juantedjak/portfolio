import { useState } from "react";
import { Modal, Button, Image, Carousel, Popover } from "antd";
import { InfoOutlined } from "@ant-design/icons";
import firstProjectImage from "../../assets/images/fourth-project-1.jpg";
import secondProjectImage from "../../assets/images/fourth-project-2.jpg";

const ModalFourthProject = ({ openFourthProject, setOpenFourthProject }) => {
  const [openPopover, setOpenPopover] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpenPopover(newOpen);
  };
  const handleCancel = () => {
    setOpenFourthProject(false);
  };
  return (
    <Modal
      title="Banking Terminal Management System"
      forceRender
      open={openFourthProject}
      centered={true}
      onCancel={handleCancel}
      footer={[
        <Popover
          key="note"
          content={
            <>
              <div>
                Certain content in the project images has been intentionally
                blurred or partially redacted due to confidentiality agreements
                within my employment contracts.
              </div>
              <div>
                While I strive to showcase the essence of each project, the
                obscured content ensures compliance with professional standards
                and confidentiality obligations.
              </div>
            </>
          }
          title="Note for Portfolio Readers"
          placement="bottom"
          trigger="click"
          open={openPopover}
          onOpenChange={handleOpenChange}
        >
          <Button icon={<InfoOutlined />} shape="circle" />
        </Popover>,
        <Button
          key="close"
          htmlType="button"
          type="primary"
          onClick={handleCancel}
        >
          Close
        </Button>,
      ]}
      width={"40vw"}
    >
      <Carousel>
        <Image src={firstProjectImage} />
        <Image src={secondProjectImage} />
      </Carousel>
      <div className="modal-summary-title">Summary:</div>
      <div className="modal-summary-content">
        A robust web application designed for the efficient management of forms
        to be filled out by bank customers using the Banking Queue Form
        application. I took charge of both the front-end and back-end
        development, ensuring a cohesive and integrated system. PostgreSQL was
        utilized as the database management system for data storage.
      </div>
    </Modal>
  );
};

export default ModalFourthProject;
