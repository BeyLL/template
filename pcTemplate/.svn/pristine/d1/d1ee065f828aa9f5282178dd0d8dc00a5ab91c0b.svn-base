/**
 * Copyright 2014-2018, FengMap, Ltd.
 * All rights reserved.

 * @authors  dl (duanliang@fengmap.com)
 * @date     2018/12/13 17:55
 * @describe
 */
'use strict';
import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';

@connect(({ users }) => ({ users }))
class Users extends Component {
  render() {
    const { users } = this.props;
    const { list } = users;

    const columns = [
      { dataIndex: 'id', title: 'ID' },
      { dataIndex: 'name', title: '名称' },
      { dataIndex: 'username', title: '用户' },
      { dataIndex: 'phone', title: '电话' },
      { dataIndex: 'website', title: '网站' },
    ];

    return (
      <Table dataSource={list} columns={columns} rowKey={'id'}/>
    );
  }
}

export default Users;
