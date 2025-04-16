import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchPosts() {
  try {
    const posts = await sql`
      SELECT
        posts.*,
        COUNT(comments.id) AS comments_count
      FROM posts
      LEFT JOIN comments ON comments.post_id = posts.id
      GROUP BY 
        posts.id
      ORDER BY posts.created_at DESC;
    `;
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
}

export async function writePost(
  title: string,
  author: string,
  text: string,
  image: string | null
) {
  try {
    await sql`
      INSERT INTO posts (post_title, post_author, post_text, post_image)
      VALUES (${title}, ${author}, ${text}, ${image})
    `;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create post");
  }
}

export async function fetchSearchPosts(query: string) {
  const searchQuery = `%${query}%`;

  try {
    const posts = await sql`
      SELECT 
        posts.*,
        COUNT(comments.id) AS comments_count FROM posts
      LEFT JOIN comments ON comments.post_id = posts.id
      WHERE
        post_text LIKE ${searchQuery}
        OR post_title LIKE ${searchQuery} 
        OR post_author LIKE ${searchQuery}
      GROUP BY posts.id
      ORDER BY created_at DESC
    `;
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch search posts");
  }
}

export async function fetchPost(query: string) {
  try {
    const post = await sql`
      SELECT * FROM posts
      WHERE id = ${query}
    `;

    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch post");
  }
}

export async function writeComment(text: string, postId: string) {
  try {
    await sql`
      INSERT INTO comments (comment_text, post_id)
      values (${text}, ${postId})
    `;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to write comment");
  }
}

export async function fetchComments(id: string) {
  try {
    const comments = sql`
      SELECT 
        comments.id, 
        comments.comment_text,
        comments.created_at
      FROM comments WHERE comments.post_id = ${id}
      ORDER BY comments.created_at DESC
    `;
    return comments;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch comments");
  }
}
