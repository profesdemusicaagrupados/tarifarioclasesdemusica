import Block from "@/components/Block/Block";
import data from "@/data/data";

export default function Home() {
  return (
    <main>
      {data.blocks.map((block, key) => (
        <Block block={block} key={key} />
      ))}
    </main>
  );
}
