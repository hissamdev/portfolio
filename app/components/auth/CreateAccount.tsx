'use client'

import { useState } from "react";
import AuditForm from "./AuditForm";
import EnterCode from "./EnterCode";

export default function CreateAccount({ toggleModal }: {toggleModal: () => void}) {

    return (
        <>
            <div onClick={toggleModal} className="z-51 px-[21px] fixed inset-0 flex justify-center items-center bg-black/90">
                <AuditForm />
                <EnterCode />
            </div>
        </>
  );
};