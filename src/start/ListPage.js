import React from 'react';
import List from './List';
import {listReducer} from '../shared/reducer';
import {createStore} from '../end/redux';
import { Provider } from '../end/react-redux';

// 01_01 Implement create store and use it to create a store
const store = createStore(listReducer);

// 01_02 Implement <Provider> and pass te store
const ListPage = () => (
  <Provider store={store}>
    <h2>Connected List Component</h2>
    <List />
  </Provider>
);

export default ListPage;