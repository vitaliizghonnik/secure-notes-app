CREATE TABLE Notes (
    id SERIAL PRIMARY KEY,
    description varchar(50) NOT NULL,
    completed BOOLEAN NOT NULL,
    percentage int NOT NULL
)