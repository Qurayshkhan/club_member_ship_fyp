"use client";

import { Carousel } from "flowbite-react";

export default function StaticCarousel({ props }) {
    return (
        <Carousel slide={false}>
            <img alt="..." src={props.hero_banner_1} />
            <img alt="..." src={props.hero_banner_2} />
        </Carousel>
    );
}
