import linkedin from '../img/linkedin.svg';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import pinterest from '../img/pinterest.svg';

export const Footer = () => {
  return (
    <div className="footer">
      <ul class="list">
        <li>
          <a href="" class="item-cocial">
            <img src={linkedin} alt="" />
          </a>
        </li>
        <li>
          <a href="" class="item-cocial">
            <img src={twitter} alt="" />
          </a>
        </li>
        <li>
          <a href="" class="item-cocial">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="" class="item-cocial">
            <img src={pinterest} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};
