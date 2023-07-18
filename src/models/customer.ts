import { Column, Entity } from "typeorm"

import { Customer as MedusaCustomer } from "@medusajs/medusa" 

@Entity()
export class Customer extends MedusaCustomer

{
  @Column()
  complexion: string
}