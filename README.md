# my-vitepress-docs

A documentation site built with VitePress.

## Quick Start

`ash
npm ci
npm run docs:dev
`

## Available Scripts

- 
pm run docs:dev: start local development server
- 
pm run docs:build: build static site
- 
pm run docs:preview: preview built site

## Project Structure

- docs/: documentation source files
- docs/.vitepress/config.mts: site config
- .github/workflows/deploy.yml: GitHub Pages deployment workflow

## Deployment

Push to main branch to trigger GitHub Actions deployment.
