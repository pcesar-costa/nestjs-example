import {Connection, ObjectType} from "typeorm";

import {RepositoryManager} from "./repository.manager";
import {AddRecord, QueryParams, UpdateRecord} from "../types";

export abstract class ServiceManager<T> {
    private repository: RepositoryManager<T>;

    protected constructor(connection: Connection, repository: ObjectType<RepositoryManager<T>>) {
        this.repository = connection.getCustomRepository(repository);
    }

    async create(addRecord: AddRecord): Promise<T> {
        return await this.repository.add(addRecord);
    }

    async update(key: string, model: UpdateRecord): Promise<T> {
        return await this.repository.update(key, model);
    }

    async read(key: string | number): Promise<T> {
        return await this.repository.findOne(key);
    }

    async query(queryParams: QueryParams): Promise<T[]> {
        return await this.repository.find(queryParams);
    }

    async delete(key: string): Promise<any> {
        return await this.repository.delete(key);
    }
}




