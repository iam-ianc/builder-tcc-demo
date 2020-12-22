export const nameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters',
];

export const emailRules = [
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];

export const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => (v && v.length >= 8) || 'Min 8 characters',
};
