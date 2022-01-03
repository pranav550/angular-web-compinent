1)ng new wc
2)ng add @angular/elements
3)npm install --save @webcomponents/webcomponentsjs
4)npm i @webcomponents/custom-elements 5) import ‘@webcomponents/custom-elements/src/native-shim’;
import ‘@webcomponents/custom-elements/custom-elements.min’;
6)ng g c mywc –v Native ShadowDom

7)entryComponents: [CustomElementDemoComponent]

8)constructor(private injector: Injector) {
}

ngDoBootstrap() {
const customElement = createCustomElement(CustomElementDemoComponent, { injector: this.injector });
customElements.define('custom-element', customElement);
}

9)<custom-element></custom-element>

10)npm i –save-dev concat fs-extra

11)ng add ngx-build-plus

12)ng g ngx-build-plus:wc-polyfill

13)ng g ngx-build-plus:externals

14)ng build –extra-webpack-config webpack.external.js –prod –single-bundle true –project <project name>

15)Ng build --prod

16)create test.js file in root angular project

17)const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
const files = [
"./dist/my-web/runtime.js",
"./dist/my-web/polyfills.js",
"./dist/my-web/scripts.js",
"./dist/my-web/main.js",
];
await fs.ensureDir("elements");
await concat(files, "elements/custom-element.js");
})();

18)node test.js
