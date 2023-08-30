import axios from 'axios'
import { APP_CONFIG } from '../../../../../config'

export interface NarratorResponseDTO {
  name: string
  photo: string
  description: string
  title: string
  instagram: string
  facebook: string
  web: string
  linkedin: string
}

export function getNarrators(lang: string): Promise<Array<NarratorResponseDTO>> {
  return axios
    .get<Array<NarratorResponseDTO>>(`${APP_CONFIG.API}/lectors?language=${lang.toUpperCase()}`)
    .then((res) => res.data)
}
