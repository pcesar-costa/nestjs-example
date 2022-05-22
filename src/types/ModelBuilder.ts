export type ModelBuilder<T> = {
    new(model: any): T
};