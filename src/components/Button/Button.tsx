import * as React from "react"
import styled from "@emotion/styled"

const white = "#ffffff"
const blue = "var(--deep-sky-blue)"

const Button = styled.button<ButtonProps>`
  border-radius: 5px;
  border: solid 3px ${blue};
  background-color: ${(props) => (props.full ? blue : white)};
  font-family: Titillium Web;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2.8px;
  color: ${(props) => (props.full ? white : blue)};
  padding: 10px 70px;
  cursor: pointer;

  :hover {
    background-color: ${(props) =>
      props.transparentHover ? "transparent" : props.full ? white : blue};
    ${(props) => props.transparentHover && `border: solid 3px ${white}`};
    color: ${(props) => (props.full ? blue : white)};
  }
`

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  full?: boolean
  transparentHover?: boolean
}

export default (props: ButtonProps) => {
  return <Button {...props}>{props.children}</Button>
}
