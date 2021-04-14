const templateOne = (() => {
  const element = {
    tag: 'div',
    classes: ['nav-bar'],
    children: [
      {
        tag: 'div',
        classes: ['home-button'],
        children: [
          {
            tag: 'p',
            id: 'home',
            content: 'Home',
          },
        ],
      },
      {
        tag: 'div',
        classes: ['about-button'],
        children: [
          {
            tag: 'p',
            id: 'about',
            content: 'About',
          },
        ],
      },
      {
        tag: 'div',
        classes: ['Contact-button'],
        children: [
          {
            tag: 'p',
            id: 'contact',
            content: 'Contact',
          },
        ],
      },
    ],
  };
  return {
    element,
  };
})();
