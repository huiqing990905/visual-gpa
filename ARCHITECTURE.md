# CGPA Calculator System Architecture

## Overview
This system is designed as a modular, client-side application (extensible to server-side) that decouples **Academic Policy Configuration** from the **Calculation Logic**. This allows the system to handle multiple universities, grading scales, and historical policy changes without code modification.

## Core Modules

### 1. Data Layer (Types & Models)
Definitions for the immutable data structures.
- **University**: Metadata about the institution.
- **AcademicPolicy**: The "ruleset" (active years, rounding logic, repeating logic).
- **GradingScale**: Mapping of letter grades to numeric points.
- **StudentRecord**: The input data (courses, grades, credits).

### 2. Calculation Engine (The Kernel)
A pure functional pipeline that takes `StudentRecord + AcademicPolicy` and returns `CGPAResult`.
**Pipeline Steps:**
1.  **Filter**: Exclude non-evaluative grades (e.g., 'W', 'Audit').
2.  **Deduplicate**: Identify repeated courses based on Course Code.
3.  **Apply Repeat Policy**:
    *   *Policy: Best Attempt* -> Keep highest grade.
    *   *Policy: Latest Attempt* -> Keep most recent.
    *   *Policy: Averaging* -> (Advanced) Average the attempts.
4.  **Map**: Convert remaining letter grades to Grade Points (GP) using `GradingScale`.
5.  **Aggregate**:
    *   `Total GP = Sum(Course.GP * Course.Credit)`
    *   `Total Credits = Sum(Course.Credit)`
6.  **Compute**: `Raw CGPA = Total GP / Total Credits`.
7.  **Finalize**: Apply `RoundingRule` (e.g., Round to 2 decimals, Truncate).

### 3. User Interface (Presentation)
- **Configuration View**: Select University/Policy.
- **Transcript Input**: Data entry for courses.
- **Calculation Breakdown**: A transparent view showing the "Math" step-by-step.

## Data Flow
```
[Configuration] --> (Select Policy)
                        |
[Transcript Input] --> (Raw Course List)
                        |
                        v
               [Calculation Engine]
                        |
            (Apply Rules & Exclusions)
                        |
                        v
                 [Calculation Result]
       { CGPA: 3.85, Credits: 120, Breakdown: [...] }
```

## Tech Stack
- **Framework**: React (Vite) for interactivity.
- **Language**: TypeScript (Critical for strict data modeling).
- **Styling**: Vanilla CSS (CSS Modules) for modular, premium design.

## System Diagram (Mermaid)

```mermaid
graph TD
    user((User))
    
    subgraph Client_App [Client Side Application (Next.js)]
        subgraph Routes [App Router]
            landing[Landing Page <br/> app/page.tsx <br/> (University Selection)]
            workspace_page[Workspace Container <br/> app/[uni]/page.tsx <br/> (Data Hydration)]
        end

        subgraph Interactive_UI [Workspace Client (SPA)]
            client_logic[Workspace Logic <br/> app/[uni]/WorkspaceClient.tsx]
            
            subgraph Views [UI Components]
                sidebar[Sidebar Controls <br/> (Input & Settings)]
                main_list[Course List Editor <br/> (Dynamic Rows)]
                visualization[Impact Analysis HUD <br/> (Real-time Feedback)]
                modals[Overlays <br/> (Config/Legal/Grading)]
            end
        end

        subgraph Core_Engine [Logic & Data Layer]
            calc_engine[Calculation Engine <br/> src/logic/calculator.ts <br/> (Pure Functions)]
            data_store[University Data <br/> src/data/sample.ts <br/> (Static JSON)]
            types[Type System <br/> src/types.ts]
        end
    end

    subgraph Browser_Storage [Persistence]
        local_store[(LocalStorage)]
    end

    %% Flow
    user -->|Selects Architecture| landing
    landing -->|Navigates| workspace_page
    workspace_page -->|Injects Data| client_logic
    
    client_logic -->|Reads/Writes| local_store
    
    client_logic -->|Manages| sidebar
    client_logic -->|Manages| main_list
    client_logic -->|Updates| visualization
    client_logic -->|Toggles| modals
    
    sidebar -->|Update State| client_logic
    main_list -->|Update State| client_logic
    
    client_logic -->|Calls| calc_engine
    client_logic -->|Reads| data_store
    
    calc_engine -->|Returns Result| client_logic
    
    classDef route fill:#e1f5fe,stroke:#0277bd,stroke-width:2px;
    classDef ui fill:#e8eaf6,stroke:#3949ab,stroke-width:2px;
    classDef logic fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
    classDef storage fill:#fff3e0,stroke:#ef6c00,stroke-width:2px;
    
    class landing,workspace_page route;
    class client_logic,sidebar,main_list,visualization,modals ui;
    class calc_engine,data_store,types logic;
    class local_store storage;
```

