import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import { ProductType } from './ProductType'
import { orderType } from './orderType'
import { salesTypes } from './salesTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, ProductType, orderType, salesTypes],
}
