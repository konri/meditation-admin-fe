import React from 'react'

interface TranslatedTextProps {
  translation: string
}
export function TranslatedText({ translation }: TranslatedTextProps) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <span>{translation}</span>
    </div>
  )
}
