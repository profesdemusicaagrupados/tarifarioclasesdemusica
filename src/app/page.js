import Block from "@/components/Block/Block";

export default async function Home() {
  const res = await fetch(process.env.LOCALHOST + "/api/data");

  const data = await res.json();

  return (
    <main>
      {data.blocks.map((block, key) => (
        <Block block={block} key={key} />
      ))}
    </main>
  );
}
