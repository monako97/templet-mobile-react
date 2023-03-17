declare module '*.less';
declare module '*.css';
declare module '*.js';
declare module '*.ts';
declare module '*.png';
declare module './index.less' {
  const styles: Record<string, string>;

  export default styles;
}

interface Window {
  areaPaddingTop?: number;
  areaPaddingBottom?: number;
  rootInstance: {
    render(children: React.ReactChild | Iterable<React.ReactNode>): void;
    unmount(): void;
  };
}

declare module 'fastclick' {
  const FastClick: FastClickStatic;

  export = FastClick;
}

interface FastClickObject {
  lastTouchIdentifier: number;
  layer: Element;
  tapDelay: number;
  targetElement: any;
  touchBoundary: number;
  touchStartX: number;
  touchStartY: number;
  trackingClick: boolean;
  trackingClickStart: number;
  destroy(): void;
  determineEventType(targetElement: any): string;
  findControl(labelElement: any /* EventTarget | HTMLLabelElement */): any;
  focus(targetElement: any /* EventTarget | Element */): void;
  getTargetElementFromEventTarget(eventTarget: EventTarget): any;
  needsClick(target: any /* EventTarget | Element */): boolean;
  needsFocus(target: any /* EventTarget | Element */): boolean;
}

interface FastClickOptions {
  touchBoundary?: number;
  tapDelay?: number;
}

interface FastClickStatic {
  new (layer: any, options?: FastClickOptions): FastClickObject;
  attach(layer: any, options?: FastClickOptions): FastClickObject;
}

declare const FastClick: FastClickStatic;
