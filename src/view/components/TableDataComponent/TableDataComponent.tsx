import { MaterialColumn } from '../../../shared/model/MaterialColumn'
import { UserProfileDetails } from '../../pages/DashboardPage/model/UserProfileDetails'
import MaterialTable, { Query } from 'material-table'
import { parsePager, parseSort } from '../../../shared/api/utils'
import axios, { AxiosResponse } from 'axios'
import { PageableResponse } from '../../../shared/model/response/PageableResponse'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDarkMode } from '../../../store/settings/settingsSelectors'
import { darkTheme, lightTheme } from '../../../style/styleThemeVariables'
import './TableDataStyle.css'
import ColumnSelectionModal from './ColumnSelectionModal'
import { Button } from 'semantic-ui-react'

export interface TableDataComponentProps {
  columns: Array<MaterialColumn<UserProfileDetails>>
  url: string
}

const ScrollVertical = styled.div`
  width: 100vw;
  overflow-x: scroll;
`

export default function TableDataComponent({ columns = [], url }: TableDataComponentProps) {
  const [selectedRow, setSelectedRow] = useState<any>(null)
  const [showSelectionColumn, setShowSelectionColumn] = useState(false)
  const [selectedColumns, setSelectedColumns] = useState<Array<string>>(columns.map((col) => col.field as string))
  const isDarkMode = useSelector(useDarkMode)
  const headerStyle = isDarkMode ? darkTheme.materialTable.header : lightTheme.materialTable.header
  const rowStyle = isDarkMode ? darkTheme.materialTable.rows : lightTheme.materialTable.rows

  const dataRetrieve = async (query: Query<UserProfileDetails>) => {
    const sort = query.orderBy ? `&${parseSort(query.orderBy.field as string, query.orderDirection)}` : ''
    const urlWithParams = `${url}?${parsePager(query.page, query.pageSize)}${sort}`
    const {
      data: { value, itemsCount },
    } = await axios.get<any, AxiosResponse<PageableResponse<UserProfileDetails>>>(urlWithParams)
    return {
      data: value,
      page: query.page,
      totalCount: itemsCount,
    }
  }

  const showColumns = columns.map((col) => ({
    ...col,
    hidden: !selectedColumns.includes(col.field as string),
  }))
  console.log('showColumns', showColumns)
  return (
    <>
      <ColumnSelectionModal
        columns={columns}
        selectedColumns={selectedColumns}
        open={showSelectionColumn}
        close={(selectedColumns?: Array<string>) => {
          if (selectedColumns) {
            setSelectedColumns(selectedColumns)
          }
          setShowSelectionColumn(false)
        }}
      />
      <div className="d-flex flex-column">
        <div className="d=flex">
          <Button primary onClick={() => setShowSelectionColumn(true)}>
            Select columns
          </Button>
        </div>
        <div className="d=flex">
          <ScrollVertical>
            <MaterialTable
              style={{ backgroundColor: 'transparent' }}
              columns={showColumns}
              data={dataRetrieve}
              onRowClick={(evt, selectedRow) => setSelectedRow(selectedRow)}
              options={{
                pageSize: 20,
                filtering: false,
                search: false,
                showTitle: false,
                toolbar: false,
                headerStyle: headerStyle,
                rowStyle: (rowData) => {
                  // @ts-ignore
                  const backgroundColor =
                    selectedRow != null && selectedRow.tableData.id === rowData.tableData.id
                      ? rowStyle.selectedBackgroundColor
                      : rowStyle.backgroundColor
                  return {
                    ...rowStyle,
                    backgroundColor,
                  }
                },
              }}
            />
          </ScrollVertical>
        </div>
      </div>
    </>
  )
}
