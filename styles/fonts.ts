import {
    createGlobalStyle
}

from 'styled-components'

export const FontStyle = createGlobalStyle`

@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-BLACK-ITALIC.OTF') format('opentype');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-BLACK.OTF') format('opentype');
    font-weight: 900;
}

@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-EXTRABOLD-ITALIC.OTF') format('opentype');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-EXTRABOLD.OTF') format('opentype');
    font-weight: 800;
}

@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-BOLD-ITALIC.OTF') format('opentype');
    font-weight: 700;
    font-style: italic;
}
@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-BOLD.OTF') format('opentype');
    font-weight: 700;
}

@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-ITALIC.OTF') format('opentype');
    font-style: italic;
}
@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-LIGHT-ITALIC.OTF') format('opentype');
    font-weight: 300;
    font-style: italic;
}
@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-LIGHT.OTF') format('opentype');
    font-weight: 300;
}
@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-MEDIUM-ITALIC.OTF') format('opentype');
    font-weight: 500;
    font-style: italic;
}
@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-MEDIUM.OTF') format('opentype');
    font-weight: 500;
}
@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-REGULAR.OTF') format('opentype');
    font-weight: 400;
}
@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-THIN-ITALIC.OTF') format('opentype');
    font-weight: 100;
    font-style: italic;
}
@font-face {
    font-family: 'OBJECTIVE';
    src: url('fonts/OBJECTIVE-THIN.OTF') format('opentype');
    font-weight: 100;
}

body {
    font-family: 'OBJECTIVE';
}

.title {
    color: #ffffff;
    font-size: 70px;
    font-weight: 700;
    letter-spacing: 35px;
    text-transform: uppercase;
}

.title-section {
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 12.5px;
    text-transform: uppercase;
}

.size50{
    font-size: 50px;
}

.size40 {
    font-size: 40px;
}

.size32 {
    font-size: 32px;
}

.size30{
    font-size: 30px;
}

.size25{
    font-size: 25px;
}

.size20{
    font-size: 20px;
}

.size18{
    font-size: 18px;
}

.size16 {
    font-size: 16px;
}

.size14 {
    font-size: 14px;
}

.blue {
    color: var(--primary-color);
    fill: var(--primary-color);
    stroke: var(--primary-color);

    svg {
        fill: var(--primary-color);
        stroke: var(--primary-color);
    }
}

.pink {
    color: #ff0042;
    fill: #ff0042;
    stroke: #ff0042;

    svg {
        fill: #ff0042;
        stroke: #ff0042;
    }
}

.white {
    color: #ffffff;

    svg {
        fill: #eee;
        stroke: #eee;
    }
}

@media only screen and (max-width: 1366px) {
    .title {
    font-size: 60px;
    letter-spacing: 20px;
}

.title-section {
    font-size: 23px;
    letter-spacing: 8.5px;
}

.size50 {
    font-size: 40px;
}

.size40 {
    font-size: 30px;
}

.size32 {
    font-size: 28px;
}

.size30 {
    font-size: 26px;
}

.size25 {
    font-size: 24px;
}

.size20 {
    font-size: 18px;
}

.size18 {
    font-size: 16px;
}

.size16 {
    font-size: 14px;
}

.size14 {
    font-size: 14px;
}

}

@media only screen and (max-width: 1280px) {
    .title {
    font-size: 40px;
    letter-spacing: 15px;
}

.title-section {
    font-size: 23px;
    letter-spacing: 8.5px;
}

.size50 {
    font-size: 35px;
}

.size40 {
    font-size: 25px;
}

.size32 {
    font-size: 24px;
}

.size30 {
    font-size: 23px;
}

.size25 {
    font-size: 22px;
}

.size20 {
    font-size: 16px;
}

.size18 {
    font-size: 14px;
}

}

@media only screen and (max-width: 1024px) {
    .size50 {
    font-size: 31px;
}

.size20 {
    font-size: 14px;
}
}


@media only screen and (max-width: 960px) {
    .title-section {
    font-size: 23px;
    letter-spacing: 8.5px;
    text-align: center;

    br {
        display: none;
    }
}

@media only screen and (max-width: 780px) {
    .size40 {
    font-size: 20px;
}

}

@media only screen and (max-width: 640px) {
    .size25 {
    font-size: 20px;
}

.size18 {
    font-size: 13px;
}
}
`