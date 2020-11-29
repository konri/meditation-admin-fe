export function parsePager(page: number, size: number) {
  return `page=${page}&size=${size}`
}

export function parseSort(field: string, direction: string) {
  return `sort=${field},${direction}`
}
