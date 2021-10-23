import styled from 'styled-components';

export const Styles = styled.div`
  .container {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 20px;

    @media screen and (min-width: 768px) {
      padding: 0 59px;
    }

    @media screen and (min-width: 1280px) {
      padding: 0 100px;
    }
  }

  .earth,
  .right-red,
  .right-yellow,
  .green {
    display: none;
  }

  .earth {
    @media screen and (min-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;

      display: inline-block;
      width: 330px;
    }

    @media screen and (min-width: 1280px) {
      width: 400px;
    }
  }

  .right-red {
    @media screen and (min-width: 768px) {
      position: absolute;
      top: 385px;
      right: 130px;

      display: inline-block;
      width: 120px;
      z-index: 1;
    }

    @media screen and (min-width: 1280px) {
      top: 385px;
      right: 190px;
      width: 215px;
    }
  }

  .right-yellow {
    @media screen and (min-width: 768px) {
      position: absolute;
      top: 363px;
      right: 205px;

      display: inline-block;
      width: 70px;
      z-index: 2;
    }

    @media screen and (min-width: 1280px) {
      top: 321px;
      right: 290px;
      width: 125px;
    }
  }

  .green {
    @media screen and (min-width: 1280px) {
      position: absolute;
      bottom: 28px;
      right: 127px;

      display: inline-block;
      width: 57px;
      z-index: 3;
    }
  }

  .top-yellow {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;

    @media screen and (min-width: 768px) {
      top: 10px;
      left: 10px;
      width: 80px;
    }

    @media screen and (min-width: 1280px) {
      left: 100px;
    }
  }

  .footer-red {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 120px;
    z-index: 4;

    @media screen and (min-width: 768px) {
      width: 200px;
    }

    @media screen and (min-width: 1280px) {
      left: 75px;
      width: 200px;
    }
  }

  .footer-yellow {
    position: absolute;
    bottom: 30px;
    right: -6px;

    width: 60px;
    z-index: 5;

    @media screen and (min-width: 768px) {
      width: 90px;
    }

    @media screen and (min-width: 1280px) {
      width: 90px;
    }
  }

  .title {
    margin-top: 40px;
    margin-bottom: 30px;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 1.3;

    @media screen and (min-width: 768px) {
      margin-top: 80px;
    }

    @media screen and (min-width: 1280px) {
      margin-top: 143px;
      font-size: 40px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 280px;

    @media screen and (min-width: 768px) {
      width: 370px;
      margin-bottom: 180px;
    }

    @media screen and (min-width: 1280px) {
      width: 560px;
    }

    .text-label {
      margin-top: 20px;
    }

    .text-input {
      margin-bottom: 10px;
      padding: 30px 45px;
      border: 1px solid #dcdcdc;
      border-radius: 10px;
      transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

      &:focus-within {
        outline: none;
        border: 1px solid #fad34f;
      }
    }

    .textarea {
      resize: none;
    }

    .error {
      margin-bottom: 5px;
      color: #ff0000;
      font-size: 10px;
    }
  }

  .button {
    width: 170px;
    margin-top: 10px;
    padding: 20px 30px;
    color: #ffffff;
    background-color: #fad34f;
    border: none;
    border-radius: 500px;
    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: #f6cc3f;
    }

    @media screen and (min-width: 1280px) {
      width: 215px;
      margin-top: 20px;
      padding: 27px 52px;
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    border-top: 1px solid #dcdcdc;

    background-color: #fafafa;

    @media screen and (min-width: 768px) {
      padding: 40px 0;
    }

    .list {
      width: 100px;
      display: flex;
      justify-content: space-around;
    }
  }
`;
