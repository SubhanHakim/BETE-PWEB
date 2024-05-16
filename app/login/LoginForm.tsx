'use client'

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/input/Input";
import { register } from "module";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import ButtonPrimary from "../components/ButtonPrimary";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";


const LoginForm = () => {
    const [isLoading, setIsloading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsloading(true)
        console.log(data);

    }

    return (
        <>
            <Heading title="Masuk ke Eksklusif" />
            <p>Masukkan detail Anda di bawah</p>
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
            <Input id="password" type="password" label="Password" disabled={isLoading} register={register} errors={errors} required />
            <ButtonPrimary label={isLoading ? "Loading" : "Daftar"} onClick={handleSubmit(onSubmit)} />
            <ButtonPrimary outline label="Masuk dengan Google" icon={FaGoogle} onClick={() => {}} />
            <p className="text-sm">Belum punya akun ?
                <Link href='/register' className="underline">Daftar</Link>
            </p>
        </>
    );
}

export default LoginForm;