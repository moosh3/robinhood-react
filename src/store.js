import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp, window.STATE_FROM_SERVER)
