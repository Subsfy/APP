import { IHomeProps } from "../dtos/IHomeDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined;
      Home: IHomeProps;
    }
  }
}