import { Data } from './base_data'

interface Attributes {
  created_at?: string
  download_url?: string
  file_name?: string
  image_urls?: object
  metadata?: object | null
  mimetype?: object
  owner_id?: object
  owner_relationship?: object
  owner_type?: object
  size_bytes?: number
  state?: string
  upload_expires_at?: string
  upload_parameters?: object
  upload_url?: string
}

interface Relationships { }

export type MediaData = Data<'deliverable', Attributes, Relationships>
