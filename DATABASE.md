# DATABASE

## Light Academy OS Database

The database stores all core data for the platform.

The first priority is MAA Trainer MVP.

---

# Core Tables

## users

Stores all system users.

Fields:

- id
- email
- password_hash
- role
- created_at
- updated_at

Roles:

- student
- parent
- teacher
- administrator

---

## students

Stores student information.

Fields:

- id
- user_id
- first_name
- last_name
- birth_date
- level
- total_points
- current_streak
- created_at
- updated_at

---

## parents

Stores parent information.

Fields:

- id
- user_id
- first_name
- last_name
- phone
- created_at
- updated_at

---

## teachers

Stores teacher information.

Fields:

- id
- user_id
- first_name
- last_name
- phone
- created_at
- updated_at

---

## groups

Stores academy groups.

Fields:

- id
- name
- program
- teacher_id
- city
- level
- created_at
- updated_at

Programs:

- MAA
- FMA
- AAA
- ASA

---

## student_groups

Connects students with groups.

Fields:

- id
- student_id
- group_id
- status
- joined_at

Status:

- active
- paused
- finished

---

# Training Tables

## exercises

Stores exercise templates.

Fields:

- id
- title
- type
- difficulty
- time_limit_seconds
- is_active
- created_at
- updated_at

Types:

- visual_numbers
- addition
- subtraction
- mixed_calculation
- audio
- abacus_recognition

---

## training_sessions

Stores one training attempt.

Fields:

- id
- student_id
- exercise_id
- started_at
- finished_at
- score
- accuracy
- total_questions
- correct_answers
- incorrect_answers
- duration_seconds

---

## answers

Stores individual student answers.

Fields:

- id
- training_session_id
- question_number
- question_data
- correct_answer
- student_answer
- is_correct
- answer_time_seconds
- created_at

---

# Progress Tables

## achievements

Stores achievement definitions.

Fields:

- id
- title
- description
- condition
- points_reward
- badge_icon
- created_at

---

## student_achievements

Stores student achievements.

Fields:

- id
- student_id
- achievement_id
- earned_at

---

## daily_progress

Stores daily student progress.

Fields:

- id
- student_id
- date
- sessions_count
- total_score
- total_correct
- total_incorrect
- total_duration_seconds
- created_at

---

# Future Tables

These tables are not part of the first MVP.

## attendance

For lesson attendance.

## payments

For parent payments.

## invoices

For invoices.

## notifications

For email, SMS and system notifications.

## programs

For MAA, FMA, AAA and ASA program structure.

## lessons

For lessons inside programs.

## assignments

For homework and teacher tasks.

---

# Database Principles

- Start simple.
- Save every training result.
- Track progress over time.
- Do not build finance or CRM tables in the first MVP.
- Every future module should reuse the same users, students, teachers and groups.
