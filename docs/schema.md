# Schema Information

## Users
Column Name       | Data Type | Details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
username          | string    | not null, indexed, unique
email             | string    | not null, indexed, unique
password_digest   | string    | not null
session_token     | string    | not null, indexed, unique
image_url         | string    | not null

## Exercises
Column Name       | Data Type | Details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
name              | string    | not null, indexed
type              | string    | not null
sets              | integer   | not null
reps              | integer   |
weight            | float     |
duration          | float     |
distance          | float     |
notes             | text      | 

## Workouts
Column Name       | Data Type | Details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
notes             | text      | not null
user_id           | integer   | not null, foreign key (references user)

## WorkoutExercises
Column Name       | Data Type | Details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
workout_id        | integer   | not null, foreign key (references workout)
exercise_id       | integer   | not null, foreign key (references exercise)

## Tags
Column Name       | Data Type | Details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
tag_name          | string    | not null

## Taggings
Column Name       | Data Type | Details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
taggable_id       | integer   | not null, foreign key (references taggable object), indexed, unique [taggable_id, taggable_type, tag_id]
taggable_type     | string    | not null
tag_id            | integer   | not null, foreign key (references tags), indexed

## Comments
Column Name       | Data Type | Details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
body              | text      | not null
user_id           | integer   | not null, foreign key (references user), indexed
workout_id        | integer   | not null, foreign key (references a workout), indexed
parent_comment_id | integer   | indexed

## Likes
Column Name       | Data Type | Details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
user_id           | integer   | not null, foreign key (references user), indexed
workout_id        | integer   | not null, foreign key (references workout), indexed, unique [workout_id, user_id]