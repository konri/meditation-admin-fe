import React from 'react'
import yes from '@svg/yes.svg'
import no from '@svg/no.svg'

interface CheckerProps {
  value: boolean
}
export function Checker({ value }: CheckerProps) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {value ? <img src={yes} style={{ width: 20, height: 20 }} /> : <img src={no} style={{ width: 20, height: 20 }} />}
    </div>
  )
}
