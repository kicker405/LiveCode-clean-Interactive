export interface IElementPosition {
  top: number;
  left: number;
  height: number;
}

export interface IGuideBeginningHook {
  isVisible: boolean;
  startGuide: () => void;
  finishGuide: () => void;
}