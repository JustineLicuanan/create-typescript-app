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

	@Column('text')
	name: string;

	@BeforeInsert()
	async genId() {
		this.id = uuidv4();
	}
}
