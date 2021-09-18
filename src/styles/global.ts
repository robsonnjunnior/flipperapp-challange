import { createGlobalStyle } from 'styled-components';

import ProximaNovaBoldTTF from 'assets/fonts/proxima.nova.bold.ttf';
import ProximaNovaExtraBoldTTF from 'assets/fonts/proxima.nova.extrabold.ttf';
import ProximaNovaLightTTF from 'assets/fonts/proxima.nova.light.ttf';
import ProximaNovaRegularTTF from 'assets/fonts/proxima.nova.regular.ttf';
import ProximaNovaThinTTF from 'assets/fonts/proxima.nova.thin.ttf';

export default createGlobalStyle`

  @font-face {
    font-family: 'Proxima Nova';
    src: url(${ProximaNovaRegularTTF}) format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url(${ProximaNovaBoldTTF}) format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url(${ProximaNovaExtraBoldTTF}) format('truetype');
    font-weight: 900;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url(${ProximaNovaLightTTF}) format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url(${ProximaNovaThinTTF}) format('truetype');
    font-weight: 100;
  }

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
*:focus {
  outline: 0
}
html, body, #root {
  font-family: 'Proxima Nova',sans-serif!important;

}

body {
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font: 14px 'Proxima Nova', sans-serif;
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}

`;
