import Block from "@/components/Block/Block";
import apiGet from "@/lib/apiGet";

export default async function Home() {
  const data = await apiGet();

  return (
    <main>
      {data.blocks.map((block, key) => (
        <Block block={block} key={key} />
      ))}
    </main>
  );
}
