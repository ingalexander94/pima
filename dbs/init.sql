CREATE DATABASE IF NOT EXISTS mapi_db;
CREATE USER IF NOT EXISTS 'bengali'@'%' IDENTIFIED BY 'LYrBUhwSKjBbfzpLnDqN';
GRANT ALL PRIVILEGES ON mapi_db.* TO 'bengali'@'%';

use mapi_db;

CREATE TABLE IF NOT EXISTS  mp_users (
  id_user INT AUTO_INCREMENT PRIMARY KEY,
  user_names VARCHAR(100) NOT NULL,
  user_surnames VARCHAR(100) NOT NULL,
  user_email VARCHAR(100) UNIQUE NOT NULL,
  user_password VARCHAR(64) NOT NULL,
  user_phone VARCHAR(20),
  user_photo VARCHAR(100),
  user_code VARCHAR(6),
  user_state TINYINT DEFAULT 1 COMMENT '0: inactivo, 1: activo',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS  mp_roles (
  id_role INT AUTO_INCREMENT PRIMARY KEY,
  role_name VARCHAR(100) UNIQUE NOT NULL,
  role_description VARCHAR(100),
  role_state TINYINT DEFAULT 1 COMMENT '0: inactivo, 1: activo'
);

CREATE TABLE IF NOT EXISTS  mp_user_roles (
  id_user_role INT AUTO_INCREMENT PRIMARY KEY,
  ur_id_user INT NOT NULL,
  ur_id_role INT NOT NULL
);

ALTER TABLE mp_user_roles ADD FOREIGN KEY (ur_id_user) REFERENCES mp_users(id_user);

ALTER TABLE mp_user_roles ADD FOREIGN KEY (ur_id_role) REFERENCES mp_roles (id_role);


INSERT INTO mp_users (user_names, user_surnames, user_email, user_password, user_phone) VALUES
  ('Luis Alexander', 'Peñaloza Romero', 'alexanderpenaloza3@gmail.com', 'a33e6c581ec1d4ac3818807eae92c2fd95dcbd3567b2a17b88eface13a831bcc', '+573213568479');

INSERT INTO mp_roles (role_name, role_description) VALUES
  ('SUPERADMIN', 'Usuario prinicipal con permisos globales'), ('ADMIN', 'Usuario con permisos sobre los clientes');

INSERT INTO mp_user_roles (ur_id_user, ur_id_role) VALUES (1, 1), (1, 2);