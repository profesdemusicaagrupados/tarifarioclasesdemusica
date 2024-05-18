import Table from "@/components/Blocks/Table/Table";
import Text from "@/components/Blocks/Text/Text";
import Separator from "@/components/Blocks/Separator/Separator";

export default function Block({ block }) {
  const blocks = {
    table: Table,
    text: Text,
    separator: Separator,
  };

  const DynamicBlock = blocks[block.component];

  return <DynamicBlock content={block.content} />;
}
