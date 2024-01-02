export interface UIState {
  checking: boolean;
  step: number;
  email: string;
  code: string;
}

export interface RouteUI {
  path: string;
  title: string;
  icon: any;
}
