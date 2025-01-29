export default function ProductDetail({ params }: { params: { productId: string } }) {
    return (
        <div>
            <h1>Detail About Product</h1>
            <p>This is the product details page {params.productId}</p>
        </div>
    )
}