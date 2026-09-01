"use client";

import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import MemberTable from "@/components/pageComponents/MamberTable";
import SearchMember from "@/components/pageComponents/SearchMember";
import AddMember from "@/components/modals/AddMember";

export default function ManageMember() {
    const [members, setMembers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/api/members`
        );

        const data = await response.json();

        setMembers(data);
    };

    const handleEdit = (member) => {
        console.log("Edit member:", member);
    };

    const handleDelete = (member) => {
        console.log("Delete member:", member);
    };

    const filteredMembers = members.filter((member) => {
        const searchValue = search.toLowerCase();

        return (
            member.name?.toLowerCase().includes(searchValue) ||
            member.email?.toLowerCase().includes(searchValue) ||
            member.codeforces?.toLowerCase().includes(searchValue) ||
            member.atcoder?.toLowerCase().includes(searchValue)
        );
    });

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 text-gray-900 transition-colors duration-300 dark:bg-[#0f172a] dark:text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                            Manage Members
                        </h1>

                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Manage CP Tracker members and their Codeforces profiles.
                        </p>
                    </div>

                    <AddMember />
                </div>

                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                        <div className="flex items-center gap-4">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 dark:bg-cyan-950/50">
                                <FaUsers
                                    size={20}
                                    color="#fbbf24"
                                />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Total Members
                                </p>

                                <h2 className="mt-1 text-2xl font-bold">
                                    {members.length}
                                </h2>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">

                    <div className="border-b border-gray-200 px-5 py-4 dark:border-slate-700">

                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                            <div>
                                <h2 className="text-lg font-semibold">
                                    All Members
                                </h2>

                                <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                                    View and manage all registered members.
                                </p>
                            </div>

                            <SearchMember
                                value={search}
                                onChange={setSearch}
                            />

                        </div>
                    </div>

                    <MemberTable
                        members={filteredMembers}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />

                </div>
            </div>
        </div>
    );
}