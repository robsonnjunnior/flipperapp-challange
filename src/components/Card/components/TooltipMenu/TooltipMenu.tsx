import { v4 as uuid } from 'uuid';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import {
  ITooltipMenu,
  ITooltipMenuOptions,
} from 'models/tooltipMenu/tooltipMenu.model';
import { ReactComponent as MdMoreVert } from 'assets/img/more_vert.svg';

const TooltipMenu = ({ options }: ITooltipMenu) => {
  return (
    <Menu menuButton={<MdMoreVert />}>
      {options.map((option: ITooltipMenuOptions) => (
        <MenuItem key={uuid()} onClick={option.action}>
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default TooltipMenu;
