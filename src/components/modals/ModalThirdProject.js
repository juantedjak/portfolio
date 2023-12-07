import { Modal, Button } from "antd";
import { useMediaQuery } from "react-responsive";
import projectVideo from "../../assets/videos/third-project.mp4";

const ModalThirdProject = ({ openThirdProject, setOpenThirdProject }) => {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  const handleCancel = () => {
    setOpenThirdProject(false);
  };

  return (
    <Modal
      title="Banking Queue Form"
      forceRender
      open={openThirdProject}
      centered={true}
      onCancel={handleCancel}
      width={isPortrait ? "80vw" : "40vw"}
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
    >
      <video width={"100%"} controls>
        <source src={projectVideo} type="video/mp4" />
      </video>
      <div className="modal-summary-title">Summary:</div>
      <div className="modal-summary-content">
        A dynamic television display system that provides real-time queue
        information for bank customers. Additionally, it includes an automated
        audio player feature to announce queue numbers. I spearheaded the
        development of the front-end, implementing a WebSocket connection to
        ensure timely updates. This project involved collaboration with a client
        app for seamless queue information dissemination.
      </div>
    </Modal>
  );
};

export default ModalThirdProject;
