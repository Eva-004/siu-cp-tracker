"use client";

import React, { useState } from "react";
import {
Button,
Input,
Label,
Modal,
Surface,
TextField,
Select,
ListBox,
} from "@heroui/react";
import { FaUserPlus } from "react-icons/fa";

const semesters = [
"1-1",
"1-2",
"2-1",
"2-2",
"3-1",
"3-2",
"4-1",
"4-2",
];

const AddMember = () => {
const [semester, setSemester] = useState("");
const [loading, setLoading] = useState(false);


const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const codeforces = formData.get("codeforces");
    const atcoder = formData.get("atcoder");

    const memberData = {
        name,
        semester,
        codeforces,
        atcoder,
    };

    console.log("Member data:", memberData);

    setLoading(true);

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/members`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(memberData),
        }
    );

    const data = await response.json();

    console.log(data);

    setLoading(false);
};

return (
    <Modal>
        <Button
            className="bg-[#0783a3] text-white hover:bg-[#066f8b]"
        >
            <FaUserPlus size={15} color="#fbbf24" />
            Add New Member
        </Button>

        <Modal.Backdrop>
            <Modal.Container placement="auto">
                <Modal.Dialog className="w-full sm:max-w-lg">
                    <Modal.CloseTrigger className="text-amber-400" />

                    <Modal.Header>
                        <Modal.Icon className="bg-cyan-50 text-[#0783a3] dark:bg-cyan-950/50 dark:text-cyan-400">
                            <FaUserPlus className="size-5" />
                        </Modal.Icon>

                        <Modal.Heading>Add New Member</Modal.Heading>

                        <p className="mt-1.5 text-sm leading-5 text-gray-500 dark:text-gray-400">
                            Add a new member to the CP Tracker with their
                            competitive programming profiles.
                        </p>
                    </Modal.Header>

                    <Modal.Body className="p-6">
                        <Surface
                            variant="default"
                            className="border border-gray-200 dark:border-slate-700"
                        >
                            <form
                                id="add-member-form"
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-5 p-1"
                            >
                                <TextField
                                    className="w-full"
                                    name="name"
                                    type="text"
                                    
                                >
                                    <Label>Name</Label>
                                    <Input placeholder="Enter member name"  className="text-gray-900 placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500" />
                                </TextField>

                                <Select
                                    className="w-full"
                                    selectedKey={semester}
                                    onSelectionChange={setSemester}
                                >
                                    <Label>Semester</Label>

                                    <Select.Trigger>
                                        <Select.Value placeholder="Select semester"  className="text-gray-900 placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500" />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover>
                                        <ListBox>
                                            {semesters.map((semester) => (
                                                <ListBox.Item
                                                    key={semester}
                                                    id={semester}
                                                    textValue={semester}
                                                >
                                                    {semester}
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            ))}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>

                                <TextField
                                    className="w-full"
                                    name="codeforces"
                                    type="text"
                                    
                                >
                                    <Label>Codeforces Handle</Label>

                                    <Input placeholder="Enter Codeforces handle"  className="text-gray-900 placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500" />
                                </TextField>

                                <TextField
                                    className="w-full"
                                    name="atcoder"
                                    type="text"
                                    
                                >
                                    <Label>AtCoder Handle</Label>

                                    <Input placeholder="Enter AtCoder handle"  className="text-gray-900 placeholder:text-gray-400 dark:text-white dark:placeholder:text-gray-500" />
                                </TextField>

                                <Modal.Footer>
                                    <Button
                                        slot="close"
                                        
                                    >
                                        Cancel
                                    </Button>

                                    <Button
                                        type="submit"
                                        isDisabled={loading}
                                        className="bg-[#0783a3] text-white hover:bg-[#066f8b]"
                                    >
                                        <FaUserPlus size={14} color="#fbbf24"/>
                                        {loading
                                            ? "Adding..."
                                            : "Add Member"}
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Surface>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal.Container>
        </Modal.Backdrop>
    </Modal>
);


};

export default AddMember;
