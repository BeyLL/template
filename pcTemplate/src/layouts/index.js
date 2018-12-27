/**
 * Copyright 2014-2018, FengMap, Ltd.
 * All rights reserved.

 * @authors  dl (duanliang@fengmap.com)
 * @date     2018/12/13 18:02
 * @describe
 */
'use strict';
import React from 'react';
import withRouter from 'umi/withRouter';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { Helmet } from 'react-helmet';
import { siteName } from 'utils/config';

import App from './app';

export default withRouter((props) => {

  const { children } = props;

  return (
    <LocaleProvider locale={enUS}>
      <App>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>{siteName}</title>
        </Helmet>
        {children}
      </App>
    </LocaleProvider>
  );

});
