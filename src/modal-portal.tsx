import { Component, ReactPortal } from 'react'
import { createPortal } from 'react-dom'

export const modalRoot = document.querySelector('#modal-root')

export class ModalPortal extends Component {
  private element = document.createElement('div')

  componentDidMount(): void {
    modalRoot?.append(this.element)
  }

  componentWillUnmount(): void {
    this.element.remove()
  }

  render(): ReactPortal {
    return createPortal(this.props.children, this.element)
  }
}
