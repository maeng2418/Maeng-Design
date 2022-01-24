import Col from './Col';
import OriginalGrid from './Grid';
import Row from './Row';

export type GridType = typeof OriginalGrid & {
  Col: typeof Col;
  Row: typeof Row;
};

const Grid = OriginalGrid as GridType;
Grid.Col = Col;
Grid.Row = Row;

export default Grid;
