import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="bg-blue-600 py-2">
            <div className="grid grid-cols-12">
                <section className="col-span-10 col-start-2">
                    <div className="flex items-center">
                        <Link
                            className="mr-2 text-sm font-semibold uppercase text-white"
                            to="/"
                        >
                            INVENTARIS APP
                        </Link>
                        <Link to="/login">Login</Link>
                    </div>
                </section>
            </div>
        </div>
    );
}