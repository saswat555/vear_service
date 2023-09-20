import { Column, Entity } from "typeorm";
import { Customer as MedusaCustomer } from "@medusajs/medusa";
//add column comlexion, height and weight
@Entity()
export class Customer extends MedusaCustomer {  
  @Column({ nullable: true })
  complexion: string;
  @Column({ nullable: true })
  height: number;
  @Column({ nullable: true })
  weight: number;



}