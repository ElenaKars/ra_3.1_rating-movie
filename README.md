Movie Rating
===

It is necessary to implement a component that displays the movie rating in the form of stars:
![List of movies](./assets/preview.png)


## Component description

To display the rating, create a `Stars` component that accepts the following attributes:
- `count` — movie rating, _number_, by default `0`.

If the rating is less than `1` or greater than `5`, or not a number at all, then the component should not have any representation in the DOM.

Rating stars must be represented by a `<ul>` tag with the class `card-body-stars`. To display a star symbol inside a `<li>` tag, use the `Star` component.

## Usage example

```jsx
// Inside App
return (
   <Stars count={1} />,
);
```

The component should give the following code:
```html
<ul class="card-body-stars u-clearfix">
   <li>
     <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
       <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
       <path d="M0 0h18v18H0z" fill="none"/>
     </svg>
   </li>
</ul>
```

## Implementation

You need to implement the `Stars` component. Don't forget that a single star must be represented by the `Star` component.

Important: you only need to implement the display of stars, you don't need a movie card.