import { combineReducers } from 'redux';
import {
  authReducer,
  spawnConstructReducer
}
  from './reducers/main.reducers';
import { bomReducer } from './reducers/BOM/bom.reducer';
import { sarReducer } from './reducers/SAR/sar.reducer';
import { prdReducer } from './reducers/PRD/prd.reducer';
import { dreReducer } from './reducers/DRE/dre.reducer';
import { umaReducer } from './reducers/UMA/uma.reducer';
import { fileReducer } from './reducers/FILE/file.reducer';
import { catReducer } from './reducers/CAT/cat.reducer';

export default combineReducers({
  authReducer,
  bomReducer,
  sarReducer,
  prdReducer,
  dreReducer,
  umaReducer,
  fileReducer,
  catReducer,
  spawnConstructReducer,
});
