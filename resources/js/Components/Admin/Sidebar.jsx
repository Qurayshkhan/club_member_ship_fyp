import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faGauge, faTag, faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { Link, usePage } from "@inertiajs/react";

let SideBar = ({ props, permissions }) => {

    const { name } = permissions;
    const { url } = usePage();
    const iconColor = {
        color: "white", // Default icon color is white
    };
    const activeLinkStyle = {
        color: "#f36010", // Color for active link
    };

    const hasAnyPermission = (permissionNames) => {
        return permissionNames.some((permissionName) =>
            permissions.some((permission) => permission.name === permissionName)
        );
    };
    return (
        <>
            <div className="flex flex-col p-3">
                {hasAnyPermission(["can_view_dashboard"]) && (

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
                )}
                {hasAnyPermission(["can_view_users"]) && (

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
                )}
                {hasAnyPermission(["can_view_memberships"]) && (
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
                )}
                {hasAnyPermission(["can_view_memberships"]) && (
                    <div className="flex gap-2 p-5 border-b-2 border-white">
                        <div className="font-[700]">
                            <FontAwesomeIcon icon={faDumbbell} style={
                                url === "/admin/gym-classes"
                                    ? activeLinkStyle
                                    : iconColor
                            } />
                        </div>
                        <div className="font-[700] text-white">
                            <Link
                                style={
                                    url === "/admin/gym-classes"
                                        ? activeLinkStyle
                                        : iconColor
                                }
                                preserveScroll
                                className="hover:text-white"
                                href={route("admin.gym_classes")}
                            >
                                Classes
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default SideBar;
