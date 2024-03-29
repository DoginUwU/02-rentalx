import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    avatar?: string;

    @Column()
    driver_license: string;

    @Column({ default: false })
    isAdmin: boolean;

    @CreateDateColumn()
    created_at: Date;
}

export { User };
