import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchPosts() {
  try {
    const posts = await sql`SELECT * FROM posts`;
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
}