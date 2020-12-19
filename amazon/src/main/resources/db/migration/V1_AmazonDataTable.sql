CREATE TABLE DataResultTable (
    id SERIAL PRIMARY KEY,
    searchTerm VARCHAR(255),
    rank int,
    asin1 VARCHAR(255),
    title1 VARCHAR(255),
    share1 float8,
    conv1 float8,
    asin2 VARCHAR(255),
    title2 VARCHAR(255),
    share2 float8,
    conv2 float8,
    asin3 VARCHAR(255),
    title3 VARCHAR(255),
    share3 float8,
    conv3 float8,
    created_at timestamp NOT NULL
);

CREATE TABLE HistoryTable (
    id SERIAL PRIMARY KEY,
    uploadedTime timestamp NOT NULL,
    recordNumber int NOT NULL,
    collectionName VARCHAR(255)
);