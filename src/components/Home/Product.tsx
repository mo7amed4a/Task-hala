import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ProductType {
  title: string;
  image: string;
  description: string;
}
export default function Product({ product }: { product: ProductType }) {
  return (
    <Card className="border-none bg-transparent shadow-none rounded-none flex !flex-row gap-4">
      <CardHeader className="size-[64px] p-0">
        <img className="size-full rounded" src={product.image} />
      </CardHeader>
      <CardContent className="flex items-center p-0 h-[64px]">
        <div className="space-y-2">
          <CardTitle className="text-sm">{product.title}</CardTitle>
          <CardDescription className="text-xs">{product.description}</CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
