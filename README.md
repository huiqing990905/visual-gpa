# CGPA Calculator System

A production-grade, client-side CGPA/GPA calculator engine with a premium React UI.

## Features
- **Configurable Academic Policies**: Supports different repeating rules (Best Attempt vs Latest Attempt) and grading scales.
- **Transparent Calculation**: Shows step-by-step breakdown of how the CGPA is derived.
- **Privacy First**: All calculation happens locally in the browser.

## Project Structure
- `src/logic/`: Core calculation engine (Pure TypeScript, framework agnostic).
- `src/domain/`: Type definitions for University, Policy, Course.
- `src/App.tsx`: Modern React Interface.
- `ARCHITECTURE.md`: Detailed system design documentation.

## Running the Project
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` to view the application.
