import React, {
  Component,
  createContext,
  useContext,
  ComponentClass,
} from 'react'

import { omit } from './helpers'
import type { ModalContextProps, ModalMap } from './types'

const ModalContext = createContext<ModalContextProps>({
  modals: {},
  showModal: () => {},
  hideModal: () => {},
})

export const useModalContext = (): ModalContextProps => {
  return useContext(ModalContext)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const withModalContext = (BaseComponent: ComponentClass<any>) => {
  return class EnhancedComponent extends Component {
    render() {
      const { props } = this

      return (
        <ModalContext.Consumer>
          {({ showModal, hideModal }) => (
            <BaseComponent
              {...props}
              showModal={showModal}
              hideModal={hideModal}
            />
          )}
        </ModalContext.Consumer>
      )
    }
  }
}

export class ModalProvider extends Component {
  showModal = (component: Component, props = {}): void => {
    const modalId = new Date().getTime()

    this.setState((prevState: ModalMap) => {
      return {
        ...prevState,
        modals: {
          ...prevState.modals,
          [modalId]: {
            component,
            props,
          },
        },
      }
    })
  }

  hideModal = (modalId: number): void => {
    this.setState((prevState: ModalMap) => {
      return {
        ...prevState,
        modals: omit(prevState.modals, modalId),
      }
    })
  }

  state: ModalContextProps = {
    modals: {},
    showModal: this.showModal,
    hideModal: this.hideModal,
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    )
  }
}

export const ModalConsumer = ModalContext.Consumer
