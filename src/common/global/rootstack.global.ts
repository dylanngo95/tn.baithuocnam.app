export class RootStackGlobal {

  public static navigation: any;

  public static set(navigation: any) {
    this.navigation = navigation;
  }

  public static get() {
    return this.navigation;
  }

}
