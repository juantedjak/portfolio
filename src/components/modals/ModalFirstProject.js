import { useState } from "react";
import { Modal, Button, Image, Popover } from "antd";
import { InfoOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import projectImage from "../../assets/images/first-project.jpg";

const ModalFirstProject = ({ openFirstProject, setOpenFirstProject }) => {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  const [openPopover, setOpenPopover] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpenPopover(newOpen);
  };

  const handleCancel = () => {
    setOpenFirstProject(false);
  };

  return (
    <Modal
      title="Banking Terminal Management System"
      forceRender
      open={openFirstProject}
      centered={true}
      onCancel={handleCancel}
      width={isPortrait ? "80vw" : "40vw"}
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
    >
      <Image src={projectImage} />
      <div className="modal-summary-title">Summary:</div>
      <div className="modal-summary-content">
        A comprehensive web application designed for the efficient management
        and monitoring of various machines across bank branches. This project
        involved collaboration in the development of the front-end, working
        alongside a team member. Data integration was achieved by fetching
        information from an existing API.
      </div>
    </Modal>
  );
};

export default ModalFirstProject;
