// VS Code Extension for html support in .js
// https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html
const template =     /*html*/ 

`
<div>
    <article v-for="item in items">
        <header>
            <h2>{{item.title}}</h2>
        </header>
        <body>
            {{item.description}}
        </body>
        <footer>
            Contact: {{item.contact}}
        </footer>
    </article>
</div>
`;

import config from "./../config.js";
import { fetchDirectories } from "./../githubHelper.js"
export default {
    data() {
        return {
            items: []
        }
    },
    async mounted() {
        var dirs = await fetchDirectories(config.github.username, config.github.repo, config.github.branch);
    },
    template
}