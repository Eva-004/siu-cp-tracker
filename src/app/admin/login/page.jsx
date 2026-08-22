"use client";

import React from "react";
import {
    Button,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { ShieldCheck } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
    const onSubmit =async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get("email");
        const password = formData.get("password");

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            rememberMe: true,
            callbackURL: "/",
        });

        console.log(data,error)
    };

    return (
        <main className="flex min-h-[50vh] items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-md">
                <div className="pt-2 text-center">

                    <h1 className="text-2xl font-bold tracking-tight text-[#03254C]">
                        CP Tracker
                    </h1>
                </div>
               
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-slate-900">
                            Welcome back
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Sign in to manage the CP Tracker dashboard.
                        </p>
                    </div>

                    <Form
                        className="flex w-full flex-col gap-5"
                        onSubmit={onSubmit}
                    >
                        
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        value
                                    )
                                ) {
                                    return "Please enter a valid email address";
                                }

                                return null;
                            }}
                        >
                            <Label className="text-sm font-medium text-slate-700">
                                Admin Email
                            </Label>

                            <Input
                                placeholder="admin@cptracker.com"
                                className="mt-1"
                            />

                            <FieldError />
                        </TextField>

                        
                        <TextField
                            isRequired
                            name="password"
                            type="password"
                        >
                            <div className="flex items-center justify-between">
                                <Label className="text-sm font-medium text-slate-700">
                                    Password
                                </Label>

                                <button
                                    type="button"
                                    className="text-xs font-medium text-[#03254C] hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <Input
                                placeholder="Enter your password"
                                className="mt-1"
                            />

                            <FieldError />
                        </TextField>

                        
                        <Button
                            type="submit"
                            className="mt-2 w-full bg-[#03254C] text-white shadow-sm hover:bg-[#021d3a]"
                        >
                            <ShieldCheck />
                            Sign in as Admin
                        </Button>
                    </Form>
                </div>

                
                <p className="mt-6 text-center text-xs text-slate-400">
                    SIU Competitive Programming Club
                </p>
            </div>
        </main>
    );
};

export default LoginPage;