import React from 'react'
import { Button, Image } from 'semantic-ui-react'
import { Modal } from 'react-bootstrap'

import photo from '@svg/image-regular.svg'
import { useTranslation } from 'react-i18next'

interface StoryPhotoProps {
  photoPath: string
  title: string
  onOpen: (photoPath: string, title: string) => void
}

interface PhotoModalProps {
  photoPath: string
  title: string
  onClose: () => void
}

export function PhotoModal({ title, photoPath, onClose }: PhotoModalProps) {
  const { t } = useTranslation()
  return (
    <Modal show onHide={() => onClose()} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center align-items-center">
          <img src={photoPath} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color="black" onClick={onClose}>
          {t('modal.cancel')}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export function StoryPhoto({ photoPath, title, onOpen }: StoryPhotoProps) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Button onClick={() => onOpen(photoPath, title)}>
        <img src={photo} style={{ width: 20, height: 20 }} />
      </Button>
    </div>
  )
}
