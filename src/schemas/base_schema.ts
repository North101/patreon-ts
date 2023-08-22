import { BaseType } from "../data/base_data";

type ExtractElement<A> = A extends readonly (infer T)[] ? T : A

type PropType<TObj, TProp extends keyof TObj> = ExtractElement<NonNullable<TObj[TProp]>>

type AttributeKeys<T extends BaseType<any>> = PropType<PropType<T, 'data'>, 'attributes'>

type Attributes<T extends BaseType<any>> = {
  [key in keyof AttributeKeys<T>]?: boolean
}

type RelationshipKeys<T extends BaseType<any>> = PropType<PropType<T, 'data'>, 'relationships'>

type Relationships<T extends BaseType<any>> = {
  [key in keyof RelationshipKeys<T>]?: BaseSchema<RelationshipKeys<T>[key]>
}

export interface BaseSchemaOption<T extends BaseType<any>> {
  attributes?: Attributes<T>
  relationships?: Relationships<T>
}

export abstract class BaseSchema<T extends BaseType<any>> {
  constructor(props?: BaseSchemaOption<T>) {
    this.attributes = props?.attributes
    this.relationships = props?.relationships
  }

  abstract readonly type: string
  readonly attributes?: Attributes<T>
  readonly relationships?: Relationships<T>
}
