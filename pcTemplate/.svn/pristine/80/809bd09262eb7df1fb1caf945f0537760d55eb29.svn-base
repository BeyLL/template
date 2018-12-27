/**
 * Copyright 2014-2018, FengMap, Ltd.
 * All rights reserved.

 * @authors  dl (duanliang@fengmap.com)
 * @date     2018/12/17 12:19
 * @describe
 */
'use strict';
import React, { Component } from 'react';
import { Layout } from 'antd';
import Sidebar from 'components/Sidebar';

const { Content } = Layout;

export default class BasicLayer extends Component {
  render() {
    const { children } = this.props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar/>
        <Layout>
          <Content style={{ margin: '5px' }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
