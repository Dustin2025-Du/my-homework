import { useRouter } from 'next/router'
export default function Page() {
    const router = useRouter()
    return (
        <div>this is blog  {router.query.id}</div>
    );
}