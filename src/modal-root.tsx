import React from 'react'

import { ModalConsumer } from './modal-context'
import {
  ModalComponent,
  ModalContextProps,
  ModalParams,
  ModalProps,
} from './types'

interface ModalComponentProps {
  component: React.FC<ModalProps>
  props: object
}

export const ModalRoot: React.FC = () => (
  <ModalConsumer>
    {({ modals, hideModal, showModal }: ModalContextProps) => {
      return (
        Object.entries(modals) || []
      ).map(
        ([key, { component: Component, props }]: [
          string,
          ModalComponentProps,
        ]) => (
          <Component
            {...props}
            key={key}
            showModal={(component: ModalComponent, modalProps?: ModalParams) =>
              showModal(component, modalProps)
            }
            hideModal={() => hideModal(key)}
          />
        ),
      )
    }}
  </ModalConsumer>
)
