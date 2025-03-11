# Character-by-Character Logo Hover Effect

This document explains how to create an animated logo hover effect where each character slides up individually, revealing a second text from below.

## Overview

The effect consists of two identical text layers:
- A top layer that slides up on hover
- A bottom layer that slides up to replace it
- Each character animates independently with a slight delay

## Implementation

### 1. HTML/JSX Structure

```jsx
<a href="#" className="logo">
  <div className="logo-container">
    <h1 className="logo-text top">
      {'amar.'.split('').map((char, index) => (
        <span key={index} style={{ '--char-index': index }}>{char}</span>
      ))}
    </h1>
    <h1 className="logo-text bottom">
      {'amar.'.split('').map((char, index) => (
        <span key={index} style={{ '--char-index': index }}>{char}</span>
      ))}
    </h1>
  </div>
</a>
```

Key points:
- Text is split into individual characters using `split('')`
- Each character is wrapped in a `span` with a custom `--char-index` CSS variable
- Two identical layers are created (top and bottom)

### 2. CSS Styling

```css
.logo {
  text-decoration: none;
  display: block;
}

.logo-container {
  position: relative;
  overflow: hidden;
  height: 1.8rem;
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color);
  margin: 0;
  position: relative;
  white-space: nowrap;
  display: flex;
  line-height: 1;
}

.logo-text span {
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);
  transition-delay: calc(var(--char-index) * 0.05s);
  line-height: 1;
}

.logo-text.top span {
  transform: translateY(0);
}

.logo-text.bottom {
  position: absolute;
  top: 0;
  left: 0;
}

.logo-text.bottom span {
  transform: translateY(100%);
}

.logo:hover .logo-text.top span {
  transform: translateY(-100%);
}

.logo:hover .logo-text.bottom span {
  transform: translateY(0);
}
```

### 3. Key CSS Properties Explained

1. **Container Setup**:
   - `overflow: hidden` clips the text outside the container
   - `position: relative` creates a positioning context
   - `height: 1.8rem` sets a fixed height for the container

2. **Text Positioning**:
   - Bottom text is absolutely positioned over the top text
   - `white-space: nowrap` prevents text wrapping
   - `line-height: 1` reduces vertical spacing

3. **Animation**:
   - Uses CSS transforms for smooth animation
   - `transition` property defines the animation duration and timing
   - Custom cubic-bezier timing function for smooth easing
   - Character delay calculated using CSS custom property `--char-index`

4. **Hover States**:
   - Top text transforms up by -100%
   - Bottom text transforms from 100% to 0
   - Each character's delay is calculated by its index × 0.05s

## Customization

You can adjust these values to customize the effect:

```css
.logo-text span {
  /* Animation duration */
  transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);
  
  /* Delay between characters */
  transition-delay: calc(var(--char-index) * 0.05s);
}
```

- Increase/decrease `0.4s` to change animation duration
- Adjust `0.05s` to change the delay between characters
- Modify the cubic-bezier values to change the easing curve

## Browser Support

This effect uses modern CSS features:
- CSS Custom Properties (variables)
- CSS transforms
- CSS transitions
- `calc()` function

These features are supported in all modern browsers. 