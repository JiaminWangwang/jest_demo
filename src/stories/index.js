import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo'; // 这里引入你想展示的组件

/*
    // param1 表示 story 名称，会显示在侧边栏；
    // func 是一个返回待测试组件的函数
    add(param1,func)
*/
storiesOf('Button', module)
  .add('with text', () => (  // 一个 add 表示添加一个 story
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (  // 这里是另一个 story
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));