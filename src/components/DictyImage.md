Uses the HTML5 `<picture>` element to take advantage of newer, and more efficient image formats, while also supporting older browsers.

<br />

### Basic usage
Creates a `picture` element with an `img` element and `src` attribute.
```js
<DictyImage src="/src/images/logo.png" />
```

### Using the `alt` attribute
Adds the `alt` attribute to the `img` element
```js
<DictyImage 
    src="/src/images/slideshow-images/ctr9-mutant-DG1071.png" 
    alt="dicty logo" 
/>
```

### Adding custom `class` attribute to elements
The `className` prop adds a `class` attribute to the `picture` element. While the `imgClassName` adds a `class` attribute to the `img` element inside `picture`.
```js
<DictyImage 
    src="/src/images/slideshow-images/ggtA-mutant-DG1109.png" 
    alt="dicty logo" 
    className="picture" 
    imgClassName="image" 
/>
```

### Adding next-gen images
The `nextGenSources` prop allows usage of modern image formats if the browser supports them. If not it will automatically fallback to the image specified with the `src` prop. In this example, browsers that _do not_ support next-gen image formats will always see the sad dicty logo instead.
```js
<DictyImage 
    src="/src/images/sad-dicty.png" 
    alt="dicty logo" 
    nextGenSources={
        [
            {
                srcSet: "/src/images/slideshow-images/tipB-mutant-DG1036.avif",
                type: "image/avif"
            },
            {
                srcSet: "/src/images/slideshow-images/tipB-mutant-DG1036.webp",
                type: "image/wepb"
            }
        ]
    }
/>
```