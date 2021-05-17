import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Muli:200,400,600';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const muli = new FontFaceObserver('Muli');

  muli.load().then(() => {
    document.documentElement.classList.add('muli');
  });
};

export default Fonts;
