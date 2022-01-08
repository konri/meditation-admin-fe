import axios, { AxiosResponse } from 'axios'

export interface AudioDetails {
  duration?: number | undefined
  bitsPerSample?: number | undefined
  codec?: string | undefined
  numberOfChannels?: number | undefined
  bitrate?: number | undefined
}

export interface UploadSingleFileResponse {
  fileLocation: string
  mimetype: string
  details: AudioDetails | null
}

export function saveFile(file: any): Promise<UploadSingleFileResponse> {
  const config = { headers: { 'Content-Type': 'multipart/form-data' } }
  let fd = new FormData()
  fd.append('file', file)
  //
  // return axios.post(`/upload/file`, fd, config).then((res: AxiosResponse<UploadSingleFileResponse>) => {
  //   return res.data
  // })
  return Promise.resolve({
    fileLocation: 'https://s3.eu-central-1.amazonaws.com/quietly-beta/1641489707173-uJ_haRCerbeWS4wQ-woman.jpeg',
    details: {
      duration: 250,
    },
    mimetype: 'sss',
  })
}
