import {
    PrimaryColumn,
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from "typeorm";


@Entity("Users")
export class User {
    @PrimaryColumn({
        nullable: false
    })
        userId: string;

    @Column({
        nullable: true
    })
        firstName: string;

    @Column({
        nullable: true
    })
        lastName: string;

    @Column({
        nullable: false,
        unique: true
    })
        email: string;

    @Column({
        nullable: true
    })
        country: string;

    @Column({
        nullable: true
    })
        address: string;

    @CreateDateColumn({
        nullable: false
    })
        createdAt: Date;

    @UpdateDateColumn({
        nullable: false
    })
        updatedAt: Date;

    @DeleteDateColumn({
        nullable: true
    })
        deletedAt: Date;
}
