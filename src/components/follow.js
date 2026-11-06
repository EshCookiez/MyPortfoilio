// Props for an element that slides in when its section appears: the `i`th in line.
// The stagger lives in index.css (.follow, --i).
export const follow = (i, className) => ({
  className: className ? `${className} follow` : 'follow',
  style: { '--i': i },
});
