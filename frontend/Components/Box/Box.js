import styled from 'styled-components/native';
import { compose, space, layout, color, border, flexbox, position, typography } from 'styled-system';

// compose() can help improve performance when using
// multiple style props functions on the same component
// Ref: https://styled-system.com/api/#compose

export const Box = styled.View`
  ${compose(space, layout, color, flexbox, border, position, typography)}
`;
