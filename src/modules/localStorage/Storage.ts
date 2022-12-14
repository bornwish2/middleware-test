import { IStorage } from "./Models/Storage.type";

export abstract class Storage<T extends string, Y> {
    private readonly storage: IStorage;

    public constructor(getStorage = (): IStorage => window.localStorage) {
        this.storage = getStorage();
    }

    protected get(key: T): Y[] | any {
        if (this.hasValue(key)) {
            return JSON.parse(this.storage.getItem(key) ?? '[]');
        }
    }

    protected set(key: T, value: Y[]): void {
        this.storage.setItem(key, JSON.stringify(value));
    }

    protected clearItem(key: T): void {
        this.storage.removeItem(key);
    }

    protected clearItems(keys: T[]): void {
        keys.forEach((key) => this.clearItem(key));
    }

    protected hasValue(key: T): boolean {
        return this.storage.getItem(key) ? true : false;
    }
}