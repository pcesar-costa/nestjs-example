import {Repository} from "typeorm";
import {AddRecord, ModelBuilder, UpdateRecord} from "../types";

export abstract class RepositoryManager<T> extends Repository<T> {
    protected constructor(private model: ModelBuilder<T>) {
        super();
    }

    async add(addRecord: AddRecord): Promise<T> {
        // @ts-ignore
        return await super.save(addRecord);
    }

    // @ts-ignore
    async update(key: string, updateRecord: UpdateRecord): Promise<T> {
        const dbRecord = await this.findOne(key);
        if (!dbRecord)
            throw new Error(`Could not find ${key}`);

        const update = new this.model({...dbRecord, ...updateRecord});
        const updateResult = await super.update(key, update);
        if (!updateResult.affected)
            throw new Error(`Could not update ${key}`);
        return update;
    }

    async delete(key: string): Promise<any> {
        const del = await super.delete(key);
        if (!del.affected)
            throw new Error(`Could not delete ${key}`)
        return {deleted: true, key};
    }
}
