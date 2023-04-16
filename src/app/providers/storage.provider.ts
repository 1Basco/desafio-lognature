import { EncryptStorage } from "encrypt-storage";
import { EnvironmentConfiguration } from "../../configuration/environment.configuration";

export class StorageProvider {
  private static _instance: StorageProvider;

  private encryptStorage: EncryptStorage = new EncryptStorage(
    EnvironmentConfiguration.ENCRYPT_STORAGE_SECRET_KEY
  );

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public setItem = async (key: string, item: any): Promise<any> =>
    this.encryptStorage.setItem(key, item);

  public clear = async (): Promise<any> => this.encryptStorage.clear();

  public getItem = async (key: string): Promise<any> =>
    await this.encryptStorage.getItem(key);

  public removeItem = async (key: string): Promise<any> =>
    this.encryptStorage.removeItem(key);

  public multiRemove = (keys: Array<string>): void =>
    this.encryptStorage.removeMultipleItems(keys);
}
