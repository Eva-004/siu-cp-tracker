"use client";

import React, { useState } from "react";
import {
    Table,
    ProgressBar,
    Chip,
    Tabs,
} from "@heroui/react";
import {
    CheckCircle2,
    Lightbulb,
} from "lucide-react";

const membersData = [
    {
        id: 1,
        name: "Eva",
        cf: { val: "3/4", progress: 75 },
        cfSolved: 2,
        cfUpsolved: 1,
        ac: "2/4",
        acSolved: 1,
        acUpsolved: 2,
    },
    {
        id: 2,
        name: "Leo",
        cf: { val: "3/4", progress: 75 },
        cfSolved: 4,
        cfUpsolved: 1,
        ac: "2/4",
        acSolved: 1,
        acUpsolved: 1,
    },
    {
        id: 3,
        name: "Mia",
        cf: { val: "3/4", progress: 75 },
        cfSolved: 3,
        cfUpsolved: 0,
        ac: "2/4",
        acSolved: 1,
        acUpsolved: 0,
    },
    {
        id: 4,
        name: "Ben",
        cf: { val: "0/8", progress: 0 },
        cfSolved: 2,
        cfUpsolved: 0,
        ac: "2/4",
        acSolved: 1,
        acUpsolved: 0,
    },
    {
        id: 5,
        name: "Zoe",
        cf: { val: "1/5", progress: 20 },
        cfSolved: 1,
        cfUpsolved: 0,
        ac: "2/7",
        acSolved: 1,
        acUpsolved: 0,
    },
];

export default function TrackerTable() {
    const [selectedFilter, setSelectedFilter] = useState("week");

    return (
        <div className="w-full space-y-6">
           
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        Contest Performance
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Track Codeforces and AtCoder participation, solved problems, and upsolved progress
                    </p>
                </div>

                <div className="flex items-center rounded-xl border border-border bg-card p-1 shadow-sm">
                    {[
                        { key: "week", label: "This Week" },
                        { key: "month", label: "This Month" },
                        { key: "year", label: "Year" },
                    ].map((filter) => (
                        <button
                            key={filter.key}
                            type="button"
                            onClick={() => setSelectedFilter(filter.key)}
                            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${selectedFilter === filter.key
                                ? "bg-[#03254C] text-white font-bold"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

           
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <Table>
                    <Table.ScrollContainer>
                        <Table.Content
                            aria-label="Contest Tracker Table"
                            className="min-w-[650px]"
                        >
                            <Table.Header>
                                <Table.Column
                                    isRowHeader
                                    className="border-b border-border py-3 text-left text-xs font-semibold uppercase text-muted-foreground"
                                >
                                    Member
                                </Table.Column>

                                <Table.Column
                                    className="border-b border-border py-3 text-center text-xs font-semibold uppercase text-muted-foreground"
                                >
                                    CF Participation contest
                                </Table.Column>

                                <Table.Column
                                    className="border-b border-border py-3 text-center text-xs font-semibold uppercase text-muted-foreground"
                                >
                                    Solved
                                </Table.Column>

                                <Table.Column
                                    className="border-b border-border py-3 text-center text-xs font-semibold uppercase text-muted-foreground"
                                >
                                    Upsolved
                                </Table.Column>

                                <Table.Column
                                    className="border-b border-border py-3 text-center text-xs font-semibold uppercase text-muted-foreground"
                                >
                                    AtCoder contest
                                </Table.Column>

                                <Table.Column
                                    className="border-b border-border py-3 text-center text-xs font-semibold uppercase text-muted-foreground"
                                >
                                    Solved
                                </Table.Column>

                                <Table.Column
                                    className="border-b border-border py-3 text-center text-xs font-semibold uppercase text-muted-foreground"
                                >
                                    Upsolved
                                </Table.Column>
                            </Table.Header>

                            <Table.Body>
                                {membersData.map((item) => (
                                    <Table.Row
                                        key={item.id}
                                        id={String(item.id)}
                                        className="border-b border-border/50 transition-colors hover:bg-muted/30"
                                    >
                                        
                                        <Table.Cell className="py-4 text-left font-bold text-foreground">
                                            {item.name}
                                        </Table.Cell>

                                        
                                        <Table.Cell className="py-4 text-center">
                                            <div className="mx-auto flex max-w-[120px] flex-col items-center gap-1">
                                                <span className="text-sm font-semibold text-cyan-500">
                                                    {item.cf.val}
                                                </span>

                                                <ProgressBar
                                                    aria-label={`${item.name} Codeforces participation`}
                                                    size="sm"
                                                    value={item.cf.progress}
                                                    color="primary"
                                                    classNames={{
                                                        base: "h-1.5 w-full bg-muted",
                                                        indicator:
                                                            "bg-gradient-to-r from-cyan-500 to-blue-600",
                                                    }}
                                                />
                                            </div>
                                        </Table.Cell>

                                        <Table.Cell className="py-4 text-center">
                                            <div className="flex items-center justify-center">
                                                <Chip
                                                    variant="flat"
                                                    color="success"
                                                    size="sm"
                                                    className="gap-1 px-2 font-semibold"
                                                >
                                                    <span className="flex items-center gap-1">
                                                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                                                        {item.acSolved}
                                                    </span>
                                                </Chip>
                                            </div>
                                        </Table.Cell>

                                      
                                        <Table.Cell className="py-4 text-center">
                                            <div className="flex items-center justify-center">
                                                {item.cfUpsolved > 0 ? (
                                                    <Chip
                                                        variant="flat"
                                                        color="warning"
                                                        size="sm"
                                                        className="gap-1 px-2 font-semibold"
                                                    >
                                                        <span className="flex items-center gap-1">
                                                            <Lightbulb className="h-3.5 w-3.5 fill-amber-500/20 text-amber-500" />
                                                            {item.acUpsolved}
                                                        </span>
                                                    </Chip>
                                                ) : (
                                                    <span className="font-medium text-muted-foreground">
                                                        {item.cfUpsolved}
                                                    </span>
                                                )}
                                            </div>
                                        </Table.Cell>

                                      
                                        <Table.Cell className="py-4 text-center font-semibold text-foreground/80">
                                            {item.ac}
                                        </Table.Cell>

                                      
                                        <Table.Cell className="py-4 text-center">
                                            <div className="flex items-center justify-center">
                                                <Chip
                                                    variant="flat"
                                                    color="success"
                                                    size="sm"
                                                    className="gap-1 px-2 font-semibold"
                                                >
                                                    <span className="flex items-center gap-1">
                                                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                                                        {item.acSolved}
                                                    </span>
                                                </Chip>
                                            </div>
                                        </Table.Cell>

                                        
                                        <Table.Cell className="py-4 text-center">
                                            <div className="flex items-center justify-center">
                                                {item.acUpsolved > 0 ? (
                                                    <Chip
                                                        variant="flat"
                                                        color="warning"
                                                        size="sm"
                                                        className="gap-1 px-2 font-semibold"
                                                    >
                                                        <span className="flex items-center gap-1">
                                                            <Lightbulb className="h-3.5 w-3.5 fill-amber-500/20 text-amber-500" />
                                                            {item.acUpsolved}
                                                        </span>
                                                    </Chip>
                                                ) : (
                                                    <span className="font-medium text-muted-foreground">
                                                        {item.acUpsolved}
                                                    </span>
                                                )}
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            </div>
        </div>
    );
}