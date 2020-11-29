import React, { FormEvent, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Button, Checkbox, List } from 'semantic-ui-react'
import { MaterialColumn } from '../../../shared/model/MaterialColumn'
import { UserProfileDetails } from '../../pages/DashboardPage/model/UserProfileDetails'

export interface ColumnSelectionModal {
  open: boolean
  columns: Array<MaterialColumn<UserProfileDetails>>
  selectedColumns: Array<string>
  close: (selectedColumns?: Array<string>) => any
}

function createMapFromSelectedColumns(
  columns: Array<MaterialColumn<UserProfileDetails>>,
  selectedColumns: Array<string>
): Map<string, boolean> {
  return new Map(columns.map((i) => [i.field as string, selectedColumns.includes(i.field as string)]))
}

export default function ColumnSelectionModal({ open, close, columns, selectedColumns }: ColumnSelectionModal) {
  const [listSelected, setListSelected] = useState<Map<string, boolean>>(
    createMapFromSelectedColumns(columns, selectedColumns)
  )

  useEffect(() => {
    setListSelected(createMapFromSelectedColumns(columns, selectedColumns))
  }, [selectedColumns])

  const toggleOnChange = (itemId: string) => {
    const actualState = listSelected.get(itemId)
    setListSelected(new Map(listSelected.set(itemId, !actualState)))
  }

  const togglesList = columns.map((col) => (
    <List.Item key={col.field}>
      <div className="d-flex flex-row">
        <Checkbox
          toggle
          checked={listSelected.get(col.field as string)}
          onChange={() => toggleOnChange(col.field as string)}
        />
        <List.Content className="ml-2">
          <List.Header as="a">{col.title}</List.Header>
        </List.Content>
      </div>
    </List.Item>
  ))

  const closeModal = (apply = false) => {
    if (apply) {
      const results = Array.from(listSelected.keys()).filter((key) => listSelected.get(key))
      close(results)
    }
    setListSelected(createMapFromSelectedColumns(columns, selectedColumns))
    close()
  }
  return (
    <Modal show={open} onHide={() => closeModal()} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Select column visibility</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <List divided verticalAlign="middle">
          {togglesList}
        </List>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => closeModal()}>Close</Button>
        <Button positive onClick={() => closeModal(true)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
