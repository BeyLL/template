/**
 * Copyright 2014-2018, FengMap, Ltd.
 * All rights reserved.

 * @authors  dl (duanliang@fengmap.com)
 * @date     2018/12/13 18:27
 * @describe
 */
'use strict';
import request from 'utils/request';

export function fetch({ page = 1 }) {
  return request({
    url: `/api/users?_page=${page}&_limit=5`,
    method: 'get',
  });
}
