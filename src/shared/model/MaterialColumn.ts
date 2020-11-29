import { Column } from 'material-table'

export interface MaterialColumn<T extends Object> extends Column<T> {
  width?: number
}
