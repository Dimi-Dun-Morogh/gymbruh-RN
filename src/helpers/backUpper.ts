import {PermissionsAndroid, Platform} from 'react-native';
import {Dirs, FileSystem} from 'react-native-file-access';
var Buffer = require('buffer/').Buffer;
import DocumentPicker from 'react-native-document-picker';
import {BackUpData} from '../types';
import {store} from '../redux/store';
import {HistoryActionTypes} from '../redux/history/history.types';
import {exerciseActionTypes} from '../redux/exercises/exercise.types';
import {appSettingsActionTypes} from '../redux/appSettings/appSettings.types';
import {routineActionTypes} from '../redux/routines/routine.types';
import {setLanguage} from '../redux/appSettings/appSettings.actions';

enum ANDROID_PERMISSIONS {
  WRITE_EXTERNAL_STORAGE = 'WRITE_EXTERNAL_STORAGE',
  READ_EXTERNAL_STORAGE = 'READ_EXTERNAL_STORAGE',
}

class BackUpper {
  static ANDROID_PERMISSIONS = ANDROID_PERMISSIONS;
  static fileName = 'backUp.gymbruh';
  static backUpFilePath = `${Dirs.DocumentDir}/${BackUpper.fileName}`;
  static infoText = {
    BACKUP_CREATE_SUCCESS:
      'data backup created successfully, check your downloads folder',
    DATA_RESTORE_SUCCESS: 'user data restored',
  };

  static checkPermission = async (permission: string) => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS[permission],
    );
    return PermissionsAndroid.RESULTS.GRANTED === granted;
  };

  static createBase64 = (data: BackUpData) => {
    const base64Object = Buffer.from(JSON.stringify(data)).toString('base64');
    return base64Object;
  };

  static getMyAppData = (): BackUpData => {
    const {exercisesState, historyState, appSettingsState, routinesState} =
      store.getState();
    const data = {
      settings: appSettingsState,
      exercises: exercisesState,
      routines: routinesState,
      history: historyState,
    };
    return data;
  };

  getInfoText = () => {
    return BackUpper.infoText;
  };

  backUpToDownloads = async () => {
    const data = BackUpper.getMyAppData();
    const filePath = BackUpper.backUpFilePath;
    const base64Object = BackUpper.createBase64(data);

    if (Platform.OS === 'android') {
      const permissionGranted = await BackUpper.checkPermission(
        BackUpper.ANDROID_PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );

      if (permissionGranted) {
        await FileSystem.writeFile(filePath, base64Object, 'base64');
        if (!FileSystem.exists(filePath)) {
          return;
        } // check to see if our filePath was created

        await FileSystem.cpExternal(filePath, BackUpper.fileName, 'downloads'); // copies our file to the downloads folder/directory
      }
      return true;
    }
    //! IOS TO DO
  };

  static readMyFile = async (Path: string): Promise<BackUpData | null> => {
    try {
      const data = await FileSystem.readFile(Path, 'base64');
      let parsed = Buffer.from(data, 'base64').toString();
      parsed = JSON.parse(parsed);
      return parsed;
    } catch (error) {
      return null;
    }
  };

  pickFile = async () => {
    try {
      const permissionGranted = await BackUpper.checkPermission(
        BackUpper.ANDROID_PERMISSIONS.READ_EXTERNAL_STORAGE,
      );

      if (!permissionGranted) {
        return;
      }

      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      const file = BackUpper.readMyFile(res[0].uri);
      return file;
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };
  setBackUp = (data: BackUpData) => {
    store.dispatch({
      type: HistoryActionTypes.BACKUP_HISTORY,
      payload: data.history,
    });

    store.dispatch({
      type: exerciseActionTypes.BACKUP_EXERCISE,
      payload: data.exercises,
    });

    store.dispatch({
      type: appSettingsActionTypes.BACKUP_SETTINGS,
      payload: data.settings,
    });

    store.dispatch({
      type: routineActionTypes.BACKUP_ROUTINE,
      payload: data.routines,
    });
    store.dispatch(setLanguage(data.settings.currentLanguage));
  };
}

export default new BackUpper();
