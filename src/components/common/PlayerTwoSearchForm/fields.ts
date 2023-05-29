import {PlayerSearchField} from "../PlayerOneSearchForm/fields";

export const playerSearchFields: Record<string, PlayerSearchField> = {
  playerName: {
    label: 'Player 2',
    type: 'text',
    validateRules: [ 'required' ],
    placeholder: 'Github username',
    defaultValue: '',
    attr: {},
  },
};
