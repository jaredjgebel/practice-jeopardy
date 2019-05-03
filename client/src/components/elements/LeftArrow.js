import React from "react";
import styled from "styled-components";

const HoverLeftArrow = styled.div`
  fill: blue;
  position: relative;
  height: 0;
  width: 100%;
  padding: 0;
  padding-bottom: 100%;
`;

const LeftArrowSvg = styled.svg`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  transition: fill 0.15s;
  ${HoverLeftArrow}:hover & {
    fill: pink;
  }
`;

const LeftArrow = () => (
  <div style={{ height: "50px", width: "50px" }}>
    <HoverLeftArrow>
      <LeftArrowSvg>
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>background</title>
            <rect fill="none" id="canvas_background" y="0" x="0" />
          </g>
          <g>
            <title>Layer 1</title>
            <g stroke="null" id="svg_1">
              <path
                stroke="null"
                id="svg_2"
                d="m96.432275,24.407047l-49.720907,0l0,-21.553063c0,-1.039228 -0.550659,-1.976818 -1.394852,-2.374681c-0.847515,-0.401641 -1.817525,-0.179498 -2.463106,0.557259l-41.550316,47.258077c-0.88284,1.004115 -0.88284,2.630754 0,3.634843l41.550316,47.258077c0.432594,0.491994 1.009741,0.75308 1.597917,0.75308c0.291342,0 0.584876,-0.064031 0.865189,-0.195795c0.844193,-0.397888 1.394852,-1.335478 1.394852,-2.374706l0,-21.553063l49.720907,0c1.249215,0 2.260041,-1.150942 2.260041,-2.570501l0,-46.269025c0,-1.419534 -1.010826,-2.570501 -2.260041,-2.570501z"
              />
            </g>
          </g>
        </svg>
      </LeftArrowSvg>
    </HoverLeftArrow>
  </div>
);

export default LeftArrow;
