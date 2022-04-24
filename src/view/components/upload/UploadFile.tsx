import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { AudioDetails, saveFile } from '@components/upload/UploadFile.service'
import { useTranslation } from 'react-i18next'
import { Dimmer, Loader } from 'semantic-ui-react'

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return '#00e676'
  }
  if (props.isDragReject) {
    return '#ff1744'
  }
  if (props.isDragActive) {
    return '#2196f3'
  }
  return '#eeeeee'
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`

const SelectedFiles = styled.div`
  flex: 1;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
`

const PlaceholderImage = styled.img`
  margin-left: 20px;
  border-radius: 20px;
  height: 100px;
  width: 80px;
`

const Error = styled.p`
  color: red;
  font-weight: bold;
`
type acceptFile = 'audio/*' | 'video/*' | 'image/*'

interface SelectedFile {
  fileName: string
  location: string
  type: string
  details?: AudioDetails | null
}
interface UploadFileProps {
  accept: acceptFile
  onSave: (path: string, details?: AudioDetails | null) => void
}
export function UploadFile({ accept, onSave }: UploadFileProps) {
  const { t } = useTranslation()

  const [selectedFile, setSelectedFile] = useState<SelectedFile | null>()
  const [loading, setLoading] = useState(false)
  const { acceptedFiles, fileRejections, getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } =
    useDropzone({ accept, maxFiles: 1 })

  useEffect(() => {
    if (acceptedFiles && acceptedFiles.length === 1) {
      const file = acceptedFiles[0]
      setLoading(true)
      saveFile(file).then((res) => {
        onSave(res.fileLocation, res.details)
        setLoading(false)
        setSelectedFile({
          fileName: file.name,
          location: res.fileLocation,
          type: file.type,
          details: res.details,
        })
      })
    }
  }, [acceptedFiles])

  return (
    <div className="d-flex flex-column container">
      <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <p>{t('upload.info')}</p>
      </Container>
      {loading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
      {selectedFile && (
        <SelectedFiles>
          {accept === 'image/*' && <PlaceholderImage src={selectedFile.location} />}
          <p>
            <b>{t('upload.name')} </b>
            {selectedFile.fileName}
          </p>
          {selectedFile.details && (
            <p>
              <b>{t('upload.duration')} </b>
              {selectedFile.details.duration}s
            </p>
          )}
        </SelectedFiles>
      )}
      {fileRejections && fileRejections.length > 0 && <Error>Wrong file!</Error>}
    </div>
  )
}
