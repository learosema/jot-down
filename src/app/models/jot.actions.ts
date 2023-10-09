import { createActionGroup, props } from "@ngrx/store";
import { Jot } from "./jot.model";

export const JotActions = createActionGroup({
  source: 'Jots',
  events: {
    'Add Jot': props<{ jotId: string }>(),
    'Remove Jot': props<{ jotId: string }>(),
  },
});

export const JotApiActions = createActionGroup({
  source: 'Jots API',
  events: {
    'Retrieved Jot List': props<{ books: ReadonlyArray<Jot> }>(),
  },
});
