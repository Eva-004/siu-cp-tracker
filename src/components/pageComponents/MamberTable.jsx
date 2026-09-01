"use client";

import React from "react";
import { Table } from "@heroui/react";
import {
    FaPencilAlt,
    FaTrashAlt,
    FaEllipsisV,
} from "react-icons/fa";

export default function MemberTable({
    members,
    handleEdit,
    handleDelete,
}) {
    return (
        <div className="overflow-hidden">
            {members.length === 0 ? (
                <div className="px-5 py-12 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        No members found.
                    </p>
                </div>
            ) : (
                <Table>
                    <Table.ScrollContainer>
                        <Table.Content
                            aria-label="CP Tracker members"
                            className="min-w-[1000px]"
                        >
                            <Table.Header>
                                <Table.Column
                                    isRowHeader
                                    className="bg-gray-100 text-left text-sm font-semibold text-gray-700 dark:bg-slate-700 dark:text-gray-200"
                                >
                                    Member
                                </Table.Column>

                                <Table.Column className="bg-gray-100 text-left text-sm font-semibold text-gray-700 dark:bg-slate-700 dark:text-gray-200">
                                    Semester
                                </Table.Column>

                                <Table.Column className="bg-gray-100 text-left text-sm font-semibold text-gray-700 dark:bg-slate-700 dark:text-gray-200">
                                    Codeforces
                                </Table.Column>

                                <Table.Column className="bg-gray-100 text-left text-sm font-semibold text-gray-700 dark:bg-slate-700 dark:text-gray-200">
                                    AtCoder
                                </Table.Column>

                                <Table.Column className="bg-gray-100 text-left text-sm font-semibold text-gray-700 dark:bg-slate-700 dark:text-gray-200">
                                    Actions
                                </Table.Column>
                            </Table.Header>

                            <Table.Body>
                                {members.map((member, ind) => (
                                    <Table.Row
                                        key={member._id || member.id}
                                    >
                                        <Table.Cell>
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 font-semibold text-amber-400 dark:bg-cyan-950/60 dark:text-amber-400">
                                                    {ind + 1}
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="font-medium text-gray-900 dark:text-white">
                                                        {member.name}
                                                    </p>

                                                    <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                                                        {member.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </Table.Cell>

                                        <Table.Cell>
                                            {member.semester ? (
                                                <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 dark:bg-slate-700 dark:text-gray-200">
                                                    {member.semester}
                                                </span>
                                            ) : (
                                                <span className="text-sm text-gray-400">
                                                    —
                                                </span>
                                            )}
                                        </Table.Cell>

                                        <Table.Cell>
                                            {member.codeforces ? (
                                                <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 dark:bg-slate-700 dark:text-gray-200">
                                                    {member.codeforces}
                                                </span>
                                            ) : (
                                                <span className="text-sm text-gray-400">
                                                    —
                                                </span>
                                            )}
                                        </Table.Cell>

                                        <Table.Cell>
                                            {member.atcoder ? (
                                                <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 dark:bg-slate-700 dark:text-gray-200">
                                                    {member.atcoder}
                                                </span>
                                            ) : (
                                                <span className="text-sm text-gray-400">
                                                    —
                                                </span>
                                            )}
                                        </Table.Cell>

                                        <Table.Cell>
                                            <div className="flex items-center gap-1">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleEdit(member)
                                                    }
                                                    title="Edit member"
                                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-cyan-50 hover:text-[#0783a3] dark:text-gray-400 dark:hover:bg-cyan-950/40 dark:hover:text-cyan-400"
                                                >
                                                    <FaPencilAlt size={14} />
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDelete(member)
                                                    }
                                                    title="Delete member"
                                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-red-50 hover:text-red-600 dark:text-gray-400 dark:hover:bg-red-950/40 dark:hover:text-red-400"
                                                >
                                                    <FaTrashAlt size={14} />
                                                </button>

                                                <button
                                                    type="button"
                                                    title="More options"
                                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-700"
                                                >
                                                    <FaEllipsisV size={14} />
                                                </button>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            )}
        </div>
    );
}