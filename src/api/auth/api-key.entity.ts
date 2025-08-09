import { CreateDateColumn, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "api_key", schema: "public" })
export class ApiKey {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: true, name: "is_active" })
  isActive: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @Column({ type: "datetime", name: "expires_at" })
  expiresAt: Date;
}
