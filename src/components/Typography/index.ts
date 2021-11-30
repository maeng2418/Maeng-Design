import Paragraph from './Paragraph';
import Text from './Text';
// import Link from './Link';
import Title from './Title';
import OriginTypography from './Typography';

export type TypographyType = typeof OriginTypography & {
  Text: typeof Text;
  // Link: typeof Link;
  Title: typeof Title;
  Paragraph: typeof Paragraph;
};

const Typography = OriginTypography as TypographyType;
Typography.Text = Text;
// Typography.Link = Link;
Typography.Title = Title;
Typography.Paragraph = Paragraph;

export default Typography;
