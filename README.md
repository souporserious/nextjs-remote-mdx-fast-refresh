# nextjs-remote-mdx-fast-refresh

Example of a _super hacky_ workaround to get Fast Refresh working for remote MDX content in a local directory.

Inside [next.config.js](/next.config.js) we run chokidar to watch for new files to add to the `pages` directory. This adds a simple import/export to the file that was created:

```md
import Content from '../../../posts/fast-refresh/index.mdx'
export default Content
```
