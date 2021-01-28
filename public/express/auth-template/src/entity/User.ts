import { hash } from 'bcryptjs';
import {
	Entity,
	PrimaryColumn,
	Column,
	BaseEntity,
	BeforeInsert,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('users')
export class User extends BaseEntity {
	@PrimaryColumn('uuid')
	id: string;

	@Column('text', { unique: true })
	email: string;

	@Column('text')
	password: string;

	@BeforeInsert()
	async genIdAndHashPass() {
		this.id = uuidv4();
		this.password = await hash(this.password, 10);
	}
}
