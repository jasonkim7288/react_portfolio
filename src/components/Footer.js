import React, { useRef, useEffect } from 'react';
import '../stylesheets/Footer.scss';

function Footer() {
  const footerMargin = useRef(null);
  const footer = useRef(null);

  useEffect(() => {
    console.log('footer.current.clientHeight:', footer.current.clientHeight);
    footerMargin.current.style.height = footer.current.clientHeight + 'px';
  }, []);

  return (
    <footer>
      <div id="footer" ref={ footer }>
        <a href="https://www.linkedin.com/in/im-jasonkim" rel="noopener noreferrer" className="links-icon links-icon-background" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/jasonkim7288" rel="noopener noreferrer" className="links-icon links-icon-background" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/jasonkim7288" rel="noopener noreferrer" className="links-icon links-icon-background" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div ref={ footerMargin }></div>
    </footer >
  );
}

export default Footer;
