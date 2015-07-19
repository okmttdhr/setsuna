/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Footer.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';

@withViewport
@withStyles(styles)
class Footer {

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    // This is just an example how one can render CSS
    let { width, height } = this.props.viewport;
    this.renderCss(`.Footer-viewport:after {content:' ${width}x${height}';}`);

    return (
      <div className="Footer">
        <div className="Footer-container">
          <span className="Footer-text">© okp</span>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="/" onClick={Link.handleClick}>Facebook</a>
          <span className="Footer-spacer">·</span>
          <a className="Footer-link" href="/privacy" onClick={Link.handleClick}>Twitter</a>
        </div>
      </div>
    );
  }

}

export default Footer;
