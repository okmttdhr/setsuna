/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './MainPage.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class MainPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Setsuna';
    this.context.onSetTitle(title);
    return (
      <div className="MainPage">
        <div className="MainPage--container">
          <p>Setsuna</p>
        </div>
      </div>
    );
  }

}

export default MainPage;
