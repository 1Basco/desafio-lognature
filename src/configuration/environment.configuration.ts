export class EnvironmentConfiguration {
  public static readonly API_BASE_URL: string =
    import.meta.env.VITE_API_BASE_URL || "";

  /**
   * Encrypt storage secret key
   * @var string
   */
  public static readonly ENCRYPT_STORAGE_SECRET_KEY: string =
    import.meta.env.VITE_ENCRYPT_STORAGE_SECRET_KEY ??
    "encrypt_storage_secret_key";

  /**
   * App locale
   * @var string
   */
  public static readonly APP_LOCALE: string =
    import.meta.env.VITE_LOCALE ?? "pt-BR";
  public static readonly APP_FALLBACK_LOCALE: string =
    import.meta.env.VITE_FALLBACK_LOCALE ?? "pt-BR";

}
