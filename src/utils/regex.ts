/** color?.replace(NOT_STRING_REGEX, '')}${SUB_COLOR_IDX} */
const NOT_STRING_REGEX = /[^a-zA-Z]/g;

const NOT_NUM_REGEX = /[^0-9]/;

/** String.value.replace(NOT_NUM_REGEX, '').replace(PHONE_NUMBER_REGEX, `$1-$2-$3`); */
const PHONE_NUMBER_REGEX = /^(\d{2,3})(\d{3,4})(\d{4})$/;

const REGEX = {
  NOT_STRING_REGEX,
  NOT_NUM_REGEX,
  PHONE_NUMBER_REGEX,
};

export default REGEX;
