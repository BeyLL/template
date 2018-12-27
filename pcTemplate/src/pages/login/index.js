/**
 * Copyright 2014-2018, FengMap, Ltd.
 * All rights reserved.

 * @authors  lyy (liyaya@fengmap.com)
 * @date     2018/11/23 0023 11:02
 * @describe
 */
'use strict';
import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'antd';
import { connect } from 'dva';
import { copyright, version, title } from 'utils/config';
import styles from './index.less';

const FormItem = Form.Item;

@Form.create()
@connect(({ loading }) => ({ loading }))
class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    const { validateFields } = form;
    dispatch({ type: 'login/login' });
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { form, loading } = this.props;
    const { getFieldDecorator } = form;
    //当前请求登陆状态
    const loadStatus = loading.effects['login/login'];

    return (
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.login}><img style={{ width: 201, height: 132 }} src={require('./../../assets/images/logo.png')}/></div>
          <div className={styles.title} dangerouslySetInnerHTML={{ __html: title }}></div>
          <div className={styles.formContainer}>
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('user', {
                  rules: [
                    {
                      required: true,
                      message: '请输入用户名',
                    },
                  ],
                })(
                  <Input
                    size="default"
                    autoComplete="off"
                    prefix={<Icon className={styles.icon} type="user"/>}
                    placeholder={'请输入用户名'}/>,
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码',
                    },
                  ],
                })(
                  <Input
                    size="default"
                    type="password"
                    prefix={<Icon className={styles.icon} type="key"/>}
                    placeholder={'请输入密码'}/>,
                )}
              </FormItem>
              <Button type="primary" htmlType="submit" block loading={loadStatus}>登录</Button>
            </Form>
          </div>
          <div className={styles.version}>{version}</div>
          <div className={styles.copyright}>{copyright}</div>
        </div>
      </div>
    );
  }
}

export default Login;
