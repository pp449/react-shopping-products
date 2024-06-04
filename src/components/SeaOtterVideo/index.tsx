import { IMAGES } from "@/assets/images";
import styled from "styled-components";

const SeaOtterVideo = () => {
  return (
    <Video muted autoPlay loop>
      <source src={IMAGES.seaOtter} type="video/mp4" />
    </Video>
  );
};

export default SeaOtterVideo;

const Video = styled.video`
  padding-top: 10%;
  border-radius: 50%;
`;
