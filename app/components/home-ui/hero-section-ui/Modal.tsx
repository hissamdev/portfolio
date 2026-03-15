import { useEffect, useRef } from "react"

export default function Modal({ children, showModal, onClose }: { children: React.ReactNode, showModal: boolean, onClose: () => void }) {
    const modalRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (showModal) {
            modalRef.current?.showModal()
        } else {
            modalRef.current?.close()
        }
    }, [showModal])

    const handleBackdropClick = (e) => {
        if (e.target === modalRef.current) {
            onClose()
        }
    }

    return (
        <dialog ref={modalRef} onClick={handleBackdropClick} className="content-center max-w-none w-auto h-full bg-transparent backdrop:bg-black/80">
            {children}
        </dialog>
    )
}