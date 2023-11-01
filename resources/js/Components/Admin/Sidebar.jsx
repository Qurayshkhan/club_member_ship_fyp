import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faGauge, faTag } from "@fortawesome/free-solid-svg-icons";
import { Link, usePage } from "@inertiajs/react";

let SideBar = () => {
    const { url, component } = usePage();
    const iconColor = {
        color: "white", // Default icon color is white
    };
    const activeLinkStyle = {
        color: "#f36010", // Color for active link
    };
    return (
        <>
            <div className="flex flex-col p-3">
                <div className="flex gap-2 p-5 border-b-2 border-white">
                    <div className="font-[700]">
                        {/* <FontAwesomeIcon icon={faGaugeSimpleMin} /> */}
                        <FontAwesomeIcon
                            icon={faGauge}
                            style={
                                url === "/dashboard"
                                    ? activeLinkStyle
                                    : iconColor
                            }
                        />
                    </div>
                    <div className="font-[700] text-white">
                        <Link
                            style={
                                url === "/dashboard"
                                    ? activeLinkStyle
                                    : iconColor
                            }
                            preserveScroll
                            className="hover:text-white"
                            href="/dashboard"
                        >
                            Dashboard
                        </Link>
                    </div>
                </div>
                <div className="flex gap-2 p-5 border-b-2 border-white">
                    <div className="font-[700]">
                        <FontAwesomeIcon
                            icon={faUserGroup}
                            style={
                                url === "/admin/users"
                                    ? activeLinkStyle
                                    : iconColor
                            }
                        />
                    </div>
                    <div className="font-[700] text-white">
                        <Link
                            style={
                                url === "/admin/users"
                                    ? activeLinkStyle
                                    : iconColor
                            }
                            preserveScroll
                            className="hover:text-white"
                            href={route("users")}
                        >
                            Users
                        </Link>
                    </div>
                </div>
                <div className="flex gap-2 p-5 border-b-2 border-white">
                    <div className="font-[700]">
                        <FontAwesomeIcon
                            icon={faTag}
                            style={
                                url === "/admin/memberships"
                                    ? activeLinkStyle
                                    : iconColor
                            }
                        />
                    </div>
                    <div className="font-[700] text-white">
                        <Link
                            style={
                                url === "/admin/memberships"
                                    ? activeLinkStyle
                                    : iconColor
                            }
                            preserveScroll
                            className="hover:text-white"
                            href={route("memberships")}
                        >
                            Membership
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
