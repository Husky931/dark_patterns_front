"use client"
import React, { useState } from "react"

export default function Home() {
    const [remember, setRemember] = useState(true)

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="flex flex-col items-start justify-start rounded bg-white px-10 py-10">
                <div className="flex w-56 items-center justify-center">
                    <img src="/logo.svg" alt="logo" className="h-12 w-56" />
                </div>
                <div className="my-4  w-full text-center font-medium text-[#101213]">
                    Log in to your account
                </div>
                <form className="flex w-full flex-col">
                    <div className="my-2 w-full">
                        <input
                            type="text"
                            placeholder="Email Address"
                            className="w-full border-b-[1px] border-[#71becb] bg-transparent text-[#4F575E] placeholder-[#4F575E] focus:border-b-[1px] focus:border-[#71becb] focus:outline-none focus:ring-0"
                        />
                    </div>
                    <div className="my-2 w-full">
                        <input
                            type="text"
                            placeholder="Password"
                            className="w-full border-b-[1px] border-[#71becb] bg-transparent text-[#4F575E] placeholder-[#4F575E] focus:border-b-[1px] focus:border-[#71becb] focus:outline-none focus:ring-0"
                        />
                    </div>
                </form>
                <div className="flex items-center justify-between">
                    <div className="form-control my-4 w-full">
                        <label className="label cursor-pointer justify-start gap-x-2">
                            <input
                                type="checkbox"
                                checked={remember}
                                className="checkbox text-white"
                                onChange={() => setRemember(!remember)}
                            />
                            <span className="label-text ">Remember me</span>
                        </label>
                    </div>
                    <div className="cursor-pointer text-[11px] text-[#1068EB]">
                        Forgot password?
                    </div>
                </div>

                <button className="btn mt-2 border-none bg-[#71becb] text-white hover:bg-[#60a1ac]">
                    Log in
                </button>
            </div>
        </main>
    )
}
