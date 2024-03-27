import { DataType } from "../data/base_data";

type ExtractElement<A> = A extends readonly (infer T)[] ? T : A

type PropType<TObj, TProp extends keyof TObj> = ExtractElement<NonNullable<TObj[TProp]>>

type AttributeKeys<T extends DataType> = PropType<T, 'attributes'>

type Attributes<T extends DataType> = {
  [key in keyof AttributeKeys<T>]?: boolean
}

type RelationshipKeys<T extends DataType> = PropType<T, 'relationships'>

type Relationships<T extends DataType> = {
  [key in keyof RelationshipKeys<T>]?: BaseSchema<RelationshipKeys<T>[key]>
}

export interface BaseSchemaOption<T extends DataType> {
  attributes?: Attributes<T>
  relationships?: Relationships<T>
}

export abstract class BaseSchema<T extends DataType> {
  constructor(props?: BaseSchemaOption<T>) {
    this.attributes = props?.attributes
    this.relationships = props?.relationships
  }

  abstract readonly type: string
  readonly attributes?: Attributes<T>
  readonly relationships?: Relationships<T>
}
