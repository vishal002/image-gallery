# LazyLoad Image Gallery in React

Your task is to implement a component displaying a lazily loaded image gallery.

### Requirements

1.  Your component should accept an `images` property, which is an array of
    image URLs for the gallery.
2.  Use the `img` element to display the images. Ensure that you also use `img`
    for images that aren't loaded yet. (`img` with empty `src` attribute).
3.  Arrange the images in a three-column grid with `200px` by `200px` cells.
4.  Implement lazy loading so that an image in the gallery should be loaded once
    the image is `100px` or less below the visible viewport (below the fold).

### Assumptions

- The `images` property always contains an array of working image URLs.
- All images in the `images` property have dimensions of `200px` and `200px`
  height.

### Hints

- `IntersectionObserver` might be useful
- Do NOT use `React.lazy`; this task is about lazy loading images, not code
  splitting.
- Your solution will be evaluated based on its correctness; performance and
  coding style will not be assessed.

### Available tools/packages

- React 17.0.2
- JavaScript ES2020
