// Test generated by RoostGPT for test ReactUnitTesting using AI Type Open AI and AI Model gpt-4


import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  });

  test('renders Header component', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders Home page on "/" route', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders Projects page on "/projects" route', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  test('renders Services page on "/services" route', () => {
    render(
      <MemoryRouter initialEntries={['/services']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Services')).toBeInTheDocument();
  });

  test('renders About page on "/about" route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  test('renders Contact page on "/contact" route', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('does not render non-existing page', () => {
    render(
      <MemoryRouter initialEntries={['/non-existing']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.queryByText('Non-existing')).not.toBeInTheDocument();
  });
});
