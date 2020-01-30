import { WIZARD_SELECTION_TYPEKEYS } from "./typeKeys";
import { ISelected } from "../../types/selected";

export interface ISelectPagesAction {
  type: WIZARD_SELECTION_TYPEKEYS.SELECT_PAGES;
  payload: ISelected[];
}

export interface IResetPagesAction {
  type: WIZARD_SELECTION_TYPEKEYS.RESET_PAGES;
}

const selectPagesAction = (pages: ISelected[]): ISelectPagesAction => ({
  type: WIZARD_SELECTION_TYPEKEYS.SELECT_PAGES,
  payload: pages
});

const resetPagesAction = (): IResetPagesAction => ({
  type: WIZARD_SELECTION_TYPEKEYS.RESET_PAGES
});

export { selectPagesAction, resetPagesAction };
