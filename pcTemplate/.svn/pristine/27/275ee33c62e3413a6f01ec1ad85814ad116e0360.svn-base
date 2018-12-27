/**
 * Copyright 2014-2018, FengMap, Ltd.
 * All rights reserved.

 * @authors  dl (duanliang@fengmap.com)
 * @date     2018/12/13 18:02
 * @describe
 */
'use strict';
import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import withRouter from 'umi/withRouter';
import NProgress from 'nprogress';
import BasicLayer from './BasicLayer';
import Loader from 'components/Loader';

import styles from './app.less';

const Fragment = React.Fragment;

let lastHref;

const App = (props) => {
  const { children, location, loading } = props;
  const { pathname } = location;
  const { global } = loading;

  const { href } = window.location;

  //顶部进度条
  if (lastHref !== href) {
    NProgress.start();
    if (!global) {
      NProgress.done();
      lastHref = href;
    }
  }

  //判断是否是登陆
  if (pathname === '/login') {
    return (
      <Fragment>
        <Loader fullScreen spinning={false}/>
        {children}
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Loader fullScreen spinning={false}/>
      <BasicLayer>
        {children}
      </BasicLayer>
    </Fragment>
  );
};


export default withRouter(connect(({ loading }) => ({ loading }))(App));
