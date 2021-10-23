import yellow from '../img/yellow.png';
import red from '../img/red.png';
import green from '../img/green.png';
import earth from '../img/earth.png';
import red2 from '../img/red2.png';

export const Elements = () => {
  return (
    <>
      <img className="footer-red" src={red2} alt="" />
      <img className="footer-yellow" src={yellow} alt="" />
      <img className="top-yellow" src={yellow} alt="" />
      <img className="right-yellow" src={yellow} alt="" />
      <img className="right-red" src={red} alt="" />
      <img className="earth" src={earth} alt="" />
      <img className="green" src={green} alt="" />
    </>
  );
};
