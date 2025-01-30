export default function Docs({ params }: { params: { slug?: string[] } }) {
    if (!params.slug) {
        return (
            <div>
                <h1>Docs</h1>
                <p>This is the docs page</p>
            </div>
        )
    }

    if (params.slug.length === 2) {
        return (
            <div>
                <h1>Docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
                <p>This is the docs page</p>
            </div>
        )
    }

    if (params.slug.length === 1) {
        return (
            <div>
                <h1>Docs for feature {params.slug[0]}</h1>
                <p>This is the docs page</p>
            </div>
        )
    }
}