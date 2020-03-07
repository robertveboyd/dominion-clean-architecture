import isFlipReducer from "./isFlip";
import isRandomizingReducer from "./isRandomizing";
import hasInitialDeckReducer from "./hasInitialDeck";
import showSidebarReducer from "./showSidebar";

export const reducers = Object.freeze({
  showSidebar: showSidebarReducer,
  isFlip: isFlipReducer,
  isRandomizing: isRandomizingReducer,
  hasInitialDeck: hasInitialDeckReducer
});
