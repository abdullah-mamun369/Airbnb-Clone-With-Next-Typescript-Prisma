'use client'

import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc"
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast"
import Button from "../Button";


const RegisterModal = () => {

    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post("/api/register", data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) => {
                toast.error("Something went wrong")
            })
            .finally(() => {
                setIsLoading(false);
            })
    }


    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome To Airbnb"
                subtitle="Create an Account"
            />

            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => { }}
            />
            <Button
                outline
                label="Continue with GitHub"
                icon={AiFillGithub}
                onClick={() => { }}
            />
            <div className="justify-center flex flex-row items-center gap-2">
                <div>
                    Already have an account
                </div>
                <div onClick={registerModal.onClose} className="text-neutral-800 cursor-pointer hover:underline hover:text-rose-500">
                    Log in
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <Modal
                disabled={isLoading}
                isOpen={registerModal.isOpen}
                title="Register"
                actionLabel="Continue"
                onClose={registerModal.onClose}
                onSubmit={handleSubmit(onSubmit)}
                body={bodyContent}
                footer={footerContent}
            />
        </div>
    );
};

export default RegisterModal;