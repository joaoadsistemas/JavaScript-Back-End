import { type } from "os";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('todos')
export class TodoEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    task: string;

    
    @Column({name: 'is_done', type: 'tinyint', width: 1})
    isDone: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({name: 'update_at'})
    updateAt: string;

    @DeleteDateColumn({name: 'delete_at'})
    deletedAt: string; 


}