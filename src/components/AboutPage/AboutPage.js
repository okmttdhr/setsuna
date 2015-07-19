/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './AboutPage.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class AboutPage {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'About Setsuna';
    this.context.onSetTitle(title);
    return (
      <div className="AboutPage">
        <div className="AboutPage--container">
          <p>About Setsuna</p>
          <p>Setsuna is the place you can relax and share the fucks</p>
        </div>
      </div>
    );
  }

}

export default AboutPage;
