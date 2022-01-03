import { MaterialColumn } from '../../../shared/model/MaterialColumn'
import MaterialTable, { Query } from 'material-table'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDarkMode } from '../../../store/settings/settingsSelectors'
import { darkTheme, lightTheme } from '../../../style/styleThemeVariables'
import './TableDataStyle.css'
import ColumnSelectionModal from './ColumnSelectionModal'
import { Button } from 'semantic-ui-react'
import { apolloClient } from '../../../index'
import { PaginationGraphQL, Sort } from '../../../shared/model/PaginationGraphQL'
import { GetNarratorStories, StoryWithMeditations } from '../../pages/StoriesDetailsPage/StoriesDetails.schema'
import { ApolloQueryResult } from '@apollo/client/core/types'
import { useTranslation } from 'react-i18next'
import { Modal } from 'react-bootstrap'

export interface TableDataComponentProps {
  columns: Array<MaterialColumn<StoryWithMeditations>>
  schema: any
}

const ScrollVertical = styled.div`
  width: 100vw;
  overflow-x: scroll;
`

const itemsPerPage = 20

export default function TableDataGraphComponent({ columns = [], schema }: TableDataComponentProps) {
  const { t } = useTranslation()
  const [selectedRow, setSelectedRow] = useState<any>(null)
  const [showSelectionColumn, setShowSelectionColumn] = useState(false)
  const [selectedColumns, setSelectedColumns] = useState<Array<string>>(columns.map((col) => col.field as string))
  const isDarkMode = useSelector(useDarkMode)
  const headerStyle = isDarkMode ? darkTheme.materialTable.header : lightTheme.materialTable.header
  const rowStyle = isDarkMode ? darkTheme.materialTable.rows : lightTheme.materialTable.rows

  const dataRetrieve = async (query: Query<StoryWithMeditations>) => {
    console.log('dataRetrieve', query)
    const sort: Sort | null = query.orderBy
      ? { field: query.orderBy.field as string, order: query.orderDirection }
      : null
    const pagination: PaginationGraphQL = {
      take: query.pageSize,
      skip: query.page * query.pageSize,
      sort: sort ? [sort] : undefined,
    }
    const {
      data: {
        getMyStories: { items, total },
      },
    }: ApolloQueryResult<GetNarratorStories> = await apolloClient.query({ query: schema, variables: { pagination } })
    console.log(items, total)
    return {
      data: JSON.parse(JSON.stringify(items)),
      page: query.page,
      totalCount: total,
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
            {t('storyPage.modalVisibilityTitle')}
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
                pageSize: itemsPerPage,
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
