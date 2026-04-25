import { type SchemaTypeDefinition } from 'sanity'
import { lawyer } from './lawyer'
import { expertise } from './expertise'
import { globalOffice } from './globalOffice'
import { faq } from './faq'
import { legalProcess } from './legalProcess'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    lawyer,
    expertise,
    globalOffice,
    faq,
    legalProcess,
  ],
}
