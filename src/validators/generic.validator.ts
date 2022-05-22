import {validate} from "class-validator"
import {plainToInstance} from "class-transformer"
import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common"

@Injectable()
export class GenericValidator<T> implements PipeTransform<T> {
    async transform(value: T, metadata: ArgumentMetadata): Promise<T> {
        const instance = plainToInstance(metadata.metatype, value); // new AddUser(obj)
        const errors = await validate(instance, {skipMissingProperties: false, whitelist: true})
        if (errors.length > 0) {
            const message = Object.values(errors[0].constraints).join(". ").trim()
            throw new BadRequestException(message)
        }
        return instance as T; // new User
    }
}
