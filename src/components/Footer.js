import React, { useRef, useEffect } from 'react';

function Footer() {
  const footerMargin = useRef(null);
  const footer = useRef(null);

  useEffect(() => {
    console.log('footer.current.clientHeight:', footer.current.clientHeight);
    footerMargin.current.style.height = footer.current.clientHeight + 'px';
    footerMargin.current.style.opacity = '0';
  }, []);

  return (
    <footer>
      <div id="footer"  className="bg-color" ref={ footer }>
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
      <div id="footer-margin" ref={ footerMargin }></div>
    </footer >
  );
}

export default Footer;
