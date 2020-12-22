export default [
  (v: File) => !!v || 'File is Required',
  (v: File) => (v && v.size < 2000000) || 'File size should be less than 2 MB!',
];
