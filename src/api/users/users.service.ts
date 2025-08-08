import {
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DbUtilsService } from "src/common/services/db-utils.service";
import { DeleteStatus } from "src/common/types";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>,
		private dbUtilsService: DbUtilsService,
	) {}

	/**
	 * Retrieves a user by its UUID from the database
	 *
	 * @param id - The unique id of the user
	 * @returns Promise that resolves to the found User entity
	 * @throws {NotFoundException} - If no user is found with the given UUID
	 */
	async findById(id: string): Promise<User> {
		return null;
	}

	/**
	 * Retrieves a user by its email address from the database
	 *
	 * @param email - The unique email of the user
	 * @param throwsError - If we want to throw an error if a user wasn't found
	 * @returns Promise that resolves to the found User entity or a null value
	 * @throws {NotFoundException} - If a user with the given email doesn't exist (optional)
	 */
	async findByEmail(email: string, throwsError = false): Promise<User | null> {
		return null;
	}

	/**
	 * Creates a new user and saves it to the database
	 *
	 * @param payload - The required information to create a user
	 * @returns Promise that resolves to the created User entity
	 */
	async createUser(payload: CreateUserDto): Promise<User> {
		return null;
	}

	/**
	 * Updates a specific user with the new given attributes
	 *
	 * @param id - The unique UUID of the user
	 * @param attrs - Attributes of the User entity to update
	 * @returns Promise that resolves to the updated User entity
	 */
	async updateUser(id: string, attrs: UpdateUserDto): Promise<User> {
		return null;
	}

	/**
	 * Deletes a user by its UUID from the database
	 *
	 * @param id - The unique UUID of the user
	 * @returns Promise that resolves to the DeleteStatus type
	 */
	async deleteUser(id: string): Promise<DeleteStatus> {
		return null;
	}
}
