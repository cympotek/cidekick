# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cidekick is a desktop AI assistant application that captures screen content and audio to provide contextual help. It's built as an Electron app with a Next.js frontend and Express backend, using Firebase for auth and SQLite for local storage.

## Essential Commands

### Main Application
```bash
# Initial setup - installs dependencies for both main app and web app
npm run setup

# Development - builds renderer and starts Electron app
npm start

# Build for production
npm run build

# Create distributable packages
npm run make

# Run linting
npm run lint

# Publish release
npm run publish
```

### Web Application (cidekick_web)
```bash
cd cidekick_web
npm run dev    # Development server
npm run build  # Production build
npm run lint   # Run linting
```

## Architecture Overview

The codebase follows a modular architecture with clear separation between Electron main process, renderer process, and backend services:

- **src/** - Electron main process code
  - **common/services/** - Core services (AI, database, API) shared across features
  - **features/** - Feature modules (ask, customize, listen, onboarding)
  - **electron/** - Electron-specific code and utilities
  
- **cidekick_web/** - Next.js web application
  - **app/** - Next.js app router pages
  - **backend_node/** - Express API server
  - **components/** - React components
  
- **functions/** - Firebase Cloud Functions

## Key Technical Details

1. **Node.js Version**: Must use v20.x.x for native dependency compatibility
2. **AI Integration**: Supports OpenAI and Google Gemini APIs
3. **Data Storage**: SQLite locally with optional Firebase sync
4. **Screen Capture**: Uses Electron's desktopCapturer API
5. **Audio Capture**: Handles both system audio and microphone input

## Development Guidelines

1. The app has an "invisible" mode that prevents it from appearing in recordings/screenshots
2. All AI prompts are centralized in `src/common/prompts/`
3. Database operations use Knex.js with SQLite
4. Firebase integration is optional - app works fully offline
5. Use the existing service architecture when adding new features

## Testing

Currently no automated tests are configured. Manual testing is required for:
- Screen and audio capture functionality
- AI prompt responses
- Database operations
- Cross-platform compatibility (macOS, Windows, Linux)

## Known Issues

- AEC (Acoustic Echo Cancellation) improvements needed for transcription
- Firebase data storage needs fixing for signed-in users
- Login flow breaks when switching between local and sign-in modes
- Permissions for mic/display capture sometimes fail