'use client'

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/input/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import ButtonPrimary from "../components/ButtonPrimary";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";


const RegisterForm = () => {
    const [isLoading, setIsloading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const router = useRouter()


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsloading(true)

        axios.post("/api/register", data).then(() => {
            toast.success("akun telah dibuat")

            signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false
            }).then((callback) => {
                if (callback?.ok) {
                    router.push('./cart')
                    router.refresh()
                    toast.success("masuk")
                }

                if (callback?.error) {
                    toast.error(callback.error)
                }
            })
        }).catch(() => toast.error("ada yang salah")).finally(() =>
            setIsloading(false)
        )
    }

    return (
        <>
            <Heading title="Create an account" />
            <p>Enter your details below</p>
            <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
            <Input id="password" type="password" label="Password" disabled={isLoading} register={register} errors={errors} required />
            <ButtonPrimary label={isLoading ? "Loading" : "Daftar"} onClick={handleSubmit(onSubmit)} />
            <ButtonPrimary outline label="Daftar dengan Google" icon={FaGoogle} onClick={() => { }} />
            <p className="text-sm">Sudah punya akun ?
                <Link href='/login' className="underline">Masuk</Link>
            </p>
        </>
    );
}

export default RegisterForm;