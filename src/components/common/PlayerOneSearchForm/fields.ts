export interface PlayerSearchField {
  label: string;
  type: string;
  validateRules: string[];
  placeholder: string;
  defaultValue: string;
  attr: object;
}

export const playerSearchFields: Record<string, PlayerSearchField> = {
  playerName: {
    label: 'Player 1',
    type: 'text',
    validateRules: ['required'],
    placeholder: 'Github username',
    defaultValue: '',
    attr: {},
  },
};
