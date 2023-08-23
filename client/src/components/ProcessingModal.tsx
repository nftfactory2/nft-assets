import React from "react";
import Button from "@/common/Button";
import Image from "next/image";
import { orbitron } from "@/fonts/fonts";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const ProcessingModal = () => {
    return (
        <div className='flex justify-center relative'>
            <div
                className='w-3/5 flex justify-center flex-col items-center pt-14 pb-5'
                style={{
                    background:
                        'linear-gradient(150deg, rgba(255, 199, 44, 0.16) 0%, rgba(19, 7, 18, 1) 100%)',
                }}
            >
                <h2 className={`${orbitron.className} text-2xl`}>
                    Transaction Processing
                </h2>
                <p>Your transaction is been published, please exercise patience! </p>

                <div>
                    <Link
                        href={'/'}
                        className='flex justify-center items-center gap-2 p-3 text-primary'
                    >
                        <p>View-On Explorer</p>
                        <FontAwesomeIcon icon={faExternalLink} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProcessingModal;