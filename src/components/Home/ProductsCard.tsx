import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Product from './Product'

export default function ProductsCard() {
    const products = [
        {
            title: "حذاء سوبر استار",
            image: "/products/1.png",
            description: "العدد بالمخزون:62 "
        },
        {
            title: "حقيبة رياضية",
            image: "/products/2.png",
            description: "العدد بالمخزون:32 "
        },
        {
            title: "سترة خريفية سوداء",
            image: "/products/3.png",
            description: "العدد بالمخزون:92 "
        },
    ]
  return (
    <Card className='border-none shadow-none'>
        <CardHeader>
            <CardTitle className='text-gray-500'>المنتجات الاكثر مبيعاً</CardTitle>
        </CardHeader>
        <CardContent className='space-y-3'>
            {
                products.map((product, index) => <Product key={index} product={product} />)
            }
        </CardContent>
    </Card>
  )
}
