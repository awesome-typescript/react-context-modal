import React from 'react'

export type ModalParams = object
export type ModalComponent = React.ReactNode

export interface ModalContextProps {
  modals: ModalKayProps
  showModal(component: ModalComponent, props?: ModalParams): void
  hideModal(hideModal?: number | string): void
}

export interface ModalProps {
  showModal(component: ModalComponent, props?: ModalParams): void
  hideModal(): void
}

export interface ModalMap {
  modals: ModalKayProps
}

export interface ModalKayProps {
  [key: number]: ModalValueProps
}

export interface ModalValueProps {
  component: ModalComponent
  props: ModalParams
}
