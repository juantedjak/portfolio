import { Modal, Button, Image, Carousel } from "antd";
import firstProjectImage from "../../assets/images/second-project-1.png";
import secondProjectImage from "../../assets/images/second-project-2.png";

const ModalSecondProject = ({ openSecondProject, setOpenSecondProject }) => {
  const handleCancel = () => {
    setOpenSecondProject(false);
  };
  return (
    <Modal
      title="Banking Queue Form"
      forceRender
      open={openSecondProject}
      centered={true}
      onCancel={handleCancel}
      footer={[
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
        A user-friendly web application created to streamline the banking
        service process. Bank customers can conveniently fill in necessary forms
        before queuing, enhancing the overall efficiency of the service. In this
        project, I played a key role in developing the front-end independently.
        Data retrieval was facilitated through integration with an existing API.
      </div>
    </Modal>
  );
};

export default ModalSecondProject;
