import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({type:'bigint',name:'user_id'})
    id: number;

    @Column({nullable:false,default:''})
    username: string;

    @Column({nullable:false,default:''})
    password: string;

    @Column({name:'email',nullable:false,default:''})
    email: string;
    
}