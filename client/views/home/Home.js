/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';

const title = 'ASP.NET Core Starter Kit';

class Home extends React.Component {

  static propTypes = {};

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <p>Hello, world!</p>
    );
  }
}

export default Home;
