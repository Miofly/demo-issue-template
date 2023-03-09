export enum PageEnum {
  SINGLE,
  PAGE
}

export interface RequestProps {
  projectName: string;
  pageType: PageEnum;
  phone: string;
  hasDemo: boolean | string;
}
