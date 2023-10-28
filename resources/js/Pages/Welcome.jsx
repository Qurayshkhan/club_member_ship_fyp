import Navbar from "@/Components/Wesite/Navbar";
import Carousal from "@/Components/Wesite/Carousel";
import Cards from "@/Components/Wesite/Cards";
import { Link, Head, usePage } from "@inertiajs/react";
import PricingCard from "@/Components/Wesite/Pricing";
import FooterBrand from "@/Components/Wesite/Footer";

import { Footer, FooterComponent } from "flowbite-react";
export default function Welcome(props) {
    const { canLogin, canRegister, laravelVersion, phpVersion, image } =
        usePage().props;
    const { class_3, class_4, class_5, phone, message, location } = image;
    return (
        <>
            <Head title="Home" />
            <div className="h-screen  bg-gray-900">
                <section className="">
                    <Navbar props={props} />
                </section>
                <section className="h-full w-full bg-gray-900">
                    <div className="relative h-full">
                        <Carousal props={image} />
                    </div>
                </section>
                <section className="w-full bg-gray-900">
                    <div className="text-center p-10">
                        <div className="uppercase text-theme-orange text-2xl font-[700]">
                            Why Chose us ?
                        </div>
                        <div className="uppercase text-white text-[32px] font-[600]">
                            PUSH YOUR LIMITS FORWARD
                        </div>
                    </div>
                    <div className="container h-full mx-auto p-10">
                        <div className="w-full flex gap-3 flex-auto">
                            <Cards
                                props={class_3}
                                title="Modern equipment"
                                description="
                                Exercise equipment is any apparatus or device used during physical activity to enhance the strength or conditioning effects of that exercise by providing either fixed or adjustable amounts of resistance, or to otherwise enhance the experience or outcome of an exercise routine."
                            />
                            <Cards
                                props={class_4}
                                title="Healthy nutrition plan"
                                description="
                                Exercise equipment is any apparatus or device used during physical activity to enhance the strength or conditioning effects of that exercise by providing either fixed or adjustable amounts of resistance, or to otherwise enhance the experience or outcome of an exercise routine."
                            />
                            <Cards
                                props={class_5}
                                title="Proffesponal training plan"
                                description=" Exercise equipment is any apparatus or device used during physical activity to enhance the strength or conditioning effects of that exercise by providing either fixed or adjustable amounts of resistance, or to otherwise enhance the experience or outcome of an exercise routine."
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full bg-gray-900">
                    <div className="text-center p-10">
                        <div className="uppercase text-theme-orange text-2xl font-[700]">
                            OUR PLAN
                        </div>
                        <div className="uppercase text-white text-[32px] font-[600]">
                            CHOOSE YOUR PRICING PLAN
                        </div>
                    </div>
                    <div className="container mx-auto p-10">
                        <div className="w-full flex gap-3 flex-grow justify-evenly sm:flex-wrap">
                            <PricingCard />
                            <PricingCard />
                            <PricingCard />
                        </div>
                    </div>
                </section>

                <section className="w-full bg-gray-900 text-white">
                    <div className="container flex justify-between p-5 mx-auto">
                        <div className="flex gap-2 items-center">
                            <div>
                                <img src={location} alt="" width="65px" />
                            </div>
                            <div>
                                333 Middle Winchendon Rd, Rindge, NH 03461
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div>
                                <img src={phone} alt="" width="65px" />
                            </div>
                            <div>125-711-811 125-668-886</div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div>
                                <img src={message} alt="" width="65px" />
                            </div>
                            <div>Support.gymcenter@gmail.com</div>
                        </div>
                    </div>
                    <FooterBrand />
                </section>
            </div>
        </>
    );
}
