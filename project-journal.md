# 06/24/23

Today I am still in the planning/strategizing phase of the project. One of the most important things for me to figure out right now is: how do I detect whether I'm on a Hashnode.com page or not?

Normally, this wouldn't be difficult at all; simply parse the URL to see if we're on a Hashnode.com URL. From there, if we want to further check if the page is a Hashnode article and not, let's say, the front feed page, we can analyze the DOM for elements common to articles and we're done.

However, Hashnode.com is unique to most (non-blog) websites in that it allows blogs to have custom domains. For instance, my blog is located at blog.gumshoe.dev, and when you visit it, the address bar will retain this domain - no 'Hashnode.com' in sight. It also allows for custom sub-domains, i.e. 'yourdomain.hashnode.com', which helps a bit, but there still exists the problem of blogs being able to have fully custom domains.

So, how should I go about fixing this? I had some ideas:

- **Go by DOM structure**: I could just analyze the DOM and find out if the page has a DOM structure typical of a Hashnode article. I didn't like this too much because Hashnode inevitably will change their HTML, rendering the solution unreliable and cumbersome to manage.

- **Go by JSON-LD** - "JSON-LD" stand for [JSON for Linking Data](https://json-ld.org/). Linked Data is structured data that would help our application recognize that the current page is a Hashnode page. JSON-LD is, well, formatted in JSON, and it's what Hashnode embeds into their article page HTML.

This is what the JSON-LD object for one of my articles looks like:

```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "url": "https://blog.gumshoe.dev/understanding-git-diff-output",
  "mainEntityOfPage": "https://blog.gumshoe.dev/understanding-git-diff-output",
  "headline": "Understanding git diff Output",
  "description": "git diff can be a confusing command to understand. In this tutorial, I aim to demystify the command by clarifying its ambiguities and clearly outlining its syntax so you never have to go \"huh?\" when it comes to git diff ever again.\nWhat is a Diff?\nIn...",
  "datePublished": "2023-06-18T21:28:38.131Z",
  "dateModified": "2023-06-18T21:34:30.775Z",
  "isAccessibleForFree": true,
  "author": {
    "@type": "Person",
    "name": "Matthew Smilansky",
    "url": "https://hashnode.com/@Gumshoe",
    "sameAs": "https://twitter.com/gumshoedev"
  }@,
  "publisher": {
    "@type": "Organization",
    "name": "Matthew's Blog",
    "url": "https://blog.gumshoe.dev",
    "logo": "https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1559814205701%2Fek9fO-yT0.jpeg%3Fw%3D800%26bm%3Dnormal%26balph%3D100%26txt64%3DTWF0dGhldydzIEJsb2c%26txtsize%3D42%26txtfit%3Dmax%26txtalign%3Dmiddle%2Ccenter%26txtfont%3DHelvetica%20Neue%2CBold%26txtclr%3Dffffff%26blend%3D2962FF"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/wX2L8L-fGeA/upload/e97ac92078f6fb93e818f123b252964d.jpeg"
  }
}
```

As you can see, we're given a lot of data in this single JavaScript object. We can probably do a lot with this! However, the part we're most concerned with right now is:

```json
  "author": {
    "url": "https://hashnode.com/@Gumshoe"
  }
```

As you can see, by accessing the `url` property of the `author` key, we get access to the author's Hashnode profile page. Huzzah!

This is only the first step, though, and it begs a few questions:

- Does this JSON-LD object show up on other Hashnode.com pages? If so, is there a way we can further distinguish an article page from any other Hashnode.com page where this JSON-LD might appear?
