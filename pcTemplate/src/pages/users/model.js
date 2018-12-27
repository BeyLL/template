/**
 * Copyright 2014-2018, FengMap, Ltd.
 * All rights reserved.

 * @authors  dl (duanliang@fengmap.com)
 * @date     2018/12/13 18:08
 * @describe
 */
'use strict';
import ReconnectingWebSocket from 'reconnectingwebsocket';
import * as usersService from './services';

export default {
  namespace: 'users',
  state: {
    list: [],
  },
  reducers: {
    save(state, { payload: { list } }) {
      return { ...state, list };
    },
  },
  effects: {
    * fetch({ payload: { page } }, { call, put }) {
      const { list } = yield call(usersService.fetch, { page });
      yield put({ type: 'save', payload: list });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });

          //websocket例子
          const socket = new ReconnectingWebSocket('ws://121.40.165.18:8800', null, { reconnectInterval: 3000 });

          socket.onopen = (data) => {
            socket.send('hello world');
          };

          socket.onmessage = (data) => {
            console.log('onmessage', data);
          };
        }
      });
    },
  },
};
