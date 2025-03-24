import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      <div>
        <h1>Hi there </h1>
        <h1 className="text-xl font-sans">this is the name line</h1>
        <h1>This is new line</h1>
        <p>This is another line</p>
        <h1>{user?.name}</h1>
        <h1>{user?.password}</h1>
      </div>
    </div>
  );
}
