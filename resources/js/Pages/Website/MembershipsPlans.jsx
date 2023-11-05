import { Head, usePage } from "@inertiajs/react";
import Master from "./Master";
import PricingCard from "@/Components/Wesite/Pricing";
import { useState } from "react";

function MembershipsPlans(props) {
    const { memberships } = usePage().props;
    const [membershipCards, setMemberShipCards] = useState(memberships);
    return (
        <>
            <Head title="Pricing" />
            <Master props={props}>
                <section className="w-full bg-gray-900">
                    <div className="text-center p-10">
                        <div className="uppercase text-theme-orange text-2xl font-[700]">
                            <p> OUR PLAN</p>
                        </div>
                        <div className="uppercase text-white text-[32px] font-[600]">
                            <p>CHOOSE YOUR PRICING PLAN</p>
                        </div>
                    </div>
                    <div className="container mx-auto p-10">
                        <div className="w-full flex gap-3 flex-grow justify-between flex-wrap">
                            {membershipCards.map((item, index) => (
                                <PricingCard
                                    key={index}
                                    id={item.id}
                                    name={item.name}
                                    price={item.price}
                                    description={item.description}
                                    duration={item.duration}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </Master>
        </>
    );
}

export default MembershipsPlans;
