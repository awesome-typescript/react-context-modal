import { Component, ReactPortal } from 'react'
import { createPortal } from 'react-dom'

// Use a ternary operator to make sure that the document object is defined
const modalRoot =
  typeof document !== `undefined` ? document.querySelector('#modal-root') : null

export class ModalPortal extends Component {
  private element =
    typeof document !== `undefined` ? document.createElement('div') : null

  componentDidMount(): void {
    if (this.element) {
      modalRoot?.append(this.element)
    }
  }

  componentWillUnmount(): void {
    if (this.element) {
      this.element.remove()
    }
  }

  render(): ReactPortal | null {
    if (this.element) {
      return createPortal(this.props.children, this.element)
    }
    return null
  }
}
