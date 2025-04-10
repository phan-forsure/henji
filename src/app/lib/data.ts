import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchPosts() {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const posts = await sql`SELECT * FROM posts`;
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
