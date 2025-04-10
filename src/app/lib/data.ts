import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchPosts() {
  try {
    const posts = await sql`
      SELECT
        id,
        post_title,
        post_author,
        post_text,
        created_at
      FROM posts
      ORDER BY created_at DESC
    `;
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
}

export async function writePost(title: string, author: string, text: string) {
  try {
    await sql`
      INSERT INTO posts (post_title, post_author, post_text)
      VALUES (${title}, ${author}, ${text})
    `;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create post");
  }
}

export async function fetchSearchPosts(query: string, page?: string) {
  const searchQuery = `%${query}%`;

  try {
    const posts = await sql`
      SELECT * FROM posts
      WHERE post_text LIKE ${searchQuery} OR post_title LIKE ${searchQuery} OR post_author LIKE ${searchQuery}
      ORDER BY created_at DESC
    `;
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch search posts");
  }
}
