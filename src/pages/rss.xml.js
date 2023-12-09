import rss, {pagesGlobToRssItems} from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Allan Higgins | Blog',
        description: 'My journey learning',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}
