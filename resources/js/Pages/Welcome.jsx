import Navbar from "@/Components/Wesite/Navbar";
import { Link, Head } from "@inertiajs/react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar props={props} />
        </>
    );
}
