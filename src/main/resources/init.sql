DROP TABLE IF EXISTS `users`;
create table users(
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(80) NOT NULL,
  `enabled` boolean not null,
  `email` VARCHAR(100) NOT NULL,
  `birthday` DATE NOT NULL
);
INSERT INTO users (`username`,`password`,`email`,`birthday`,`enabled`) VALUES('admin','$2a$11$UAA55goy9PmZTB/utJrbrOV8fYG3Z.jGO/0riIEnRpVTPcMvF5oua','qa@edsd.com','1981-02-01',TRUE );
INSERT INTO users (`username`,`password`,`email`,`birthday`,`enabled`) VALUES('sergey','$2a$11$4Vxx.BFSH1oNB3PTJ9RcAuzLnU2mjiXP30dCawQvDMTs3IPhLKgaO','sergey@mail.ru','1978-01-31', TRUE );
