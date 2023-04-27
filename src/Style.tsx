// import styled from "@emotion/styled/types/base";

import styled from "@emotion/styled";

export const StyledDiv = styled("div")`
  .map-background {
    position: relative;
    iframe {
      position: relative;
      top: -50px;
      width: calc(100vw + 150px);
      height: calc(100vh + 150px);
    }
    .map-overlay {
      z-index: 2;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;
