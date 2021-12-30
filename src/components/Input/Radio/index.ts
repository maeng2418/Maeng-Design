import OriginalRadio from './Radio';
import RadioGroup from './RadioGroup';

export type RadioType = typeof OriginalRadio & {
  RadioGroup: typeof RadioGroup;
};

const Radio = OriginalRadio as RadioType;
Radio.RadioGroup = RadioGroup;

export default Radio;
