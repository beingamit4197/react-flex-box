# React Flex Box

A simple and flexible grid system for React.

## Installation

```sh
npm install @beingamit4197/react-flex-box

```

## Usage

```jsx
import { Grid, Row, Col } from "@beingamit4197/react-flex-box";

const App = () => (
  <Grid>
    <Row justify="center">
      <Col md={6}>
        <div>Column Content</div>
      </Col>
    </Row>
  </Grid>
);

export default App;
```

## Features

- Simple and intuitive API
- Responsive grid system
- Flexbox-based layout
- Customizable breakpoints
- Lightweight and fast

## API

### Grid

The `Grid` component is a container for rows and columns.

### Row

The `Row` component is a flex container for columns.

**Props:**

- `justify`: Defines how the browser distributes space between and around content items along the main axis (e.g., `start`, `center`, `end`, `between`, `around`).
- `align`: Defines how the browser distributes space between and around content items along the cross axis (e.g., `top`, `middle`, `bottom`).

### Col

The `Col` component is a flex item within a row.

**Props:**

- `xs`: Defines the number of columns the component should span on extra small screens.
- `sm`: Defines the number of columns the component should span on small screens.
- `md`: Defines the number of columns the component should span on medium screens.
- `lg`: Defines the number of columns the component should span on large screens.
- `xl`: Defines the number of columns the component should span on extra large screens.

## License

Code copyright 2023 Amit Rawat. Code released under the [MIT license](https://github.com/beingamit4197/react-flex-box/blob/main/LICENSE).
