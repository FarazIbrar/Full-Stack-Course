CREATE TABLE book_info(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    author VARCHAR(50),
    date date,
    recommendation int,
    summary VARCHAR(500),
    notesURL VARCHAR(50),
    imageURL VARCHAR(50)
);
INSERT INTO book_info (title, author, date, recommendation, summary, notesURL, imageURL)
VALUES (
    'You Can Negotiate Anything',
    'Herb Cohen',
    '2023-08-02',
    1,
    'amples of great day-to-day moments of negotiation that will stick in your head for when you need them. (I especially loved the one about the power of the prisoner in solitary confinement.) So go buy and read the book. Im giving it a 10/10 rating even though the second half of the book loses steam, because the first half is so crucial.',
    'http://example.com/notes',
    'http://example.com/image.jpg'
);

ALTER TABLE book_info 
ALTER COLUMN title TYPE VARCHAR(255),
ALTER COLUMN author TYPE VARCHAR(255),
ALTER COLUMN notesURL TYPE VARCHAR(255),
ALTER COLUMN imageURL TYPE VARCHAR(255);
INSERT INTO book_info (title, author, date, recommendation, summary, notesURL, imageURL)
VALUES (
    'Atomic Habits',
    'James Clear',
    '2023-06-15',
    9,
    'This book offers a proven framework for improving every day. It teaches how tiny changes can lead to remarkable results. Clears insights are deeply rooted in scientific research and practical wisdom, making it a must-read for anyone looking to improve their habits and achieve lasting change.',
    'http://example.com/atomic-habits-notes',
    'https://covers.openlibrary.org/b/id/14653492-L.jpg'
);
