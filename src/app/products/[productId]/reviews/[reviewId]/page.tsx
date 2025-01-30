export default function ReviewDetail({ params }: { params: { productId: string, reviewId: string } }) {
    return (
        <div>
            <h1>Detail About Review</h1>
            <p>This is the review details page {params.reviewId} of {params.productId}</p>
        </div>
    )
}