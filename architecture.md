# Light Academy OS - Architecture

## Product

Light Academy OS is a modular learning platform.

The first product module is:

**MAA Trainer**

---

## Core User Roles

### Student
Uses the trainer, completes exercises and sees progress.

### Teacher
Manages students, starts exercises and monitors progress.

### Parent
Views child progress in the future.

### Administrator
Manages students, groups, teachers and programs in the future.

---

## Core Modes

### 1. Individual Mode

Student trains at their own pace.

Features:
- exercises can be repeated
- results are saved per student
- progress is tracked over time

### 2. Class Mode

Teacher starts an exercise for the whole group.

Features:
- all students see the same exercise
- teacher controls speed
- teacher controls lesson flow
- results are saved for each student

---

## First MVP Module

### Visual Numbers Training

The system shows numbers visually.

Student:
- sees numbers on screen
- remembers or calculates them
- enters the answer
- gets result feedback

The system saves:
- answer
- correct / incorrect status
- time
- score
- date

---

## Future MAA Modules

- Addition exercises
- Subtraction exercises
- Mixed calculations
- Audio exercises
- Abacus recognition
- Speed training
- Memory training

---

## Future Platform Modules

- Teacher Dashboard
- Student Progress Tracking
- Parent Zone
- Groups
- Attendance
- Payments
- Invoices
- FMA
- AAA
- ASA
- School Edition

---

## Technical Direction

The project should be built step by step.

Recommended future stack:

- Frontend: Next.js or React
- Backend: Supabase
- Database: PostgreSQL
- Authentication: Supabase Auth
- Hosting: Vercel
- Code: GitHub

---

## Development Principle

Start with one useful feature.

Do not build the full platform first.

First goal:

Create a working MAA Trainer MVP for our own academy students.
