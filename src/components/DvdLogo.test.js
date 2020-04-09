import React from 'react';
import { render } from '@testing-library/react';
import DvdLogo from './DvdLogo';

test('Initializes state', () => {
  const component = new DvdLogo();
  expect(component.status).toBeTruthy();
  expect(component.status.color).toBeTruthy();
  expect(component.status.directionX).toBeTruthy();
  expect(component.status.directionY).toBeTruthy();
  expect(component.status.x).toBeTruthy();
  expect(component.status.y).toBeTruthy();
});

test('Determines whether the image is vertically in bounds', () => {
  const component = new DvdLogo();
  component.status.y = 1000000000;
  expect(component.inboundsY()).toBe(false);
  component.status.y = 1;
  expect(component.inboundsY()).toBe(true);
  component.status.y = 558;
  expect(component.inboundsY()).toBe(false);
});

test('Determines whether the image is horizontally in bounds', () => {
  const component = new DvdLogo();
  component.status.x = 1000000000;
  expect(component.inboundsX()).toBe(false);
  component.status.x = 1;
  expect(component.inboundsX()).toBe(true);
  component.status.x = 685;
  expect(component.inboundsX()).toBe(false);
});

test('Renders DVD Logo', () => {
  const { getByTestId } = render(<DvdLogo />);
  expect(getByTestId("container")).toBeVisible();
});