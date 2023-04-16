export class ObjectHelper {
  public static tryParseJSONObject(jsonString: any): any {
    try {
      let object = JSON.parse(jsonString);

      if (object && typeof object === "object") {
        return object;
      }
    } catch (e) {}

    return jsonString;
  }
}
