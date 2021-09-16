import {themePicker} from '../themes';
import {useAppSelector} from './storeHooks';

export const useTheme = () => {
  const isDarkTheme = useAppSelector(state => state.appSettingsState.darkTheme);
  const theme = themePicker(isDarkTheme);
  return [theme];
};
