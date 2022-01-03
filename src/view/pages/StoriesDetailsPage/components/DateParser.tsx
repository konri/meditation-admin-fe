import React from 'react'

export function DateParser(date: string, time: boolean = false) {
  const parseDate = new Date(date)
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {parseDate.getFullYear()}-{('0' + (parseDate.getMonth() + 1)).slice(-2)}-{('0' + parseDate.getDate()).slice(-2)}
      {time ? ` ${parseDate.getHours()}:${parseDate.getMinutes()}` : ''}
    </div>
  )
}
