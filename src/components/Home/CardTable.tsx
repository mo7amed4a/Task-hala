import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import DataTable from "./data-table";

export default function CardTable() {
  return (
    <Card className="border-none h-full">
        <CardHeader className="flex-row justify-between items-center">
            <CardTitle>اسباب عدم نجاح التوصيل</CardTitle>
            <CardDescription className="text-gray-800 text-sm">(28 طلب)</CardDescription>
        </CardHeader>
      <CardContent className="p-0">
        <DataTable />
      </CardContent>
    </Card>
  );
}
