import RadialChart from "@/components/Home/RadialChart";
import ChartOne from "@/components/Home/ChertOne";
import ProductsCard from "@/components/Home/ProductsCard";
import SubHeader from "@/components/Home/sub-header";
import ChartBar from "@/components/Home/ChartBar";
import ChartArea from "@/components/Home/ChartArea";
import ChartLine from "@/components/Home/CartLine";
import CardTable from "@/components/Home/CardTable";

export default function Home() {
  return (
    <div className="space-y-7">
      <SubHeader />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <ChartOne />
        </div>
        <ProductsCard />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <RadialChart />
        <ChartArea />
        <ChartBar />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <CardTable />
        </div>
        <ChartLine />
      </div>
    </div>
  );
}
