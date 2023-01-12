import styled from 'styled-components'

export const Switch = styled.div`
  position: relative;
  width: 4rem;

  margin: 4px auto;
`

export const SwitchButton = styled.button`
  .leftAlignIcon {
    right: 0;
    left: initial;
  }

  width: 2rem;
  height: 2rem;
  background: white url(${(props) => props.theme.switchIconPath}) no-repeat
    center;
  border: 0;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  right: 0;
  z-index: 1;
  transform: translateY(-50%);
`
export const Track = styled.span`
  display: block;
  width: 64px;
  height: 24px;
  background: ${(props) => props.theme.surfaceColor};
  border: 1px solid ${(props) => props.theme.strokeColor};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 9999px;
`
