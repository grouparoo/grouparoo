CREATE TABLE test.accounts (
    id integer PRIMARY KEY,
    name character varying(256),
    plan character varying(256)
);

INSERT INTO "test"."accounts"("id","name","plan")
VALUES
(1,E'super_mega_corp',E'enterprise'),
(2,E'star_fleet',E'gov_cloud'),
(3,E'banana_stand',E'startup');
