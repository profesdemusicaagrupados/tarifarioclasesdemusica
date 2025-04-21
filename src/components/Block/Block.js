import Table from "@/components/Blocks/Table/Table";
import Text from "@/components/Blocks/Text/Text";
import Separator from "@/components/Blocks/Separator/Separator";
import Hero from "@/components/Blocks/Hero/Hero";
import Newsletter from "@/components/Blocks/Newsletter/Newsletter";
import Footer from "@/components/Blocks/Footer/Footer";
import ThreeColumnsTable from "@/components/Blocks/ThreeColumnsTable/ThreeColumnsTable";

export default function Block({ block }) {
  const blocks = {
    table: Table,
    text: Text,
    separator: Separator,
    hero: Hero,
    newsletter: Newsletter,
    footer: Footer,
    threeColumnsTable: ThreeColumnsTable,
  };

  const DynamicBlock = blocks[block.component];

  return <DynamicBlock content={block.content} />;
}
