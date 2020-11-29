import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import axios, { AxiosResponse } from 'axios'
import { Download } from '../settings/endpoints'
import { toast } from 'react-toastify'

async function downloadFile(fileName: string, id: string) {
  const FileDownload = require('js-file-download')

  try {
    toast.info(`You are downloading a file: ${fileName}`)
    const response = await axios.get<FormData, AxiosResponse<any>>(`${Download.file}${id}`, { responseType: 'blob' })
    const fileNameWithExtension = `${fileName}.${getExtension(response.data.type)}`
    FileDownload(response.data, fileNameWithExtension, response.data.type)
  } catch (e) {
    toast.error('Error occurred while downloading a file..')
  }
}

function getExtension(type: string) {
  switch (type) {
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'docx'
    case 'application/msword':
      return 'doc'
    case 'application/pdf':
      return 'pdf'
    default:
      console.error('Unsupported format')
      return '.unsupported'
  }
}

export interface DownloadFileComponentProps {
  id: string
  fileName: string
}

export default function DownloadFileComponent({ fileName, id }: DownloadFileComponentProps) {
  if (id) {
    return <Button circular primary icon="cloud download" onClick={() => downloadFile(fileName, id)} />
  }
  return <span>-</span>
}
