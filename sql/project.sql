drop table if exists comment;
drop table if exists find;
drop table if exists plant;
drop table if exists profile;


create table if not exists profile
(
    profile_id uuid PRIMARY KEY NOT NULL,
    profile_user_name varchar (32) UNIQUE NOT NULL,
    profile_hash char (97) NOT NULL,
    profile_activation_token char (32),
    profile_email varchar (128) UNIQUE NOT NULL,
    profile_image_url varchar (128),
    profile_pronouns varchar (10)
);

create table if not exists plant
(
  plant_id uuid PRIMARY KEY NOT NULL,
  plant_scientific_name varchar (128),
  plant_common_name varchar (256),
  plant_image_url varchar (128)
);

create table if not exists find
(
  find_id uuid PRIMARY KEY NOT NULL,
  find_profile_id uuid references profile(profile_id),
  find_plant_id uuid references plant(plant_id),
  find_image_url varchar (128),
  find_lat varchar (10),
  find_lng varchar (10),
  find_date_time timestamptz NOT NULL
);

create table if not exists comment
(
    comment_id uuid PRIMARY KEY NOT NULL,
    comment_profile_id uuid references profile(profile_id),
    comment_find_id uuid references find(find_id),
    comment_text varchar (512),
    comment_date_time timestamptz NOT NULL
);