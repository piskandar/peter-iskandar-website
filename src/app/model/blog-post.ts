export class BlogPost {
  constructor(id: number, title: string, content: string, publishDate: Date) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.publishDate = publishDate;
  }

  id: number;
  title: string;
  content: string;
  publishDate: Date;
}

export const blogPosts = [
  new BlogPost(1, 'test title 1', '# this is a test 1', new Date()),
  new BlogPost(2, 'test title 2', '## this is a test 2', new Date()),
  new BlogPost(3, 'test title 3', '`this is a test 3`', new Date()),
  new BlogPost(4, 'test title 4', 'this is a test 4', new Date()),
];
